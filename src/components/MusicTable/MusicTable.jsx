import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
    return (
        <center>
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {props.music.map((item => 
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.artist}</td>
                            <td>{item.album}</td>
                            <td>{item.release_date}</td>
                            <button type="button" className="btn btn-primary" onClick={() => props.handleDeleteClick(item.id)}>Delete</button>
                        </tr>
                    ))}
            </tbody>
        </table>
        </center>
    );
}

export default MusicTable