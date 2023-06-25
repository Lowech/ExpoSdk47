import {useState,useEffect,useRef } from 'react';
import * as React from 'react';
import { StyleSheet, Text, Animated, Pressable,ImageBackground } from 'react-native';
import audioClick from '../../../../../../../audio-components/audioClick.js';
import { useSelector } from 'react-redux';
import OpenSvg from './svg/openSvg';
import CloceSvg from './svg/cloceSvg';


export default  function AlertTextMission(props) {
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
  function audioStatus(){
    if(audioClickStatus === true){
      audioClick();
    }
    
  }
//

//номер подуровня для появления сообщения
  const numberGame = useSelector(state => state.counter.numberGame);
//начальные значения текста и анимации 
  const [textMission, setTextMission] = useState('');
  const alertHidden = useRef(new Animated.Value(0)).current;

//выставления значения текста в зависимости от уровня    
  useEffect(()=>{
      
    switch (props.text) {
        case 'memory':
            setTextMission( 'Ваша задача запомнить увиденное на экране!' );
          break;
        case 'ball':
            setTextMission( 'Укажите точное количество всех шаров, увиденных ранее!' );
          break;
        case 'figures':
            setTextMission( 'Укажите точное количество всех фигур, увиденных ранее!' );
          break;
        case 'text':
            setTextMission( 'Какие по вашему мнению элементы тут лишние? Выделите их касанием!' );
        break;  
        case 'сортировка':
            setTextMission( 'Отсортируйте элементы по возрастанию, разместив их в блоках снизу' );
        break;
    }
   
  })
//начальные значения показа сообщения 
  const interpolateHidden = alertHidden.interpolate({
    inputRange: [0, 100],
    outputRange: ['93%', '30%']
  });

//открытие и закрытия окна сообщения   
  const openAlertMessage = () => {Animated.timing( alertHidden,{
    toValue: 100,
    duration: 300,
    useNativeDriver: false
  }).start()
} 
  const cloceAlertMessage = () => {Animated.timing( alertHidden,{
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

//действия при клике пользователя открытие и закрытие
const openAlertMessageClick = () => {Animated.timing( alertHidden,{
  toValue: 100,
  duration: 300,
  useNativeDriver: false
}).start()
audioStatus();
}
const cloceAlertMessageClick = () => {Animated.timing( alertHidden,{
    toValue: 0,
    duration: 300,
    useNativeDriver: false
  }).start()
  audioStatus();
}

//закрытия сообщения
  useEffect(()=>{
//открытия сообщения в зависимости от уровня  
    if(numberGame === 1){
      openAlertMessage();
    }
    
    setTimeout(()=>{cloceAlertMessage()},5000)

  },[])
    
    return (
       
      <Animated.View  style={[styles.containerMessage, {top: interpolateHidden}]}>
          <Pressable
            onPress={openAlertMessageClick}
             style={({ pressed }) => [
              {padding: pressed
                  ? 5
                  : 0
              },styles.openContainer]}>
             
             <OpenSvg /> 
    
            </Pressable>
            <ImageBackground source={require('../../../../../../../assets/img/AlertTextMission.jpg')} resizeMode="cover" style={styles.containerText}>

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
      borderTopWidth: 3,
      borderTopColor: "#00FFFF",
    },
    blockText: {  
      paddingTop: 10,  
      fontSize: 28,
      fontWeight: "bold",
      color: 'white',
      textAlign: "center",
      textShadowColor: 'rgba(0, 0, 0,0.7)',
      textShadowRadius: 3,
      textShadowOffset:  { width: 2, height: 2 },
      width: "90%",
      height: "66%",
     
    },
    openContainer:{
      width: 60,
      height: 35,
      backgroundColor: '#5ea2b0', 
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      borderLeftWidth: 1.5,
      borderLeftColor: "#00FFFF",
      borderTopWidth: 1.5,
      borderTopColor: "#00FFFF",
      borderRightWidth: 1.5,
      borderRightColor: "#00FFFF",
      
    },
    cloceContainer:{
      width: 60,
      height: 35,
      backgroundColor: '#8eafb7', 
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      borderLeftWidth: 1.5,
      borderLeftColor: "#00FFFF",
      borderRightWidth: 1.5,
      borderRightColor: "#00FFFF",
      borderBottomWidth: 1.5,
      borderBottomColor: "#00FFFF",
    }
  });