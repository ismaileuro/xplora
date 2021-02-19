import React from 'react'
import ReactPlayer from 'react-player'
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <ReactPlayer width="100%" height="30rem" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    )
}

export default Hero
