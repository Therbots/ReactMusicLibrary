import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
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
        return ( 
            <React.Fragment>
                <MusicTable music={this.state.songs} 
                 handleDeleteClick={this.handleDeleteClick}
                />
            </React.Fragment>
         );
    }
}

    
 
export default App;