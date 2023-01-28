import * as React from "react"
import Svg, { Circle, Line } from "react-native-svg"

function Svgicon() {
  return (
    <Svg viewBox="2 0 16 16">    
      <Circle  cx="6" cy="6" r="0.5"  fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
      <Line  x1="8" y1="7" x2="12" y2="8" fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
      <Line  x1="8" y1="5" x2="12" y2="4" fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
      <Line  x1="23" y1="6" x2="8" y2="6" fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="20"/>
      <Circle  cx="20" cy="10" r="2.5" fill="none" stroke="white" strokeWidth="0.8" strokeMiterlimit="10"/>
      <Line  x1="16" y1="12" x2="1" y2="12" fill="white" stroke="white" strokeWidth="0.8" strokeMiterlimit="20"/>
    </Svg>
  )
}
export default Svgicon