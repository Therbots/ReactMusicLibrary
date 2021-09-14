import React, { Component } from 'react';
import axios from 'axios';
import './SongForm.css'

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addSong: {
             title: '',
             artist: '',
             album: '',
             release_date: ''
            }
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/music/',this.state)
    }

    
    render() { 
        return ( 
            <center>
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Song</h2>
                <label className="font">Title: </label>
                <input className="color" type="text" name="title" onChange={this.handleChange} />
                <label className="font">Artist: </label>
                <input className="color" type="text" name="artist" onChange={this.handleChange} />
                <label className="font">Album: </label>
                <input className="color" type="text" name="album" onChange={this.handleChange} />
                <label className="font">Release Date: </label>
                <input className="color" type="datetime-local" name="release_date" onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Song</button>
            </form>
            </center>
         );
    }
}
 
export default SongForm;