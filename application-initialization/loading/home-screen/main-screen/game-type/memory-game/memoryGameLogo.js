import React, { useState,useEffect,useLayoutEffect } from 'react';
import { StyleSheet,View, TouchableOpacity,Pressable } from 'react-native';
import AlertError from '../../game-type/alertFail/alertError';
//import { initializeApp } from 'firebase/app';
//import  {firebaseConfig}  from '../../../../../../firebaseConfig';
//import { getDatabase, ref,onValue} from "firebase/database";
//import {getAuth} from 'firebase/auth';
import {useIsFocused } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import ImgMemory from './svg/imgMemory';
import audioClick from '../../../../../../audio-components/audioClick.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

/*initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();*/

export default function MemoryGameLogo(props) {
//Данные пользователя получены
  const userTrue = useSelector(state => state.counter.userTrue); 
  const isFocused = useIsFocused();
  const [timbon, setTimbon] = useState();
  const [timbonUp, setTimbonUp] = useState(0);
  // появление сообщения об отсутсвии тимбонов
  const [positionStatusNoneFlex, setPositionStatusNoneFlex] = useState('none');
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
}
const getTimbonUp = async () => {
  try {
    const value = await AsyncStorage.getItem('@timbonUp');
    if(value !== null){
      setTimbonUp(Number(value))
    }  
  } catch(e) {
    console.log(e)
  } 
}
const getMyStringValue = async () => {
  try {
    const value = await AsyncStorage.getItem('@timbon');
    if(value !== null){
      setTimbon(timbonUp === 0 ? Number(JSON.parse(value).timbon) : timbonUp);
    }
  } catch(e) {
    console.log(e)
  } 
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '30%',
    height: '30%',
    backgroundColor: 'rgba(245, 245, 220,0.3)',
    borderRadius: 20,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.5)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0,0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.3)",
  }
});
//получения значений timbon  

useLayoutEffect(()=>{
  getMyStringValue();
  getTimbonUp();
},[isFocused,userTrue,timbonUp])
 
// обработка запроса пользователя
  function securityPointer(){
    console.log(timbonUp)
    console.log(timbon)
    audioStatus(); 
    if(timbon > 0)
        {

         setTimeout(()=>{
          props.linkGo.navigate('levelSelectionNavigationMemory');
          
         },1) 
        }else{
          setPositionStatusNoneFlex("flex");
          setTimeout(()=>setPositionStatusNoneFlex("none"),2000)
        }
    /*const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
      onValue(starCountRef, (snapshot) => {
        const data = Object(snapshot.val()); 
      });*/
  }
  
  return (    
    <View style={styles.container} >
      <AlertError positionStatusNoneFlex={positionStatusNoneFlex}/>
      <Pressable
       onPressOut={securityPointer}
        style={({ pressed }) => [
          {opacity: pressed
              ? 0.3
              : 1
          }]}>
        <ImgMemory />
      </Pressable>
    </View>  
  );
}   