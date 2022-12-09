import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';

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
      <NavBar/>
      
      <div>
        
        <button onClick={() => getAllSongs()}>Get All Songs</button>
      </div>
     
      </div>  
    );
}

export default App;
