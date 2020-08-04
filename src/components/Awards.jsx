import React, { Component } from "react";

export default class Awards extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content awardContent">
       <div className="award_heading">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p className="popupTitle">Awards</p>
     </div>
     <ul className="awards">
       <li className="award">
         <h4 className="awardTitle">Finalist - National Merit Scholarship</h4>
         <h5>National Merit Scholarship Corporation</h5>
         <h6 className="awardDate">Feb 2020</h6>
         <h6>Selected as National Merit Scholarship Finalist. Awaiting for final merit scholarship awards distribution.</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">Eagle Scout</h4>
         <h5>Boy Scouts of America | Scouts BSA</h5>
         <h6 className="awardDate">Sep 2019</h6>
         <h6>Achieved the highest rank of Eagle Scout after more than 10 years of active participation in Scouting.</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">State of Georgia Governor's Recognition</h4>
         <h5>State of Georgia</h5>
         <h6 className="awardDate">Aug 2019</h6>
         <h6>A State of Georgia recognition presented by Governor Kemp for receiving a national level prize in Marketing in the High School Division of the Future Business Leaders of America.</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">FBLA 2019 National Leadership Conference - Marketing Event</h4>
         <h5>Future Business Leaders of America (FBLA)</h5>
         <h6 className="awardDate">Jun 2019</h6>
         <h6>Placed 8th nationally in a very competitive Marketing event at the 2019 NLC in San Antonio, TX</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">Georgia Certificate of Merit - Top 5%</h4>
         <h5>State of Georgia & University of Georgia</h5>
         <h6 className="awardDate">May 2019</h6>
         <h6>Awarded in accordance with the intent of the State of Georgia to identify and reward superior scholastic endeavors through outstanding achievement - Awarded to Top 5% of the Class</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">Tennis - Varsity Boys Player</h4>
         <h5>Northview High School</h5>
         <h6 className="awardDate">Jan 2020</h6>
         <h6>Varsity Boys Tennis player since Sophomore year on a very competitive Region AAAAAA (6A) Northview High School team that perennially contends for a State Championship. <br/>
• 2017 - 2018: Region AAAAAA State Championship Semifinalist <br/>
• 2018 - 2019: Region AAAAAA State Championship Finalist</h6>
       </li>
       <li className="award">
         <h4 className="awardTitle">National Beta Club 2017 National Conference - 1st Place</h4>
         <h5>National Beta Club</h5>
         <h6 className="awardDate">Jun 2017</h6>
       </li>
     </ul>


    </div>
   </div>
  );
 }
}
