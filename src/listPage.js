import React, { Component } from 'react'
import TeaList from './teaList.js';
import './App.css';
import SideBar from './sideBar.js';
import Spinner from './spinner.js'
import { getFilteredCategories, getTeas } from './api-utils.js';


export default class ListPage extends Component {
    state = {
        objects: [],
        category: '',
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
        const data = await getFilteredCategories(this.state.category)
        
        await this.setState ({
          objects: data,
          loading: false,
        })
        
      }else {
        const data = await getTeas();
        console.log(data)
        await this.setState ({
          objects: data,
          loading: false,
        })
      }
    }

    handleSortChange = async (e) => {
      await this.setState({
        category: e.target.value,
      })
      await this.fetchTea();
    }
  

    render() {
   console.log(this.state)
        return (
          <>
            <div className='search-page'>
              <SideBar 
                handleSortChange = {this.handleSortChange}
                options = {['Yancha', 'Taiwanese Oolong', 'Dancong', 'Rolled Oolong', 'Pu\'erh']  }
                currentValue={this.state.category}
                placeholder={'-Category-'}
              />
            </div>
            <div className='images-section'>
              {this.state.loading 
              ? <Spinner />
              : <div className='ul-div'>
              <TeaList 
                dataObjects={this.state.objects}
              />
                </div>
            }
            </div>
          </> 
        )
    }
}
