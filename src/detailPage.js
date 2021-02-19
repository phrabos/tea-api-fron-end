import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './spinner.js';

export default class DetailPage extends Component {

    state={
        objects: [],
    }
    componentDidMount = async () => {
         
            await this.setState({
            loading: true,
          })
          const data = await request.get (`https://tea-api-lab-06.herokuapp.com/tea/${this.props.match.params.teaName}`);
          await this.setState ({
              objects: data.body.selectedTea,
              loading: false
            })
            console.log(this.state);
    }
    render() {
        return (
            <div className='details-page'>
            {
            this.state.loading 
                ? <Spinner />
                : <div className='ul-detail'>
                <img src={`../${this.state.objects.image}`} alt='tea' />
                {console.log(this.state.objects)}
                <p>Name: {this.state.objects.name}</p>
                <p>Description: {this.state.objects.description}</p>
                <p>Category: {this.state.objects.category}</p>
                <p>Price: {this.state.objects.price}</p>
                <p>Aged: {`${this.state.objects.aged}`}</p>

                </div>
            }
            </div>
        )
    }
}
