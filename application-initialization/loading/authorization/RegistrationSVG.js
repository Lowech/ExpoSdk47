import React from 'react';
import Svg, {Circle,Line, Path,Rect } from "react-native-svg"


function RegistrationSVG() {
  return (
    <Svg
    viewBox="0 -3 40 40"
  >    
<Rect
    x="4"
    y="2"
    width="8"
    height="8"
    fill="none"
    strokeWidth="0.8"
    stroke="white"
  />
  <Path
    d="M6 5 L8 8 L15 2"
    fill="none"
    stroke="white"
    strokeWidth="0.8"
  />
  <Line  x1="27" y1="6" x2="18" y2="6" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="10"/>
  <Circle  cx="31" cy="6" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Circle  cx="35" cy="6" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Rect
    x="4"
    y="12"
    width="8"
    height="8"
    fill="none"
    strokeWidth="0.8"
    stroke="white"
  />
  <Path
    d="M6 15 L8 18 L15 12"
    fill="none"
    stroke="white"
    strokeWidth="0.8"
  />
  <Line  x1="24" y1="16" x2="18" y2="16" fill="white" stroke="white" strokeWidth="1" strokeMiterlimit="10"/>
  <Circle  cx="31" cy="16" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Circle  cx="27" cy="16" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Rect
    x="4"
    y="22"
    width="8"
    height="8"
    fill="none"
    strokeWidth="0.8"
    stroke="white"
  />
  <Circle  cx="26" cy="26" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Circle  cx="22" cy="26" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  <Circle  cx="18" cy="26" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
  </Svg>
  )
}

export default RegistrationSVG;