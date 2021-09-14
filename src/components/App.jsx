import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            searchField: ''
         }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    handleDeleteClick = (songId) => {
        axios.delete(`http://127.0.0.1:8000/music/${songId}/`)
        .then(() => this.setState({status: 'Delete successful'}));
        
    }

   

    render() { 
        const {songs, searchField} = this.state
        const filteredSongs = songs.filter((value) => {
            return value.title.toLowerCase().includes(searchField) || value.artist.toLowerCase().includes(searchField) || value.album.toLowerCase().includes(searchField);
        })
        return ( 
            <React.Fragment>
                <SearchBar placeholder="Search here..." handleChange={(event) => this.setState({searchField: event.target.value})}/>
                <MusicTable music={filteredSongs} 
                 handleDeleteClick={this.handleDeleteClick}
                />
                <SongForm />
            </React.Fragment>
         );
    }
}

    
 
export default App;