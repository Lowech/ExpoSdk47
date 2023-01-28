import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse,Polygon } from "react-native-svg"

function SvgFiguresRectangle(props) {
  return (
  <Svg width="75" height="62" > 
  <Path stroke="black" stroke-width="10" fill="black"
    d="M 30,5 L 30,15 L 40,10 L 70,40 L 42,55  z"/>
    <Path stroke="white" stroke-width="10" fill="indigo"
    d="M 0,15 L 0,15 L 20,5 L 75,5 L 60,16 z"/>
    <Path stroke="white" stroke-width="10" fill="indigo"
    d="M 75,5 L 75,5 L 75,42 L 62,55 L 60,16 z"/>
    <Rect x="0" y="15" width="62" height="40" fill="indigo" stroke="white" strokeWidth="1"/>
  </Svg>
  )
}
export default SvgFiguresRectangle;