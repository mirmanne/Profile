import React, { Component } from "react";
import northview from '../images/northview.jpg';
import gatech from '../images/gatech.jpg';
import gatech1 from '../images/gatech1.jpg';

export default class Education extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p className="popupTitle">Education</p>
     <table style={{"width":"100%"}}>
       <tr>
         <th>Georgia Tech</th>
         <td rowSpan={4}><img src={gatech1} alt="gatech" style={{"width":"80%", "height":"auto" }}/></td>
       </tr>
       <tr>
         <td>2020-Present</td>
       </tr>
       <tr>
         <td>B.S. Computer Science</td>
       </tr>
       <tr>
         <td>Threads: Intelligence & Information Internetworks</td>
       </tr>
       <tr>
         <td><br/></td>
       </tr>
       <tr>
         <td><br/></td>
       </tr>
       <tr>
         <td><br/></td>
       </tr>
        <tr>
          <th style={{"width":"40%"}}>Northview High School</th>
          <td rowSpan={3}><img src={northview} alt="northview" style={{"width":"80%", "height":"auto"}}/></td>
        </tr>
        <tr>
          <td>2016-2020</td>
        </tr>
        <tr>
          <td>High School Diploma</td>
        </tr>
      </table>
    </div>
   </div>
  );
 }
}
