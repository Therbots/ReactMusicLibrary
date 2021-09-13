import React, { Component } from 'react';

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

    handleChange = (event) => {
        this.setState({
            addSong: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewSong(this.state.addSong);
    }

    }
    render() { 
        return ( 
            <form>

            </form>
         );
    }
}
 
export default SongForm;