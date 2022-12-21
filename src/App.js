import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);
 
 useEffect(() => {
    getAllSongs();
  }, []);


  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data)
  }


  async function createSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    console.log(response.data);
    getAllSongs()
  }
  
  return (
    
    <div className='container-fluid'>
      <div>
        <header>
          <NavBar/>
        </header>
        <div className='border-box'>
          <SearchBar songs={songs} setSongs={setSongs}/>
        </div>
        <div className='song-box'>
          <DisplayMusic parentEntries = {songs} />
        </div>
        <br/>
        <br/>
        <div className='border-box'>
          <CreateSong addNewSong={createSong} />
        </div>
      
      
      </div>
    </div>
     
    );
}

export default App;
