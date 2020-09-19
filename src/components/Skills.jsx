import React, { Component } from "react";

export default class Projects extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p className="popupTitle">Skills</p>

    <div className="skills">
      <li>
        <h4>Python</h4><span className="bar"><span className="python"></span></span>
      </li>

     <li>
       <h4>Java</h4><span className="bar"><span className="java"></span></span>
     </li>

     <li>
       <h4>React</h4><span className="bar"><span className="react"></span></span>
     </li>

     <li>
       <h4>Node</h4><span className="bar"><span className="node"></span></span>
     </li>

     <li>
       <h4>HTML5</h4><span className="bar"><span className="html"></span></span>
     </li>

     <li>
       <h4>Javascript</h4><span className="bar"><span className="javascript"></span></span>
     </li>

     <li>
       <h4>MongoDB</h4><span className="bar"><span className="mongoDB"></span></span>
     </li>

     <p className="subText">Relative Scale</p>


     </div>
    </div>
   </div>
  );
 }
}
