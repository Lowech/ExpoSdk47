import * as React from 'react';
import { useState, useEffect,useRef } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, ImageBackground,View} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';


let  d=["M 40,120 H 160 M 180,180 L 20,20,M 158,120 C 158,120 110,190 42,120,M 80,110 C 80,110 100,80 125,110,M 145,110 C 145,110 100,50 60,110 ,M 45,110 C 45,110 90,20 160,110"];

export default function WaitingDownload(props){

  const [net, setNet] = useState("none");
  
  const userTrue = useSelector(state => state.counter.userTrue);

useEffect(()=>{
  const unsubscribe = NetInfo.addEventListener(state => {
    if(state.isConnected !== true){
      setNet("flex")
    }
  },[unsubscribe]);
})
/*useEffect(()=>{
  if(navigation){
    if(userTrue){
      navigation.navigate("HomeScreen");
      
    }
    else{
      navigation.navigate("Authorization");
    }
  }
  
},
[])*/
   

  const styles = StyleSheet.create({
    waitingDownload:{
      display: props.displayStatus,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: "100%",
      width: "100%",
      
    },
  });
  return (
 <View style={styles.waitingDownload}>
   
   <ImageBackground style={styles.waitingDownload} source={require('../assets/icons.png')} resizeMode="contain">
      </ImageBackground>
      </View>
      
    );
  }
  