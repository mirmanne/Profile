import React, { Component } from "react";
import resumepdf from '../resources/AnishManne_Resume_Aug2020.pdf'

export default class Projects extends Component {
  handleClick = () => {
   this.props.toggle();
  };

  render() {
    return (
     <div className="modal">
       <div className="modal_content">
       <span className="close" onClick={this.handleClick}>&times;    </span>
       <br/>
       <iframe src={resumepdf} width="100%" height="600px"/>
      </div>
     </div>
    );
   }
  }
