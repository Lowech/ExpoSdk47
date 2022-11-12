import React from 'react';
import Svg, { Circle, Line } from "react-native-svg"

function openSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">

<Line  x1="14" y1="10" x2="16" y2="6" fill="white" stroke="white" strokeWidth="1" /> 
<Line  x1="10" y1="10" x2="8" y2="6" fill="white" stroke="white" strokeWidth="1" />

<Circle  cx="12" cy="4" r="2" fill="grey" stroke="white" strokeWidth="0.4" /> 
<Circle  cx="12" cy="6" r="1.2" fill="white" stroke="white" strokeWidth="0.4" /> 
<Circle  cx="12" cy="9" r="1" fill="white" stroke="white" strokeWidth="0.4" />  
<Circle  cx="12" cy="12" r="0.8" fill="white" stroke="white" strokeWidth="0.4" />   
<Circle  cx="12" cy="14" r="0.5" fill="white" stroke="white" strokeWidth="0.4" />  
  </Svg>
  )
}
export default openSvg;