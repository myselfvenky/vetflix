import React, { useRef } from 'react'
import './movies.css'
import data from '../data/data.json'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
const Movies = () => {
    const slider1 = useRef();
    const slider2 = useRef();
    var wi = window.innerWidth;
    let navigate = useNavigate();
    const firstSliderLeft = () => {
        slider1.current.scrollLeft -= (wi - 250);
    }
    const firstSliderRight = () => {
        slider1.current.scrollLeft += (wi - 250);
    }
    const secondSliderLeft = () => {
        slider2.current.scrollLeft -= (wi - 250);

    }
    const secondSliderRight = () => {
        slider2.current.scrollLeft += (wi - 250);
    }
    return (
        <div className='movies'>
            <div className='banner'>
                <img src="superman.jpg" className="highlight-image" alt="fake banner" />
                <div className="filter-black">

                </div>
                <button className="watch">
                    Watch Now
                </button>
            </div>
            <div className="cards-container-parent">
                <div className="side-bars left">
                    <FiChevronLeft size={30} onClick={firstSliderLeft} />
                </div>

                <div className='cards-container' ref={slider1}>
                    {data.map((movie, index) => {
                        return (
                            <div className='card' key={index}
                                onClick={() => navigate((`${movie.movie_title}`), { state: movie.movie_title })}>
                                <div className='card-info'>
                                    <h2>{movie.movie_title}</h2>
                                    <h2>{movie.language}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="side-bars right">
                    <FiChevronRight size={30} onClick={firstSliderRight} />
                </div>
            </div>

            <div className='cards-container-parent'>
                <div className="side-bars left">
                    <FiChevronLeft size={30} onClick={secondSliderLeft} />
                </div>


                <div className='cards-container' ref={slider2}>
                    {data.map((movie, index) => {
                        return (
                            <div className='card' key={index}
                                onClick={() => navigate((`${movie.movie_title}`), { state: movie.movie_title })}>

                                <div className='card-info'>
                                    <h2>{movie.movie_title}</h2>
                                    <h2>{movie.language}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="side-bars right">
                    <FiChevronRight size={30} onClick={secondSliderRight} />
                </div>
            </div>
            <div className='footer'>

                <h1 >Vetflix</h1>
                <h2 >Developed By Venky from Mumbai,India!!!</h2>


            </div>
        </div >
    )
}

export default Movies
