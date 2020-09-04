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
                <img src={Logo0} alt="webpage screenshot"></img>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
            </div>

            <div class="column">
                <img src={Logo1} alt="webpage screenshot"></img>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://stormy-scrubland-17368.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
            </div>

            <div class="column">
                <img src={Logo2} alt="webpage screenshot"></img>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/weather-project/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
            </div>

            <div class="column">
                <img src={Logo3} alt="webpage screenshot"></img>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://jcsryan.github.io/movie-ranker/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
            </div>

            <div class="column">
                <img src={Logo4} alt="webpage screenshot"></img>
                <div class="center-btn">
                <a  class="bt more-bt" id="link" href="https://stackstudy.herokuapp.com/#Your%20Cards/" target="_blank" rel="noopener noreferrer">
                <span class="fl"></span><span class="sfl"></span><span class="cross"></span><i></i>
                <p>Visit</p>
                </a>
                </div>
            </div>
            <div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Websites;