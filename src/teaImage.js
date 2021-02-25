import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class TeaImage extends Component {
    render() {
        return (
            <Link to={`teas/${this.props.id}`} className='imageLinks'>
                <li>
                <img className = 'images'src = {this.props.image} alt={this.props.alt} onError={(e)=>{e.target.src="gardenia.jpg"}} />
                <p>Name: {this.props.name}</p>
                <p>Category: {this.props.category}</p>
                <p>Price: {this.props.price}</p>
                <p>Aged: {this.props.aged ? 'Yes' : 'Not Aged'}</p>

                </li>
             </Link>
        )

    }
}
