import React, { Component } from 'react'
import TeaImage from './teaImage'


export default class TeaList extends Component {
    render() {

        const teaLI = this.props.dataObjects.map( object =>(<TeaImage 
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
