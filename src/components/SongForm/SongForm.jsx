import React, { Component } from 'react';
// import axios from 'axios';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addSong: {
             
            }
         }
    }

    handleChange = (event) => {
        this.setState({
            addSong: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewSong(this.state.addSong)
    }

    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Song</h2>
                <label>Title: </label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.addSong.title} />
                <label>Artist: </label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.addSong.artist} />
                <label>Album: </label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.addSong.album} />
                <label>Release Date: </label>
                <input type="datetime-local" name="release_date" onChange={this.handleChange} value={this.state.addSong.release_date} />
                <button type="submit">Add Song</button>
            </form>
         );
    }
}
 
export default SongForm;