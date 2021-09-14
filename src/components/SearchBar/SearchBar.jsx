import React from "react";
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <center>
            <input type="search" className="search" placeholder={props.placeholder} onChange={props.handleChange} />
        </center>
    )
}

export default SearchBar
