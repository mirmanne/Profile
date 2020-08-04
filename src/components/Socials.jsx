import React, { Component } from "react";

export default class Socials extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p className="popupTitle">Socials</p>
     <div className="socials">
     <a href="https://www.linkedin.com/in/anishmanne" target="_blank" className="fa fa-linkedin"></a>
     <a href="mailto: mirmanne@gmail.com" class="fa fa-google"></a>
     <a href="https://www.instagram.com/anishmanne/" target="_blank" class="fa fa-instagram"></a>
     </div>
    </div>
   </div>
  );
 }
}
