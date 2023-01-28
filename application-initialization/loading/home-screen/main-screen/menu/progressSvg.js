import React from 'react';
import Svg, { Circle, G,Line } from "react-native-svg"

function ProgressSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
<Circle  cx="19" cy="6" r="1.5" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>    
<Line  x1="24" y1="6" x2="22" y2="8" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="17" y1="8" x2="22" y2="8" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>

<Circle  cx="12" cy="8.5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>    
<Line  x1="17" y1="8" x2="15" y2="10" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="10" y1="10" x2="15" y2="10" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>

<Circle  cx="5" cy="11" r="0.5" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>    
<Line  x1="10" y1="10" x2="8" y2="12" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Line  x1="3" y1="12" x2="8" y2="12" fill="white" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
  </Svg>
  )
}
export default ProgressSvg;