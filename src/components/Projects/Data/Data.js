import hhLanding from '../Screenshots/darksky.png'
import hhPosts from '../Screenshots/darksky.png'
import llLanding from '../Screenshots/foodfinder.png'
import llTimeline from '../Screenshots/foodfinder.png'
import swCurrent from '../Screenshots/powder.png'
import swForecast from '../Screenshots/powder.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 1,
    title: <a href="https://github.com/KevDev90/Food-Finder-Client" target='_black' className='title-link'>Fantastic Food Finder</a>,
    github: <a href="https://github.com/KevDev90/Food-Finder-Client" target='_black'>Github App Repo</a>,
    githubAPI: <a href="https://github.com/KevDev90/Food-Finder-Server" target='_black'>Github Server Repo</a>,
    liveLink: <a href="https://food-finder-client-kevdev90.vercel.app/" target='_black' className='ext-link'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={llLanding} alt='' className='proj-image grow'/>,
    img2: <img src={llTimeline} alt='' className='proj-image grow'/>,
    description: 'Your one stop application for rating and leaving reviews about Restaurants you have visited!',
    bullets: <ul>
              <li>Implemented a responsive client using JavaScript and React that passes data to components with context and state.</li>
              <li>Built RESTful API endpoints using Node.js and Express to perform GET, POST, PATCH and DELETE crud operations.</li>
              <li>Utilizes React Hooks on the frontend and Sequelize on the backend</li>
            </ul>,
    tech: 'HTML5 | CSS | JavaScript | React Hooks | Node.js | Express | PostgreSQL | Sequelize | RESTful APIs'
  },
  {
    id: 2,
    title: <a href="https://github.com/KevDev90/DarkSkyFinder-Client/" target='_black' className='title-link'>DarkSky</a>,
    github: <a href="https://github.com/KevDev90/DarkSkyFinder-Client/" target='_black'>Github App Repo</a>,
    githubAPI: <a href="https://github.com/KevDev90/DarkSkyFinder-API/" target='_black'>Github Server Repo</a>,
    liveLink: <a href="https://dark-sky-finder-client.vercel.app/" target='_black'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={hhLanding} alt='' className='proj-image grow'/>,
    img2: <img src={hhPosts} alt='' className='proj-image grow' />,
    description: 'In the DarkSky application, a user can login to their profile and create folders and experience cards to help collect their thoughts and experiences while stargazing.',
    bullets: <ul>
              <li>Built a full stack project using JavaScript and React.js, passing data with context and state.</li>
              <li>Designed RESTful API using Node.js and Express which performs crud operations GET, POST, PATCH and DELETE.</li>
            </ul>,
    tech: 'HTML5 | CSS | JavaScript | React | Node.js | Express | PostgreSQL | Knex.js | RESTful APIs'
  },
  {
    id: 3,
    title: <a href="https://github.com/KevDev90/powder-chowder/" target='_black' className='title-link'>Powder and  Chowder</a>,
    github: <a href="https://github.com/KevDev90/powder-chowder/" target='_black'>Github App Repo</a>,
    githubAPI: 'N/A',
    liveLink: <a href="https://kevdev90.github.io/powder-chowder/" target='_black'>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>,
    img1: <img src={swCurrent} alt='' className='proj-image grow'/>,
    img2: <img src={swForecast} alt='' className='proj-image grow'/>,
    description: 'This project is an app that allows users to select a particular colorado ski resort on a map and then see the associated weather and restauraunts for that resorts area!',
    bullets: <ul>
              <li>Utilizes the Weatherbit and Yelp API's to interact with a leaflet map to perform fetch requests.</li>
             </ul>,
    tech: 'HTML5 | CSS | JavaScript | jQuery | RESTful APIs | Leaflet'
  }
]

export default data