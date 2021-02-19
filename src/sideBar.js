import React, { Component } from 'react'
import Dropdown from './Dropdown'
// import SearchBox from './searchBox'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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
                {/* <FormControl className='material-UI-form'>
                <InputLabel>Category</InputLabel> */}
                <Select onChange={this.props.handleSortChange}value={this.props.currentValue}>
                    <MenuItem value='' disabled>{this.props.placeholder}</MenuItem>
                    <MenuItem value='Yancha'>Yancha</MenuItem>
                    <MenuItem value='Dancong'>Dancong</MenuItem>
                    <MenuItem value='Taiwanese Oolong'>Taiwanese Oolong</MenuItem>
                    <MenuItem value='Rolled Oolong'>Rolled Oolong</MenuItem>
                    <MenuItem value="Pu'erh">Pu'erh</MenuItem>
                </Select>
                {/* </FormControl> */}

            </div>
        )
    }
}
