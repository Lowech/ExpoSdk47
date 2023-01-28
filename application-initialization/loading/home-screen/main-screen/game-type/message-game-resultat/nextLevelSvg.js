import React from 'react';
import Svg, { Circle, Path,Line } from "react-native-svg"

function NextLevelSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
<Circle  cx="3" cy="9" r="2"  stroke="white" strokeWidth="1" strokeMiterlimit="10"/>
<Line  x1="12" y1="10" x2="1" y2="13" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="20"/> 
<Line  x1="24" y1="6" x2="16" y2="6" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="20"/> 
<Circle  cx="7" cy="13" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>   
  </Svg>
  )
}
export default NextLevelSvg;