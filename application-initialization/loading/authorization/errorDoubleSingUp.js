import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import { useState,useEffect,useRef} from 'react';
import { useSelector } from 'react-redux';
import audioClick from '../../../audio-components/audioClick.js'
//выводит сообщения еси вход или регистрация происходит повторно после участия в играх без перезахода в игру
export default function ErrorDoubleSingUp(props)  {

//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
    
  }
}
//  
  const displayValue = useSelector(state => state.counter.value1);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(-100)).current;
  
   
  const resetAnimation = () => {Animated.timing( fadeAnim1,{
    toValue: -100,
    duration: 300,
    useNativeDriver: false
  }).start(),
   Animated.timing(fadeAnim,{
    toValue: 0,
    duration: 500,
    useNativeDriver: false
  }).start() 
  
}
  const blockOffsetVisibility = () => {  Animated.timing( fadeAnim1,{
    toValue: 20,
    duration: 300,
    useNativeDriver: false
  }).start(),
  Animated.timing(fadeAnim,{
    toValue: 1,
    duration: 500,
    useNativeDriver: false
  }).start() 
}

   const styles = StyleSheet.create({
      container:{
         display: 'flex',
         position: "absolute",
         width: 400,
         height: 'auto', 
         left: 50,
         borderRadius: 10,
         padding: 10,
         backgroundColor: "white",
         alignItems: "center",
         zIndex: 1 
      },
      buttonClose: {
         width: 80,
         height: 30,
         paddingTop: 2,
         marginTop: 10,
         marginBottom: 5,
        backgroundColor: "#2196F3",
      },
      modalText: {
        textAlign: "center",
        fontSize: 18
      }
    });
        
    let date = new Date();
    useEffect(()=>{
      if(props.state == true){
        blockOffsetVisibility();
      }
        
      },
       [props.state]
    );

    useEffect(()=>{
      resetAnimation()  
    },
       [displayValue],
    );

  return (
    <Animated.View style={[styles.container,{opacity: fadeAnim, top: fadeAnim1}]}>
      <Text style={styles.modalText}>{'Для входа или регистрации перезайдите в игру!'}</Text>
          <TouchableOpacity 
            style={styles.buttonClose}
            onPress={()=>{resetAnimation(),audioStatus()}}>
              <Text style={styles.modalText}>ok</Text>
          </TouchableOpacity>    
    </Animated.View>
  );
};