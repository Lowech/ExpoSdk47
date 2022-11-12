import {useState,useEffect,useRef } from 'react';
import * as React from 'react';
import { StyleSheet, Text, Animated, Pressable,ImageBackground,View, } from 'react-native';
import audioClick from '../../../../../../../../audio-components/audioClick.js';

import OpenSvg from './svg/openSvg';
import CloceSvg from './svg/cloceSvg';



export default  function AlertTextMission(props) {
 
    const [textMission, setTextMission] = useState('');
    const alertHidden = useRef(new Animated.Value(0)).current;
    
    useEffect(()=>{
      
    switch (props.text) {
        case '1':
            setTextMission( 'Ваша задача запомнить увиденное на экране!' );
          break;
        case 'ball':
            setTextMission( 'Укажите точное количество всех шаров, увиденных ранее!' );
          break;
        case 'figures':
            setTextMission( 'Укажите точное количество всех фигур, увиденных ранее!' );
          break;
      }
    })
  const interpolateHidden=  alertHidden.interpolate({
        inputRange: [0, 100],
        outputRange: ['30%', '93%']
      });
  
    const openAlertMessage = () => {Animated.timing( alertHidden,{
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start()
      audioClick();
    }

    const cloceAlertMessage = () => {Animated.timing( alertHidden,{
      toValue: 100,
      duration: 300,
      useNativeDriver: false
    }).start()
  }
  const cloceAlertMessageClick = () => {Animated.timing( alertHidden,{
    toValue: 100,
    duration: 300,
    useNativeDriver: false
  }).start()
  audioClick();
}
  useEffect(()=>{
    
    setTimeout(()=>{cloceAlertMessage()},5000)
  },[])
    
    return (
       
      <Animated.View  style={[styles.containerMessage, {top: interpolateHidden }]}>
          <Pressable
            onPress={openAlertMessage}
             style={({ pressed }) => [
              {padding: pressed
                  ? 5
                  : 0
              },styles.openContainer]}>
             
             <OpenSvg /> 
    
            </Pressable>
            <ImageBackground source={require('../../../../../../../../assets/img/textAlert.png')} resizeMode="cover" style={styles.containerText}>

              <Pressable
                onPress={cloceAlertMessageClick}
                  style={({ pressed }) => [
                    {padding: pressed
                      ? 5
                      : 0
                  },styles.cloceContainer]}>

               <CloceSvg/> 
    
              </Pressable>
              
              <Text style={styles.blockText}>{textMission}</Text>
              </ImageBackground>
            
      </Animated.View> 
      
    );
  }

  const styles = StyleSheet.create({
    containerMessage:{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
      height: '80%',
      zIndex: 1,
      
    },
    containerText:{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#5ea2b0',
      borderTopWidth: 2,
      borderTopColor: "rgba(160, 82, 45,1)",
    },
    blockText: {  
      paddingTop: 10,  
      fontSize: 28,
      fontWeight: "bold",
      color: '#A0522D',
      textAlign: "center",
      textShadowColor: 'rgba(0, 0, 0,0.5)',
      textShadowRadius: 3,
      textShadowOffset:  { width: 1, height: 1 },
      width: "90%",
      height: "66%",
     
    },
    openContainer:{
      width: 60,
      height: 35,
      backgroundColor: '#5ea2b0', 
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      borderLeftWidth: 1,
      borderLeftColor: "rgba(255, 255, 255,0.5)",
      borderTopWidth: 1,
      borderTopColor: "rgba(255, 255, 255,0.5)",
      borderRightWidth: 1,
      borderRightColor: "rgba(255, 255, 255,0.5)",
      
    },
    cloceContainer:{
      width: 60,
      height: 35,
      backgroundColor: '#8eafb7', 
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      borderLeftWidth: 1,
      borderLeftColor: "rgba(255, 255, 255,0.5)",
      borderRightWidth: 1,
      borderRightColor: "rgba(255, 255, 255,0.5)",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255, 255, 255,0.5)",
    }
  });