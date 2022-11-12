import React from 'react';
import Svg, { Path,Ellipse } from "react-native-svg"

function SvgFiguresTriangle(props) {
  return (
  <Svg width="75" height="62" > 
   <Path stroke="black" stroke-width="10" fill="black"
    d="M 20,45 L 20,45 L 70,40 L 56,56 z"/>
   <Path stroke="orange" stroke-width="10" fill="yellow"
    d="M 0,56 L 0,56 L 30,0 L 56,56 z"/>
     <Ellipse rx="28" ry="5" cx="28" cy="56"
    fill="gold" stroke="orange" stroke-width="5"
  />
  </Svg>
  )
}
export default SvgFiguresTriangle;