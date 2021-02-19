import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class PokeImage extends Component {
    render() {
        return (
            <Link to={`tea/${this.props.id}`} className='imageLinks'>
                <li>
                <img className = 'images'src = {this.props.image} alt={this.props.alt}/>
                <p>Name: {this.props.name}</p>
                <p>Category: {this.props.category}</p>
                <p>Price: {this.props.price}</p>

                </li>
             </Link>
        )

    }
}
