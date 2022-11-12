import React from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"

function MassWord(props) {
const massBirds = [];

  

  return (
    <View  style={[styles.textBlock]}>
      <Text style={[styles.text,{color:props.style}]}>бронитранспортер</Text>
  </View> 
  )
}
export default MassWord;

const styles = StyleSheet.create({
  textBlock:{
    width: 230,
    height: 30,
    backgroundColor: "red",
    position: 'absolute',
      zIndex: -1,
    
  },
  text:{
    fontSize: 25,
   
  }
})