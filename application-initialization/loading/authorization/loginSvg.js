import * as React from "react"
import Svg, { Rect,Polygon } from "react-native-svg"

function LoginSvg() {
  return (
    <Svg
      x={0}
      y={0}
      viewBox="2 0 20 20"
      xmlSpace="preserve"
    >    
    <Rect
    x="4"
    y="2"
    width="15"
    height="15"
    fill="white"
    strokeWidth="0.5"
    stroke="white"
  />
  <Polygon
    points="
    4,2
    13,3
    13,13
    4,17 "
    fill="grey"
    stroke="white"
    strokeWidth="0.01"
  />
    </Svg>
  )
}

export default LoginSvg