import React, { useState,useEffect } from 'react';
import { StyleSheet,View, TouchableOpacity,Pressable } from 'react-native';
import AlertError from '../../game-type/alertFail/alertError';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../../../../firebaseConfig';
import { getDatabase, ref,onValue} from "firebase/database";
import {getAuth} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { positionStatusAbsolute, positionStatusRelative } from '../../../../../../../redux/counterSlice';
import {useIsFocused } from '@react-navigation/native';
import ImgMemory from './svg/imgMemory';
import audioClick from '../../../../../../../audio-components/audioClick.js'
initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

export default function MemoryGameLogo(props) {
  
  
  const dispatch = useDispatch()

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '30%',
    height: '30%',
    backgroundColor: 'rgba(250, 235, 215,0.2)',
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
  
  function securityPointer(r){
    audioClick(); 
    const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
      onValue(starCountRef, (snapshot) => {
        const data = Object(snapshot.val());
        
        if(data.timbon > 0)
        {
         setTimeout(()=>{
          props.linkGo.navigate('levelSelectionNavigationMemory');
          
         },1) 
        }else{
          dispatch(positionStatusAbsolute())
        }
      });
  }
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused === false){
      dispatch(positionStatusRelative())
    }
  },[isFocused])

  return (    
    <View style={styles.container} >
      <AlertError/>
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