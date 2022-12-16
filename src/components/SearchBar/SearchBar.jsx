import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        let response = props.songs.filter((song) => {
           if (
            song.title.toLowerCase().inlcudes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase()) ||
            song.album.toLowerCase().includes(search.toLowerCase()) ||
            song.release_date.toLowerCase().includes(search.toLowerCase()) ||
            song.genre.toLowerCase().includes(search.toLowerCase())
           ) {
            return true;
        } 
       
    });
props.setSongs(response);
}
return (
    <div>
        <div className='center'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search}onChange={(event) => setSearch(event.target.value)} />
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
