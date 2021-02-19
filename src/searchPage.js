import React, { Component } from 'react'
import PokeList from './pokeList.js';
import './App.css';
import SideBar from './sideBar.js';
import request from 'superagent';
import Spinner from './spinner.js'

export default class SearchPage extends Component {
    state = {
        objects: [],
        category: '',
        search: '',
        loading: false,
    }
    componentDidMount = async () =>{
        await this.fetchTea();

    }

    fetchTea = async () => {
        await this.setState({
        loading: true,
      })

      if(this.state.category){
        const data = await request.get (`https://tea-api-lab-06.herokuapp.com/tea/category/${this.state.category}`);
        console.log(data)
        await this.setState ({
          objects: data.body.teaByCategory,
          loading: false,
  
        })
      }else {
        const data = await request.get (`https://tea-api-lab-06.herokuapp.com/tea/`);
        await this.setState ({
          objects: data.body.data,
          loading: false,
  
        })
      }

    }

    handleSearchChange = async (e) => {
        this.setState({
          search: e.target.value,
        })
      }

    handleSearchButton = async () => {
      await this.fetchTea()
    }

    handleSortChange = async (e) => {
      await this.setState({
        category: e.target.value,
      })
      await this.fetchTea();
    }
    handleClearButtonChange = async () => {
      await this.setState({

        category: '',
        search: '',

      })
      await this.fetchTea()
      }
  

    render() {
   
        return (
          <>
            <div className='search-page'>

            <SideBar 
            // searchValue = {this.handleSearchChange}
            // handleSearchButton = {this.handleSearchButton}
            buttonHandler = {this.handleClearButtonChange}
            handleSortChange = {this.handleSortChange}
            options = {['Yancha', 'Taiwanese Oolong', 'Dancong', 'Rolled Oolong', 'Pu\'erh']}
            currentValue={this.state.category}
            placeholder={'-Category-'}


            />
            </div>
            <div className='images-section'>


            {this.state.loading 
            ? <Spinner />
            : <div className='ul-div'>
            <PokeList 
            dataObjects={this.state.objects}
            />
            </div>
            }
            </div>
          </> 
        )
    }
}
