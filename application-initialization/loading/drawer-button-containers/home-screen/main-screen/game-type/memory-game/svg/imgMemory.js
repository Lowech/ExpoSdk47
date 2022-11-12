import React from 'react';
import Svg, { Circle, Rect ,Line, Polyline,Path } from "react-native-svg"

function ImgLogic() {
  return (
  <Svg
    x={0}
    y={0}
    viewBox="2 0 16 16"
    xmlSpace="preserve">
<Rect  x="0" y="1" stroke="#8B4513" fill="rgba(255, 250, 250,0.3)" strokeWidth="0.1" width="15" height="5" rx="2" ry="2"/>  
<Line  x1="2" y1="3.5" x2="4" y2="3.5" stroke="red" strokeWidth="2" /> 
<Circle  cx="7" cy="3.5" r="1.1" fill="yellow"/>
<Polyline  points="10,4.5 11.5,2.5 13,4.5 9.9,4.5" stroke="green" fill="green" strokeWidth="0.1" />

<Circle  cx="24" cy="5" r="4"  fill="rgba(30, 144, 255,0.4)" />
<Circle  cx="15" cy="9" r="1" fill="rgba(30, 144, 255,0.4)" />
<Circle  cx="18" cy="7.5" r="1.5"  fill="rgba(30, 144, 255,0.4)"/>
<Circle  cx="26" cy="4" r="1.1" fill="red" />
<Polyline  points="21,5 22.5,2.5 24,5 21,5" stroke="green" fill="green" strokeWidth="0.1" />
<Line  x1="23" y1="7" x2="25" y2="7" stroke="blue" strokeWidth="2" strokeMiterlimit="20"/>


<Circle  cx="8" cy="16" r="8" fill="rgba(160, 82, 45,0.5)" stroke="white" strokeWidth="0.4" strokeMiterlimit="10"/>
<Line  x1="3" y1="14" x2="6" y2="14" stroke="white" strokeWidth="0.5" strokeMiterlimit="20"/>
<Rect  x="1" y="10" fill="grey" stroke="white" strokeWidth="0.2" width="10" height="2" rx="1" ry="2"/>
<Circle  cx="13" cy="12" r="0.2" fill="#F4A460" />
<Circle  cx="13" cy="12.3" r="0.3" fill="#F4A460" />
<Circle  cx="13" cy="12.6" r="0.4" fill="#F4A460" />
<Circle  cx="13" cy="12.9" r="0.5" fill="#F4A460" />
<Circle  cx="13" cy="13.2" r="0.6" fill="#F4A460" />
  </Svg>
  )
}
export default ImgLogic;