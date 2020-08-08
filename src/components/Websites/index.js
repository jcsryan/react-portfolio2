import React from 'react'
import Logo0 from '../../assets/0.jpg'
import Logo1 from '../../assets/1.jpg'
import Logo2 from '../../assets/2.jpg'
import Logo3 from '../../assets/3.jpg'


function Websites() {

    return(
        <div class="row">
            <div class="column">
                <img src={Logo0} alt="webpage screenshot"></img>
                <a id="link" href="https://jcsryan.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">Visit</a>

            </div>

            <div class="column">
                <img src={Logo1} alt="webpage screenshot"></img>
                <a id="link" href="https://stormy-scrubland-17368.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit</a>

            </div>

            <div class="column">
                <img src={Logo2} alt="webpage screenshot"></img>
                <a id="link" href="https://jcsryan.github.io/weather-project/" target="_blank" rel="noopener noreferrer">Visit</a>

            </div>

            <div class="column">
                <img src={Logo3} alt="webpage screenshot"></img>
                <a id="link" href="https://jcsryan.github.io/movie-ranker/" target="_blank" rel="noopener noreferrer">Visit</a>

            </div>
            <div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Websites;