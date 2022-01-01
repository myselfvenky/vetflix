import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='home'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h1 className='cname' onClick={() => navigate('/movies')}>Vetflix</h1>
        </div>
    )
}

export default Home
