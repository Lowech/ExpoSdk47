import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"

function SvgFiguresCircle(props) {
  return (
  <Svg width="75" height="62" > 
    <Ellipse transform="rotate(-5 14 20)" cx="43" cy="54.3" rx="29" ry="8" fill="black"/>   
    <Circle  cx="30" cy="30" r="30" fill="red"/>
    <Ellipse transform="rotate(-39 14 20)" cx="20" cy="20" rx="20" ry="12" fill="rgba(188, 143, 143, 0.3)"/>
  </Svg>
  )
}
export default SvgFiguresCircle;