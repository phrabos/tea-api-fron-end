import React, { Component } from 'react'
import request from 'superagent';
import { getCategories, getSingleTea, updateTea, deleteTea } from './api-utils.js';
import Spinner from './spinner.js';

export default class DetailPage extends Component {

    state={
        name: '',
        image: '',
        description: '',
        category: '',
        price: 0,
        aged: false,
        category_id: 0,
        categories: [],
    }
    componentDidMount = async () => {
         const categories = await getCategories();
            await this.setState({
            categories: categories,
            loading: true,
          })
          await this.fetchSingleTea();
        //   console.log(this.state)
        }
    fetchSingleTea = async () => {
        const data = await getSingleTea(this.props.match.params.teaID)

          await this.setState ({
              name: data.name,
              image: data.image,
              description: data.description,
              category: data.category,
              price: data.price,
              aged: data.aged,
              category_id: data.category_id,
              loading: false
            })
    }    
    handleSubmit = async (e) => {
        e.preventDefault();
        await updateTea(Number(this.props.match.params.teaID), 
            {
                name: this.state.name,
                image: this.state.image,
                description: this.state.description,
                category_id: Number(this.state.category_id),
                price: Number(this.state.price),
                aged: this.state.aged,
            }
            )

        this.props.history.push('/teas');
    };
    
    handleNameChange = async (e) => {
        this.setState({name: e.target.value})
    }
    handleDescriptionChange = async (e) => {
        this.setState({description: e.target.value})
    }
    handleCategoryChange = async (e) => {
        this.setState({
            category_id: Number(e.target.value),
            // category: e.target.value,
        })
    }
    handlePriceChange = async (e) => {
        this.setState({price: Number(e.target.value)})
    }
    handleAgedChange = async (e) => {
        await this.setState({aged: !this.state.aged})
    }

    handleDelete = async () => {
        
        await deleteTea(Number(this.props.match.params.teaID))

        this.props.history.push('/teas');
    };

        render() {
console.log(this.state)
        return (
            <div className='details-page'>
            {
            this.state.loading 
                ? <Spinner />
                : <div className='ul-detail'>
                    <form onSubmit={this.handleSubmit}>
                        <img src={`../${this.state.image}`} alt='tea' onError={(e)=>{e.target.onerror   = null; e.target.src="../gardenia.jpg"}}/><br></br>
                        <label>
                            Name:
                            <input value={this.state.name} onChange={this.handleNameChange} />
                        </label>
                        <label>
                            Description:
                            <input value={this.state.description} onChange={this.handleDescriptionChange} />
                        </label>
                        <label>
                            <select value={this.state.category_id} onChange={this.handleCategoryChange}>
                            {
                                this.state.categories
                                .map(category =>
                                <option key={category.name}value={category.id} selected={this.state.category_id === category.id}>
                                        {category.name}
                                </option>
                                    )
                            }
                            </select><br></br>
                        </label>
                        <label>
                            Price:
                            <input value={this.state.price} onChange={this.handlePriceChange} />
                        </label>
                        <label>
                            Aged:
                            <input type='checkbox' value={this.state.aged} onChange={this.handleAgedChange} checked={this.state.aged} />
                        </label><br></br>
                        <button>Update</button>
                    </form>
                    <button onClick={this.handleDelete}>Delete Item</button>
                </div>
            }
            </div>
        )
    }
}
