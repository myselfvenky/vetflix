import React from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import './player.css'
const Player = () => {
    let location = useLocation();
    return (
        <div className='player'>
            <ReactPlayer
                url={location.state}
                playing={true}
                volume={1}
                width="100%"
                height="100%"

            />
        </div>
    )
}

export default Player
