import React from 'react';
import awards from '../images/awards.jpg';

function Section(props) {
  var address = props.image;
  return (
    <div>
      <div style={{backgroundImage: `url(${awards})`}}>{props.name}{address}</div>


    </div>
  );
}

export default Section;
