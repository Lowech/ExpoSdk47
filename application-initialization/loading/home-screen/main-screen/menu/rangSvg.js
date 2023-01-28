import React from 'react';
import Svg, { Circle, G,Line } from "react-native-svg"

function RangSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
  
<Line  x1="24" y1="5" x2="22" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="17" y1="7" x2="22" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>


<Line  x1="17" y1="7" x2="15" y2="9" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="10" y1="9" x2="15" y2="9" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="10" y1="5" x2="8" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="2" y1="9" x2="4" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>

<Line  x1="4" y1="7" x2="8" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>

<Circle  cx="24" cy="4.5" r="0.6" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="2" cy="9" r="0.5" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="10.5" cy="4.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>   
<Circle  cx="15" cy="12.5" r="0.8" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>   

<Line  x1="15" y1="12" x2="15" y2="9" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="10" y1="9" x2="8" y2="7" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
  </Svg>
  )
}
export default RangSvg;