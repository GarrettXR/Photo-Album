import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './styles/App.css'

class Albums extends Component {
    state = {
        albums:[]
    }
componentDidMount() {
    axios.get('http://localhost:3001/albums/').then(resp => {
        this.setState({
            albums: resp.data
        })
    })
}

    render() {
      return (
          <div id="block1">
            <div id="title1">My Albums</div>
            <div id="container1">
            {this.state.albums.map(home => (
                <Link to={`/albums/${home.id}`}><div className="albumTitle"><img src={home.coverPhoto} className="albumCovers"/><h1 className="albumName">{home.albumName}</h1></div></Link>
            ))}
            </div>
          </div>
            
      );
    }
  }
  
  export default Albums
