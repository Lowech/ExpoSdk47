import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"

function SvgFiguresPrism(props) {
  //
  return (
  <Svg width="75" height="62" > 
    <Path stroke="black" stroke-width="10" fill="black"
      d="M 30,5 L 30,15 L 50,25 L 60,25 L 68,35 L 47,52  "/>
    <Path stroke="black" stroke-width="5" fill="green"
      d="M 1,50 L 1,50 L 13,40 L 39,40 L 49,50 L 39,58 L 11,58 z"/>
    <Rect x="1" y="10" width="48" height="40" fill="green" stroke="black" strokeWidth="1"/>
      
    <Path stroke="black" stroke-width="5" fill="green"
      d="M 1,10 L 1,10 L 13,1 L 39,1 L 49,10 L 39,19 L 11,19 z"/>
    <Rect x="2" y="49" width="46" height="1" fill="green" stroke="green" strokeWidth="1"/>
    <Path stroke="black" stroke-width="5" fill="green"
      d="M 11,58 L 11,58 L 11,19 "/>
    <Path stroke="black" stroke-width="5" fill="green"
      d="M 39,58 L 39,58 L 39,19 "/>
  </Svg>
  )
}
export default SvgFiguresPrism;