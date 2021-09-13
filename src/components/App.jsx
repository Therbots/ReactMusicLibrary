import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

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

    render() { 
        return ( 
            <React.Fragment>
                <MusicTable music={this.state.songs} />
            </React.Fragment>
         );
    }
}

    
 
export default App;