import * as React from 'react';
import { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, ImageBackground, View} from 'react-native';
import { AnimatedSVGPaths } from "react-native-svg-animations";

let  d=["M 40,120 H 160 M 180,180 L 20,20,M 158,120 C 158,120 110,190 42,120,M 80,110 C 80,110 100,80 125,110,M 145,110 C 145,110 100,50 60,110 ,M 45,110 C 45,110 90,20 160,110"];

export default function WaitingDownload(props){
  const [net, setNet] = useState("none");

useEffect(()=>{
  const unsubscribe = NetInfo.addEventListener(state => {
    if(state.isConnected !== true){
      setNet("flex")
    }
  },[unsubscribe]);
})

  const styles = StyleSheet.create({
    waitingDownload:{
      height: "100%",
      width: "100%",
      display: props.displayStatus,
      
    },
    Svg:{
      display: net,
      position: "relative",
      height: 100,
      width: 100,
      backgroundColor: 'rgba(192, 192, 192,0.5)',
      borderRadius: 20,
      zIndex: 1,
      top: 130,
      left: "43%"
    }
  });
  return (
    <ImageBackground style={styles.waitingDownload} source={require('../assets/logoReactNativet.png')} resizeMode="cover">
      <View style={styles.Svg}>
        <AnimatedSVGPaths 
          strokeColor={"red"}
          duration={2000}
          strokeWidth={5}
          height={200}
          width={200}
          scale={0.5}
          delay={1000}
          ds={d}
        />
      </View>
    </ImageBackground>
    );
  }
  