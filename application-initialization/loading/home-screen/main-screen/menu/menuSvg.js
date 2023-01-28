import React from 'react';
import Svg, { Circle, G,Line } from "react-native-svg"

function MenuLogo() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
<Circle  cx="22" cy="4" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>    
<Circle  cx="16" cy="4" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="10" cy="4" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Line  x1="6" y1="4" x2="3" y2="4" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>
<Circle  cx="16" cy="8" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Circle  cx="22" cy="8" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Line  x1="11" y1="8" x2="3" y2="8" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>
<Circle  cx="22" cy="12" r="1" fill="white" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Line  x1="17" y1="12" x2="3" y2="12" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="20"/>
  </Svg>
  )
}
export default MenuLogo;