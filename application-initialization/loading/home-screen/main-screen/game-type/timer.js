import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button , Dimensions,Animated } from 'react-native';
import {useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { timeGameTrue, timeGameFalse } from '../../../../../redux/counterSlice';

  

export default  function Timer(props) {
  
  
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  
  const [sec, setSec] = useState(15);
  const [colorTimer, setColorTimer] = useState('lime');
  const fadeAnim = useRef(new Animated.Value(-55)).current;
  
  useEffect(()=>{
    
    if(isFocused === true){
      setSec(15);
    }
  },[isFocused])

useEffect(()=>{
  if(props.startTimer === "start" && sec !== 0){
//действия таймера
      setTimeout(()=>setSec(sec-1),1000);
//анимация таймера      
      Animated.timing(fadeAnim, {
        toValue: -5,
        duration: 500,
        useNativeDriver: false
      }).start()
//изменения цввета таймера
      switch (sec) {
        case 10:
          setColorTimer( 'yellow' );
          break;
        case 5:
          setColorTimer( '#FF0000' );
          break;
        case 15:
          setColorTimer( 'lime' );
          break;
    }
  }
  if(sec === 0){
    dispatch(timeGameTrue())
    setTimeout(()=>{dispatch(timeGameFalse());},1000);
    Animated.timing(fadeAnim, {
      toValue: -55,
      duration: 1,
      useNativeDriver: false
    }).start()
  }
},[props.startTimer,sec])

  const styles = StyleSheet.create({
    container:{
      height: 55,
      width: '100%',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'center',
      position: 'absolute',
      zIndex: 99999,
    },
    containerTimer:{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'center',
      width: '100%',
      height: 55,
      backgroundColor: 'transparent',
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOffset:  { width: 2, height: 2 },
      shadowOpacity: 0.5,
      
    },
    timer:{
      color: colorTimer,
      fontSize: 40,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowRadius: 10,
      textShadowOffset:  { width: 2, height: 2 },
      width: 100,
      height: 55,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: 'rgba(192, 192, 192, 0.4)',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,  
         
    }

  });
  return (
    <Animated.View style={[{top: fadeAnim}]}>
        <View style={styles.container}>
            <View style={styles.containerTimer}>
                <Text style={styles.timer}>{sec}</Text>  
            </View>         
      <StatusBar backgroundColor="transparent" hidden={true}/>
        </View>
    </Animated.View>
  );
}
