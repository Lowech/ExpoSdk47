import React, { useState,useEffect } from 'react';
import { StyleSheet,Pressable, View} from 'react-native';
import ImgLogick from './svg/ImgLogick';
import AlertError from '../../game-type/alertFail/alertError';
//import { initializeApp } from 'firebase/app';
//import  {firebaseConfig}  from '../../../../../../firebaseConfig';
//import { getDatabase, ref,onValue} from "firebase/database";
//import {getAuth} from 'firebase/auth';
import {useIsFocused } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import audioClick from '../../../../../../audio-components/audioClick.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect } from 'react';

/*initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();*/

export default function LogicGameLogo(props) {
  const isFocused = useIsFocused();
   //Данные пользователя получены
   const userTrue = useSelector(state => state.counter.userTrue); 
 //получения значений timbon  
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
  useLayoutEffect(()=>{
    getTimbonUp();
    getMyStringValue();
  },[isFocused,userTrue,,timbonUp])

// проверка количество тимбон при входе в игру
function securityPointer(){
  audioStatus(); 
  if(timbon > 0)
      {
       setTimeout(()=>{
        props.linkGo.navigate('levelSelectionNavigationLogic');
        
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
  <View style={styles.LogicGameLogo} >
      <AlertError positionStatusNoneFlex={positionStatusNoneFlex}/>
      <Pressable
       onPressOut={securityPointer}
        style={({ pressed }) => [
          {opacity: pressed
              ? 0.3
              : 1
          }]}>
        <ImgLogick/>
      </Pressable>
    </View>  
);}
const styles = StyleSheet.create({
  LogicGameLogo:{
    display: 'flex',
    width: '30%',
    height: '30%',
    //backgroundColor: '#CD5C5C',
    borderRadius: 20,
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