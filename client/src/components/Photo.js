import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './styles/App.css'

class Photo extends Component {
    state = {
        image: {}
    }

componentDidMount() {
    const id =  this.props.match.params.id
    axios.get(`http://localhost:3001/images/`).then(resp => {
        this.setState({
            image: resp.data
        })
    })
}

    render(){
      return (
       <div id="block3">
            <div id="photoName">
                <h1>{this.state.imageName}</h1>
            </div>
       </div>
      )
    }
}
  export default Photo