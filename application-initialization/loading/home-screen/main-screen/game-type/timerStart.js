import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';
import {useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default  function TimerStart() {
//начальные значения
  const isFocused = useIsFocused();
  const [sec, setSec] = useState(5);
  const [dispalyNone, setDispalyNone] = useState(-1);
  const [colorTimer, setColorTimer] = useState('lime');
  const fadeAnim = new Animated.Value(1);
//номер подуровня для появления таймера
const numberGame = useSelector(state => state.counter.numberGame);
//анимация таймера
    useEffect(() => {
      
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }).start() 
      
      if(sec === "start" ){
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        }).start() 
        return;
      }
    },[fadeAnim])
//запуск таймера
    useEffect(()=>{
      
        if(sec > 1){
          if(numberGame === 1){

          setTimeout(()=>setSec(sec-1),1000);
          setDispalyNone(9999);
          
          }
        }
        
        if(sec === 1){
          setTimeout(()=>setColorTimer( 'lime' ),1000);
          setTimeout(()=>setSec("start"),1000);
          setTimeout(()=>setDispalyNone(-1),2000);
        }

        switch (sec) {
          case 3:
            setColorTimer( 'yellow' );
            break;
          case 1:
            setColorTimer( '#FF0000' );
            break;
        } 
     
    },[numberGame,sec])

    
  const styles = StyleSheet.create({
    
    containerTimer:{
      display: "flex",
      flexDirection: 'column',
      alignContent: "center",
      justifyContent: "center",
      width: 'auto',
      height: 'auto',
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOffset:  { width: 2, height: 2 },
      shadowOpacity: 0.5,
      position: 'absolute',
      top: "5%",
      left: "31%",
      zIndex: dispalyNone,
 
    },
    timer:{
      color: colorTimer,
      fontSize: 100,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowRadius: 10,
      textShadowOffset:  { width: 2, height: 2 },
      width: 300,
      height: 140,
      textAlign: 'center',
      textAlignVertical: 'center', 
     
    }

  });
  return (
      <Animated.View style={[styles.containerTimer,{opacity: fadeAnim}]}>
        <Text style={styles.timer}>{sec}</Text>  
      </Animated.View>
  );
}
