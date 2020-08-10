import React, {useState} from "react";
import Awards from "./Awards";
import Education from "./Education";
import Game from "./Game";
import Projects from "./Skills";
import Socials from "./Socials.jsx";
import awards from '../images/awards.jpg';
import credit from '../images/credit.jpg';
import education from '../images/education.jpg';
import game from '../images/game.jpg';
import hobbies from '../images/hobbies.jpg';
import instagram from '../images/instagram.jpeg';
import mail from '../images/mail.jpg';
import profile from '../images/profile.jpg';
import projects from '../images/projects.jpg';
import resume from '../images/resume.jpg';
import socials from '../images/socials.jpg';
import resumepdf from '../resources/AnishManne_Resume.pdf'




  // <figure class="effect-ruby">
  //   <img src="img/13.jpg" alt="img13"/>
  //   <figcaption>
  //     <h2>Glowing <span>Ruby</span></h2>
  //     <p>Ruby did not need any help. Everybody knew that.</p>
  //     <a href="#">View more</a>
  //   </figcaption>
  // </figure>
  // style={{backgroundImage: `url(${awards})`}}

  //   <div class="name">Awards</div>




function Table() {
  var [stateA, setStateA] = useState(false);
  var [stateE, setStateE] = useState(false);
  var [stateG, setStateG] = useState(false);
  var [stateP, setStateP] = useState(false);
  var [stateS, setStateS] = useState(false);

  function togglePopA() {
      setStateA(!stateA);
     };

  function togglePopE() {
      setStateE(!stateE);
     };

  function togglePopG() {
      setStateG(!stateG);
    };

  function togglePopP() {
      setStateP(!stateP);
    };

  function togglePopS() {
      setStateS(!stateS);
    };

  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="col grid" >
          <figure class="effect-ruby" onClick={togglePopA}>
            <img src={awards} alt="img13"/>
            <figcaption>
              <h2><span>Awards</span></h2>
              <p>List of awards</p>
            </figcaption>
          </figure>
        </div>
        {stateA ? <Awards toggle={togglePopA} /> : null}
        <div class="col grid">
          <figure class="effect-ruby">
            <img src={resume} alt="img13"/>
            <figcaption>
              <h2><span>Resume</span></h2>
              <p>Professional resume</p>
              <a href={resumepdf} target="_blank">View more</a>
            </figcaption>
          </figure>
        </div>
        <div class="col grid" >
          <figure class="effect-ruby" onClick={togglePopG}>
            <img src={game} alt="img13"/>
            <figcaption>
              <h2><span>Game</span></h2>
              <p>Flappy bird type game</p>
            </figcaption>
          </figure>
        </div>
      </div>
      {stateG ? <Game toggle={togglePopG} /> : null}
      <div class="row align-items-center">
        <div class="col grid" >
          <figure class="effect-ruby" onClick={togglePopP}>
            <img src={projects} alt="img13"/>
            <figcaption>
              <h2><span>Skills</span></h2>
              <p>List of skills</p>
            </figcaption>
          </figure>
        </div>
        {stateP ? <Projects toggle={togglePopP} /> : null}
        <div class="col grid" >
          <figure class="effect-ruby main">
            <img src={credit} alt="img13"/>
            <figcaption class="contain">
              <h2><span>Anish Manne</span></h2>
              <img className="profile-pic" src={profile} alt="Anish Manne pic"/>
            </figcaption>
          </figure>
        </div>
        <div class="col grid" >
          <figure class="effect-ruby">
            <img src={mail} alt="img13"/>
            <figcaption>
              <h2><span>Email</span></h2>
              <p className="email">mirmanne@gmail.com</p>
              <a className="email-link" href="mailto: mirmanne@gmail.com" target="_blank">Mail</a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col grid" >
          <figure class="effect-ruby" onClick={togglePopS}>
            <img src={socials} alt="img13"/>
            <figcaption>
              <h2><span>Socials</span></h2>
              <p>My socials</p>
            </figcaption>
          </figure>
        </div>
        {stateS ? <Socials toggle={togglePopS} /> : null}
        <div class="col grid" >
          <figure class="effect-ruby" onClick={togglePopE}>
            <img src={education} alt="img13"/>
            <figcaption>
              <h2><span>Education</span></h2>
              <p>Places of study</p>
            </figcaption>
          </figure>
        </div>
        {stateE ? <Education toggle={togglePopE} /> : null}
        <div class="col grid" >
          <figure class="effect-ruby">
            <img src={hobbies} alt="img13"/>
            <figcaption>
              <h2><span>Hobbies</span></h2>
              <p>Tennis - music - basketball - playing videogames - cooking</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Table;
