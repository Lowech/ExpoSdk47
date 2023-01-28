import React from 'react';
import Svg, { Circle, G,Line } from "react-native-svg"

function mailSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">

<Line  x1="2" y1="3" x2="9" y2="3" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>
<Line  x1="12" y1="3" x2="19" y2="3" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>

<Circle  cx="3" cy="6.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Line  x1="7" y1="6.5" x2="14" y2="6.5" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>


<Circle  cx="3" cy="10" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="8" cy="10" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>

<Circle  cx="3" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/> 
<Line  x1="7" y1="13.5" x2="14" y2="13.5" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>
<Circle  cx="18" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="23" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>

  </Svg>
  )
}
export default mailSvg;