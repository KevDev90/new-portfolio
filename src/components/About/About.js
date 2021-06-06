import React from 'react'
import './About.css'

class About extends React.Component {
  render() {
    return (
      <section className='about' id='about'>
        <div className='about-container'>
          <h3>About Me</h3>
          <p>I was first introduced to code when I was 14 years old during my Myspace days with Tom. Little did I know that using that platform would strike a curiosity in me to pursue coding later on in my life.</p>
          <p>I have an athletic background having played some baseball in college, and I like to bring that same intensity to the code editor! After my athletic career, I worked various odd jobs in Colorado. I then met and married my wife Zhibek who motivated me to start thinking more long term about my career.</p>
          <p>I thought back on how much I enjoyed messing around with HTML, and decided to give it a go! Flash forward to 2020-2021, I started and completed Thinkful's software engineering program! This Bootcamp gave me the mentorship and direction I needed to stay on track while challenging myself in ways I didn't think were previously possible!</p>
          <p>Some of my other hobbies include hiking, reading, snowboarding, going to concerts, and playing board games with my wife. While I have thoroughly enjoyed building out multiple projects on my own, I can't wait to work on a team with other awesomely talented programmers!</p>
        </div>
      </section>
    )
  }
}

export default About