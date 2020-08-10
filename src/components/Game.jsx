import React, { Component } from "react";
import back from '../images/city.jpg';
import pipeN from '../images/buildingN.png';
import pipeS from '../images/buildingS.png';
import character from '../images/jacket.png';


export default class Game extends Component {
  handleClick = () => {
   this.props.toggle();
  };

componentDidMount() {
  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");

  var jacket = new Image();
  var bg = new Image();
  var pipeNorth = new Image();
  var pipeSouth = new Image();

  jacket.src = character;
  bg.src = back;
  pipeNorth.src = pipeN;
  pipeSouth.src = pipeS;


  function draw() {
    ctx.drawImage(bg,0,0);
    // ctx.drawImage(pipeNorth, 100, 0);
  }



  // bg.onload = function() {
  //     draw();
  //   };

  jacket.onload = function() {
      ctx.drawImage(jacket,0,0, 30, 30);;
    };

}


render() {
  return (
   <canvas ref="canvas" id="canvas" width="288" height="512"/>
  );
 }
}
