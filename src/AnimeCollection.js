// AnimeCollection.js
import React from 'react';
import './AnimeCollection.css'; // Ensure you have corresponding CSS for styling

const AnimeCollection = ({ animeList, deleteAnime }) => {
    return (
        <div className="collection-container">
            {animeList.map((anime, index) => (
                <div className="anime-item" key={index}>
                    <div className="anime-content">
                        <h5>{anime.title} 
                            <button className="delete-button" onClick={() => deleteAnime(anime.title)}>Delete</button> 
                        </h5>
                        <a href={anime.crunchy_roll_link}>
                            <img className="anime-image" src={anime.front_cover} alt={anime.title} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AnimeCollection;
