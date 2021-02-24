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
          const data = await request.get (`https://still-plains-76172.herokuapp.com/teas/${this.props.match.params.teaID}`);
          console.log(this.props)
          await this.setState ({
              objects: data.body,
              loading: false
            })
        }
        render() {
        console.log(this.state);
        return (
            <div className='details-page'>
            {
            this.state.loading 
                ? <Spinner />
                : <div className='ul-detail'>
                <img src={`../${this.state.objects.image}`} alt='tea' />
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
