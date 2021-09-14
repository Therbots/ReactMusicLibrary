import React, { Component } from 'react';
import axios from 'axios';

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
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Song</h2>
                <label>Title: </label>
                <input type="text" name="title" onChange={this.handleChange} />
                <label>Artist: </label>
                <input type="text" name="artist" onChange={this.handleChange} />
                <label>Album: </label>
                <input type="text" name="album" onChange={this.handleChange} />
                <label>Release Date: </label>
                <input type="datetime-local" name="release_date" onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Song</button>
            </form>
         );
    }
}
 
export default SongForm;