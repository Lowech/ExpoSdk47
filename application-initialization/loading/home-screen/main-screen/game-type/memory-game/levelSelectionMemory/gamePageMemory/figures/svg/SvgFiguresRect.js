import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse,Polygon } from "react-native-svg"

function SvgFiguresRect(props) {
  return (
  <Svg width="75" height="62" > 
  <Path stroke="black" stroke-width="10" fill="black"
    d="M 30,5 L 30,15 L 40,10 L 70,40 L 42,55  z"/>
    <Path stroke="grey" stroke-width="10" fill="black"
    d="M 0,15 L 0,15 L 20,5 L 55,5 L 40,16 z"/>
    <Path stroke="grey" stroke-width="10" fill="black"
    d="M 56,5 L 56,5 L 56,42 L 42,55 L 40,16 z"/>
    <Rect x="0" y="15" width="42" height="40" fill="black" stroke="grey" strokeWidth="1"/>
  </Svg>
  )
}
export default SvgFiguresRect;