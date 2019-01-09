import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './styles/App.css'

class Pictures extends Component {
    state = {
        pictures: [],
        albums: [],
        currentName:{}
    }

componentDidMount() {
    const id =  this.props.match.params.id
    axios.get(`http://localhost:3001/albums/${id}/?_embed=images`).then(resp => {
        this.setState({
            pictures: resp.data.images,
            currentName: resp.data
        })
    })
    axios.get('http://localhost:3001/albums/').then(allo => {
            this.setState({
                albums: allo.data
            })
        })
}

componentWillReceiveProps(newProps) {
    const id =  newProps.match.params.id
    axios.get(`http://localhost:3001/albums/${id}/?_embed=images`).then(resp => {
        this.setState({
            pictures: resp.data.images
        })
    })
}

    render() {
      return (
       <div id="block2">
            <div id="container3">
                <div id="albumName1"><p>{this.state.currentName.albumName}</p>
                </div>
                <div id="container2">
                    <div id="sidebar">
                        {this.state.albums.map(home => (
                            <p className="tabs">
                                <Link to={`/albums/${home.id}`}>{home.albumName}</Link>
                            </p>
                        ))}
                    </div>
                    <div id="visuals">
                    {this.state.pictures.map(album => (
                       <Link to={`/photos/${album.id}`}><div id="imgContainer">
                            <img src={album.photo} className="imagePage"/>
                            <p className="imageName">{album.name}</p>
                        </div></Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>   
      );
    }
  }
  
  export default Pictures
