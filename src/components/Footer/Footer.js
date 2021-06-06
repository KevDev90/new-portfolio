import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <p>&#169; Kevin Johnson</p>
        <div>
        <a href="https://github.com/kevdev90" aria-label="GitHub link" target="_blank">
          <FontAwesomeIcon icon={faGithub} className='footer-icon'/>
          </a>
          <a href="https://www.linkedin.com/in/kevdev90/" aria-label="LinkedIn link" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className='footer-icon'/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer