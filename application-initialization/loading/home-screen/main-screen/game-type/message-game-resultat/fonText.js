import React from 'react';
import Svg, { Circle, Line } from "react-native-svg"

function FonText() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">

<Line  x1="18" y1="13.5" x2="13" y2="8" fill="white" stroke="white" strokeWidth="1" /> 
<Line  x1="8" y1="14" x2="17" y2="14" fill="white" stroke="white" strokeWidth="1" />
<Line  x1="23" y1="9" x2="25" y2="14" fill="white" stroke="white" strokeWidth="1.5" />

<Circle  cx="27" cy="12" r="1.5" fill="#F4A460" stroke="white" strokeWidth="0.8" /> 
<Circle  cx="11.5" cy="11" r="2.5" fill="#F4A460" stroke="white" strokeWidth="0.4" /> 
<Circle  cx="21" cy="12" r="2" fill="#F4A460" stroke="white" strokeWidth="0.4" />  
<Circle  cx="6" cy="12" r="2" fill="#F4A460" stroke="white" strokeWidth="1" />  
<Circle  cx="0" cy="12" r="3" fill="#F4A460" stroke="white" strokeWidth="0.4" />  
  </Svg>
  )
}
export default FonText;