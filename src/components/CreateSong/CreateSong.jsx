import React, { useState } from 'react';



const CreateSong = (props) => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [release_date, setRelease_Date] = useState("");
    const [genre, setGenre] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong);
        props.addNewSong(newSong)
}

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Title</label>
                <input> type='text' className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}</input>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input> type='text' className="form-control" value={artist} onChange={(event) => setArtist(event.target.value)}</input>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input> type='text' className="form-control" value={album} onChange={(event) => setAlbum(event.target.value)}</input>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input> type='text' className="form-control" value={release_date} onChange={(event) => setRelease_Date(event.target.value)}</input>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input> type='text' className="form-control" value={genre} onChange={(event) => setGenre(event.target.value)}</input>
            </div>
            <button type='submit' className="add-song-button">Add Song</button>
        </form>

    );


}

export default CreateSong;