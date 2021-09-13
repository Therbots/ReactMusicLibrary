import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
    }

    render() { 
        return ( 
            <h1>hello world!</h1>
         );
    }
}

    
 
export default App;