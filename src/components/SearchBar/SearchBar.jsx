import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log(props.songs)
        console.log(search)
        let response = props.songs.filter((song) => {
           if (song.title.search(search) ||
            song.artist.search(search) ||
            song.album.search(search) ||
            song.release_date.search(search) ||
            song.genre.search(search)) {
            return true;
        } 
        else {
            return false;
        }
    });
    props.setSongs(response);
};

return (
    <div>
        <div className='center'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
                <button className='searchbutton' type="submit">Search</button>
            </form>
            <form onSubmit={props.getAllSongs}>
                <button type='submit' className='searchbutton'>All Songs</button>
            </form>
        </div>
    </div>
);
};

export default SearchBar;
