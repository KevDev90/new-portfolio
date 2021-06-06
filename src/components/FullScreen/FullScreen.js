import React from 'react'
import './FullScreen.css'

class FullScreen extends React.Component {
  render() {
    return (
      <header className='fullscreen' id='fullscreen'>
        <div className='fullscreen-header'>
          <p className='header-p'>Hello there! My name is</p>
          <h1>Kevin Johnson</h1>
          <h2>I am a Full Stack Web Developer</h2>
          <p className='header-p'>Currently open to opportunities throughout the Colorado Front Range Area.</p>
          <a href='https://docs.google.com/document/d/1TMKIO2zaxQAeznWSsP5-iABoUfYd0wkuzU4MnELShms/edit' target='_blank' rel='noreferrer' className='resume'>Resume</a>
        </div>
      </header>
    )
  }
}

export default FullScreen