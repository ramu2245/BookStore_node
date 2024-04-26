import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = ({setRole}) => {
 
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Novel Nexus</h1>
            <p className='hero-description'>
            From gripping thrillers to heartwarming tales, explore a world of endless possibilities and find exactly what you're searching for.
            Your gateway to endless stories awaits. Explore, discover, and immerse yourself in the world of books.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home