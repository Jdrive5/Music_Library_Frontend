import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let response = props.songs.filter((song) => {
           if (song.title.inlcudes(search) ||
            song.artist.includes(search) ||
            song.album.includes(search) ||
            song.release_date.includes(search) ||
            song.genre.includes(search)) {
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
