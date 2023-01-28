import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse,Polygon } from "react-native-svg"

function SvgFiguresCylinder(props) {
  return (
  <Svg width="75" height="62" > 
  <Ellipse rx="25" ry="10" cx="50" cy="47"
    fill="black" stroke="grey" stroke-width="5"
  />
  <Rect x="5" y="5" width="50" height="51" fill="aqua" stroke="grey" strokeWidth="1"/>
  
  <Ellipse rx="25" ry="5" cx="30" cy="5"
    fill="aqua" stroke="grey" stroke-width="5"
  />
  <Ellipse rx="25" ry="5" cx="30" cy="55"
    fill="aqua" stroke="grey" stroke-width="5"
  />
  <Rect x="6" y="35" width="48" height="20" fill="aqua" stroke="aqua" strokeWidth="1"/>
  
  </Svg>
  )
}
export default SvgFiguresCylinder;