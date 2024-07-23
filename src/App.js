import './App.css';
import AnimeCollection from './AnimeCollection';
import React, {useEffect, useState} from 'react';



function App() {
    const [title, setTitle] = useState('');
    const [crunchy_roll_link, setLink] = useState('');
    const [front_cover, setCover] = useState('');
    const [animeList, setAnimeList] = useState([]);
    const anime = {title, crunchy_roll_link, front_cover};

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnimeList((animeList) => {
            return [...animeList, anime];
        })
        
        const apiRequest = async () => {
            const response = await fetch (`https://e1lk9thddg.execute-api.us-east-1.amazonaws.com/test/get?title=${title}&link=${crunchy_roll_link}&cover=${front_cover}`, 
            {
                method: "Post"
            });
            console.log(response);
            return response.json()
        }
        apiRequest();
        window.location.reload();
    }

    function deleteAnime(title) {
        const apiRequest = async () => {
            try {
                const response = await fetch(`https://e1lk9thddg.execute-api.us-east-1.amazonaws.com/test/get?title=${title}`, {
                    method: "DELETE",
                    mode: "cors"
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                } else {
                    console.error(`Error deleting anime: ${response.status} ${response.statusText}`);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
            window.location.reload();
        };
    
        apiRequest();
    }
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://e1lk9thddg.execute-api.us-east-1.amazonaws.com/test/get', 
            {
              method: 'GET',
              mode: 'cors',
            });
            const data = await response.json();
            setAnimeList(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
    <div className='App'>
        <div className='the-form'>
            <h1>Add Your Anime Here</h1>
            <form onSubmit={handleSubmit}>
                <label>title:</label>
                <input 
                type='text'
                required
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>link:</label>
                <input 
                type='text'
                required
                value={crunchy_roll_link}
                onChange={(e)=> setLink(e.target.value)}
                />
                <label>cover:</label>
                <input 
                type='text'
                required
                value={front_cover}
                onChange={(e)=> setCover(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
        <div className='slide-container'>
        <AnimeCollection animeList={animeList} deleteAnime={deleteAnime} />
        </div>
    </div>
  );
}

export default App;