import React, { Component } from 'react'
import PokeImage from './pokeImage'


export default class PokeList extends Component {
    render() {

        const teaLI = this.props.dataObjects.map( object =>(<PokeImage 
            key={object.id}
            id={object.id} 
            image={object.image} 
            alt={object.name}
            name={object.name}
            category={object.category}
            price={object.price}
            aged={object.aged}
        />));
        return (
            
            <ul>
                {teaLI}
            </ul>
        )
    }
}
