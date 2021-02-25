import React, { Component } from 'react'
import request from 'superagent';
import { addTea } from './api-utils.js';
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

    handleSubmit = async (e) => {
        e.preventDefault();
        await addTea( 
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
    handleImageChange = async (e) => {
        this.setState({image: e.target.value})
    }
    handleDescriptionChange = async (e) => {
        this.setState({description: e.target.value})
    }
    handleCategoryChange = async (e) => {
        this.setState({
            category_id: Number(e.target.value),
            // category: 
        })
    }
    handlePriceChange = async (e) => {
        this.setState({price: Number(e.target.value)})
    }
    handleAgedChange = async (e) => {
        await this.setState({aged: !this.state.aged})
    }

        render() {
console.log(this.state)
        return (
            <div className='details-page'>
            {
            this.state.loading 
                ? <Spinner />
                : <div className='ul-detail'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Tea Name:
                            <input value={this.state.name} onChange={this.handleNameChange} />
                        </label>
                        <label>
                            Tea Image:
                            <input value={this.state.image} onChange={this.handleImageChange} />
                        </label>
                        <label>
                            Description:
                            <input value={this.state.description} onChange={this.handleDescriptionChange} />
                        </label>
                        <label>
                            <select value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value={1}>Yancha</option>
                            <option value={2}>Taiwanese Oolong</option>
                            <option value={3}>Dancong</option>
                            <option value={4}>Rolled Oolong</option>
                            <option value={5}>Pu'erh</option>


                            </select><br></br>
                        </label>
                        <label>
                            Price:
                            <input value={this.state.price} onChange={this.handlePriceChange} />
                        </label>
                        <label>
                            Aged:
                            <input type='checkbox' value={this.state.aged} onChange={this.handleAgedChange} />
                        </label><br></br>
                        <button>Add Tea</button>
                    </form>
                </div>
            }
            </div>
        )
    }
}
