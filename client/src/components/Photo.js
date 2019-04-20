import React, { Component } from 'react';
import axios from "axios";
import './styles/App.css'

class Photo extends Component {
    state = {
        albums: [],
        image: {
            name:''
        }
    }

    componentDidMount() {
        const id =  this.props.match.params.id
        axios.get(`http://localhost:3001/images/${id}`).then(resp => {
            this.setState({
                image: resp.data
            })
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.history.goBack()
    }

    render(){
        console.log("string", this.props)
      return (
       <div id="block3">
            <div id="photoName">
                <button  onClick={this.handleClick}><p>Go Back</p></button>
                <img id="pb" src={this.state.image.photo} height="500"/>
                <h1 id="h1">{this.state.image.name}</h1>
            </div>
       </div>
      )
    }
}
  export default Photo