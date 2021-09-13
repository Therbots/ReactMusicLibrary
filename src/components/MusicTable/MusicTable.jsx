import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
            </tr>
            {props.music.map((item => 
                <tr>
                    <td key={item.id}>{item.title}</td>
                    <td>{item.artist}</td>
                    <td>{item.album}</td>
                    <td>{item.release_date}</td>
                    <button type="button" onClick={() => props.handleDeleteClick(item.id)}>Delete</button>
                </tr>
                ))}
        </table>
    );
}

export default MusicTable