import React from 'react'
import Logo0 from '../../assets/0.jpg'
import Logo1 from '../../assets/1.jpg'
import Logo2 from '../../assets/2.jpg'
import Logo3 from '../../assets/3.jpg'
import Logo4 from '../../assets/4.jpg'

function Websites() {

    return(
        <div class="row">

<div class="column">
                <img src={Logo1} alt="webpage screenshot"></img>  
            </div>
            <div className="column">
            <p>ScatterBrain</p>
                <p>This was built to help me save and organize the many webpages I want to refer back to, giving me a way to organize them
                    beyond a simple list.
                </p>
                <ul><p>This project used:</p>
                    <li>Node.js</li>
                    <li>Sequelize</li>
                    <li>SCSS</li>
                    <li>MySQL</li>
                    <li>Handlebars</li>
                    <li>Git and Github version control</li>
                    <li>Heroku</li>
                </ul>
            <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://stormy-scrubland-17368.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
                <hr></hr>
            </div>

<div class="column">
                <img src={Logo4} alt="webpage screenshot"></img>
            </div>
            <div className="column">
            <p>Stack Study</p>
                <p>I built this application after losing hundreds of notecards. The goal being to keep my study material secure but not to lose the
                    style of study via flashcards.
                </p>
                <ul><p>This project used:</p>
                    <li>JSX</li>
                    <li>CSS</li>
                    <li>React and React-animations</li>
                    <li>Apollo</li>
                    <li>MongoDB</li>
                    <li>Graphql</li>
                    <li>jwt-decode</li>
                    <li>Stripe</li>
                    <li>Git and Github version control</li>
                </ul>
            <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://stackstudy.herokuapp.com/#Your%20Cards/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
                <hr></hr>
            </div>

            <div class="column">
                <img src={Logo0} alt="webpage screenshot"></img>
            </div>
            <div class="column">
                <hr></hr>
                <p>Run Buddy</p>
                <p>I built Run Buddy as a sandbox for testing flexbox and general CSS layouts.
                   Fully front-end, this project was instrumental in understanding the tools available for design.</p>
                <ul><p>This project used:</p>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Git and Github version control</li>
                </ul>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
                <hr></hr>
            </div>

           

            <div class="column">
                <img src={Logo2} alt="webpage screenshot"></img>
            </div>
            <div className="column">
            <p>Weather Tracker</p>
                <p>I built this weather app to dip my toes into third party APIs, using OpenWeather I created a simplistic design to display
                    weather from a user inputed city.
                </p>
                <ul><p>This project used:</p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>3rd party API fetching</li>
                    <li>Git and Github version control</li>
                </ul>
            <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/weather-project/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
                <hr></hr>
            </div>

            <div class="column">
                <img src={Logo3} alt="webpage screenshot"></img>
            </div>
            <div className="column">
            <p>Flix Facts</p>
                <p>Feverishly looking for entertainment while in quarantine I built Flix Facts to deliver reviews, articles 
                    and link to previews hosted on YouTube from a single search. 
                </p>
                <ul><p>This project used:</p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>OMDB, Itunes, and the Guardian APIs</li>
                    <li>Git and Github version control</li>
                </ul>
            <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/movie-ranker/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
                <hr></hr>
                </div>

           
            
            <div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Websites;