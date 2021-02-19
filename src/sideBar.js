import React, { Component } from 'react'
import Dropdown from './Dropdown'
import SearchBox from './searchBox'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-box'>
                {/* <h4>Search by Name</h4>
                <SearchBox 
                    searchValue = {this.props.searchValue}
                    handleSearchButton = {this.props.handleSearchButton}
                    buttonHandler = {this.props.buttonHandler}
                /> */}
                <h4>Sort</h4>
                <Dropdown 
                    currentValue={this.props.currentValue}
                    handleSortChange={this.props.handleSortChange}
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}
