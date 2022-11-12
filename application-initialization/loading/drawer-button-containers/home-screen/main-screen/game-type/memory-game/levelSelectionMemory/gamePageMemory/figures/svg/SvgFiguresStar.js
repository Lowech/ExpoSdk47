import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse,Polygon } from "react-native-svg"

function SvgFiguresStar(props) {
  return (
  <Svg width="75" height="62" > 
    <Path stroke="black" stroke-width="10" fill="black"
      d="M 10,62 L 10,62 L 40,40 L 60,32 L 60,40 L 68,42 L 58,48 L 55,60 L 40,50 z"/>
    <Path stroke="white" stroke-width="10" fill="orange"
      d="M 32,2 L 32,2 L 55,62 L 0,25 L 62,25 L 10,62 z"/>
    <Path stroke="orange" stroke-width="5" fill="orange"
      d="M 30,10 L 34,10 L 53,60 L 6,27 L 58,26 L 13,58 z"/>
  </Svg>
  )
}
export default SvgFiguresStar;