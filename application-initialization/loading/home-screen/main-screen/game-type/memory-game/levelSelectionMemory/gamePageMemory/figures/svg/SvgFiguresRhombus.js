import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"

function SvgFiguresRhombus(props) {
  return (
  <Svg width="75" height="62" >
    <Path stroke="black" stroke-width="10" fill="black"
    d="M 33,55 L 33,55  L 58,43 L 45,40 "/>
    <Path stroke="deepskyblue" stroke-width="10" fill="royalblue"
    d="M 30,5 L 30,5 L 35,5 L 60,30 L 35,55 L 30,55  "/> 
    <Path stroke="deepskyblue" stroke-width="10" fill="royalblue"
    d="M 30,5 L 30,5 L 55,30 L 30,55 L 5,30  z"/>
    <Path stroke="deepskyblue" stroke-width="10" fill="deepskyblue"
    d="M 55,30 L 55,30  L 60,30 "/>
  </Svg>
  )
}
export default SvgFiguresRhombus;