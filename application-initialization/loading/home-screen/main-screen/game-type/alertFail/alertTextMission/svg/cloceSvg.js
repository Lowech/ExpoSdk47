import React from 'react';
import Svg, { Circle, Line } from "react-native-svg"

function CloceSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">

<Line  x1="16" y1="10" x2="14" y2="6" fill="white" stroke="white" strokeWidth="1" /> 
<Line  x1="8" y1="10" x2="10" y2="6" fill="white" stroke="white" strokeWidth="1" />


<Circle  cx="12" cy="1" r="0.5" fill="white" stroke="white" strokeWidth="0.4" /> 
<Circle  cx="12" cy="4" r="0.8" fill="white" stroke="white" strokeWidth="0.4" /> 
<Circle  cx="12" cy="7" r="1" fill="white" stroke="white" strokeWidth="0.4" />  
<Circle  cx="12" cy="10" r="1.3" fill="white" stroke="white" strokeWidth="0.4" />  
<Circle  cx="12" cy="12" r="2" fill="grey" stroke="white" strokeWidth="0.4" />  
  </Svg>
  )
}
export default CloceSvg;