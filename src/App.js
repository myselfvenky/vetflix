import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import About from './Pages/About';
import SplashScreen from './SplashScreen';
import MoviePage from './Pages/MoviePage';

import './App.css';
import Player from './Pages/Player';
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isloggedIn: true,
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 0);
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.isLoading ? <SplashScreen /> :
            <>
              <div className='navbar'>

                <img src="vetflix.png" className='logo' alt='logo' />

                <div className='navbar-right'>
                  <input className='search' />
                  <Link to="movies" style={{ "textDecoration": "none", "margin": "10px" }}>Movies</Link>
                  <Link to="about" style={{ "textDecoration": "none", "margin": "10px" }}>About</Link>
                </div>


              </div>
              <div className='app-route-container'>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="movies" element={<Movies />} />
                  <Route path="movies/:movie_title" element={<MoviePage />} />
                  <Route path="player/:movie_title" element={<Player />} />
                </Routes>
              </div>
            </>
          }
        </div>
      </BrowserRouter>
    )
  }
}

