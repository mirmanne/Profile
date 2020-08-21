import React, { Component } from "react";
import back from '../images/city.jpg';
import pipeN from '../images/buildingN.png';
import pipeS from '../images/buildingS.png';
import character from '../images/jacket1.png';
import ground from '../images/ground.jpg';
import start from '../images/start.png';
import over from '../images/over.png';


export default class Game extends Component {
  handleClick = () => {
   this.props.toggle();
  };

componentDidMount() {
  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");

  const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2
  }


  // var jacket = new Image();
  // var bg = new Image();
  // var pipeNorth = new Image();
  // var pipeSouth = new Image();
  //
  // jacket.src = character;
  // bg.src = back;
  // pipeNorth.src = pipeN;
  // pipeSouth.src = pipeS;

  var sources = {
    jacket: character,
    bg: back,
    pipeNorth: pipeN,
    pipeSouth: pipeS,
    floor: ground,
    start: start,
    over: over
  }

  function loadImages(sources, callback) {
    var images = {}
    var loadedImages = 0;
    var numImages = 0;

    for (var src in sources) {
      numImages++;
    }
    for (var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages){
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }

  var jX = 40;
  var jY = 100;
  var gravity  = 0;
  var speed = 0;
  var buildSpeed = 0;
  var jump = 4.6;
  var score = 0;
  var finalScore = 0;

  document.addEventListener("keydown", action);

  function action() {
    switch(state.current){
      case state.getReady:
        state.current = state.game;
        gravity = 0.25;
        buildSpeed = 2;
        moveUp();
        break;
      case state.game:
        moveUp();
        break;
      case state.over:
        state.current = state.getReady;
        break;
    }
  }

  function moveUp() {
    speed = -jump;
  }

  var xconstant = -90;
  var yconstant = 400;

  var pipe = [];

  pipe[0] = {
    x: cvs.width,
    y: -400
  }

  function draw() {
  loadImages(sources, function(images){
    ctx.drawImage(images.bg, 0, 0);
    for (var i=0; i<pipe.length; i++) {
      ctx.drawImage(images.pipeNorth, pipe[i].x, pipe[i].y, 70, 300);
      ctx.drawImage(images.pipeNorth, pipe[i].x, pipe[i].y+yconstant, 70, 300);

      pipe[i].x -= buildSpeed;


      if (pipe[i].x === 124){
        pipe.push({
          x: cvs.width,
          y: -(Math.floor(Math.random() * 260))
        })
      }

      if (pipe[i].x === -150){
        pipe.shift();
      }




      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#000";

      if (state.current === state.game) {

        if (pipe[i].x === 60) {
          score ++;
        }

        ctx.lineWidth = 2;
        ctx.font = "50px Arial";
        ctx.fillText(score, cvs.width/2, 50);
        ctx.strokeText(score, cvs.width/2, 50);


        if (jY >= 375 || ((jX + 38 >= pipe[i].x) && (jX <= pipe[i].x + 70) && (jY <= 300+pipe[i].y || jY >= pipe[i].y + 380))) {
          state.current = state.over;
        }
      }
    }

    ctx.drawImage(images.jacket, jX, jY, 40, 31);

    ctx.drawImage(images.floor, 0, 412, 320, 100);

    speed += gravity;
    jY += speed;


    if (state.current === state.getReady) {
      jX = 40;
      jY = 250;
      ctx.drawImage(images.start, 30, -100, 260, 500);
      gravity  = 0;
      speed = 0;
      buildSpeed = 0;
      score = 0;
      pipe = [];

      pipe[0] = {
        x: cvs.width,
        y: -100
      }
    }









    if (state.current === state.over) {
      jY = 383;
      buildSpeed = 0;
      gravity  = 0;
      speed = 0;
      ctx.lineWidth = 2;
      ctx.font = "50px Arial";
      ctx.fillText(score, cvs.width/2, 50);
      ctx.strokeText(score, cvs.width/2, 50);
      ctx.drawImage(images.over, 0, -100, 320, 500);
    }



    requestAnimationFrame(draw);
  })
}
  draw();
}




render() {
  return (
    <div className="modal">
      <div className="modal_content game">
        <span className="close gameClose" onClick={this.handleClick}>&times;    </span>
        <canvas ref="canvas" id="canvas" width="320" height="480"/>
      </div>
    </div>
  );
 }
}
