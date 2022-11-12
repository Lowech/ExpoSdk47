import React from 'react';
import Svg, { Circle, Path,Line } from "react-native-svg"

function ButtonRefrechSvg() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
<Circle  cx="16" cy="5" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>

<Line  x1="14" y1="5" x2="6" y2="5" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="20"/> 
<Path d="M18,12 A1,1 10 1,0 18,5" stroke="white" />
<Line  x1="18" y1="12" x2="10" y2="12" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="20"/> 
<Path d="M6,5 A1,1 10 1,0 6,12" stroke="white" />
<Circle  cx="8" cy="12" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>   

  </Svg>
  )
}
export default ButtonRefrechSvg;