import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './moviepage.css'
import data from '../data/data.json'
import picture1 from '../data/Pictures/picture1.jpg'
import picture2 from '../data/Pictures/picture2.jpg'
import picture3 from '../data/Pictures/picture3.jpg'
import picture4 from '../data/Pictures/picture4.jpg'
import picture5 from '../data/Pictures/picture5.jpg'
import picture6 from '../data/Pictures/picture6.jpg'
import picture7 from '../data/Pictures/picture7.jpg'
import picture8 from '../data/Pictures/picture8.jpg'
import picture9 from '../data/Pictures/picture9.jpg'
import picture10 from '../data/Pictures/picture10.jpg'
const MoviePage = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const pageRef = useRef(null);
    let pictureArr = [picture1, picture2, picture3,
        picture4, picture5, picture6, picture7, picture8, picture9, picture10];
    let movie = data.find(movie => movie.movie_title === location.state);
    let random = Math.floor(Math.random() * 10);

    useEffect(() => {
        document.title = movie.movie_title;
        const x = pageRef.current;
        x.style.backgroundImage = `url(${pictureArr[random]})`;
        return () => {
            x();
        }
    });


    return (
        <div className='moviepage' ref={pageRef}>
            <div className='moviepage-card'>
                <h1>{location.state}</h1>
                <button className='moviepage-watch'
                    onClick={() => navigate(`/player/${movie.movie_title}`,
                        { state: movie.trailer })}>Watch</button>
            </div>

            {location.state}
        </div>
    )
}

export default MoviePage
