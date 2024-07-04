// AnimeSlider.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimeSlider = ({ animeList, deleteAnime }) => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'black', borderRadius: '50%', right: '10px' }}
                onClick={onClick}
            />
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'black', borderRadius: '50%', left: '10px', zIndex: 1 }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,   // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,    // Enable swipe
        touchMove: true, // Enable touch move
        draggable: true, // Enable mouse dragging
        nextArrow: <NextArrow />,  // Use custom next arrow
        prevArrow: <PrevArrow />   // Use custom previous arrow
    };

    return (
        <div className='slide-container'>
            <Slider {...settings}>
                {animeList.map((anime, pos) => (
                    <div className="image-wrapper" key={pos}>
                        <div className="anime-content">
                            <h5>{anime.title} <button className="delete-button" onClick={() => deleteAnime(anime.title)}>Delete</button> </h5>
                            <a href={anime.crunchy_roll_link}>
                                <img className="slider-image" src={anime.front_cover} alt='' />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default AnimeSlider;