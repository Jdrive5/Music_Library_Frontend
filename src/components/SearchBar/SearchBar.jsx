import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();

        let response = props.songs.filter((song) => {
           if (
            song.title.inlcudes(search) ||
            song.artist.includes(search) ||
            song.album.includes(search) ||
            song.release_date.includes(search) ||
            song.genre.includes(search)
           ) {
            return true;
        } 
        else {
            return false;
        }
    });
props.setSongs(response);
}
