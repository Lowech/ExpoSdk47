import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight ,TouchableOpacity,Pressable } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import MenuLogo  from './menuSvg';
import audioClick from '../../../../../audio-components/audioClick.js'
import RegistLoginSvg  from './registLoginSvg';
import SettingSvg  from './settingSvg';
import ProgressSvg  from './progressSvg';
import RangSvg  from './rangSvg';

import MailSvg  from './mailSvg';

export default function menuCentr(props) {

  
  const [backgroundColorClick, setBackgroundColorClick] = useState("rgb(205, 92, 92)");
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
}
  function clickGoHome(){
    audioStatus();
    setBackgroundColorClick(()=>{return backgroundColorClick ? "rgb(205, 92, 92)"  : '#8B0000'});
    setTimeout(()=>{
      props.menu.navigate('MainScreen');
    },1)

  }
  function clickGoProgress(){
    audioStatus();
    setTimeout(()=>{
      props.menu.navigate('Progress');
    },1)
  }
  function clickGoRang(){
    audioStatus();
    setTimeout(()=>{
      props.menu.navigate('Rang');
    },1)
  }
  function clickGoCorrespondence(){
    audioStatus();
    setTimeout(()=>{
      props.menu.navigate('Correspondence');
    },1)
  }
  function clickGoRegistLogin(){
    audioStatus();
    setTimeout(()=>{
      props.menu.navigate('Authorization');
    },1)
  }
  function clickGoSetting(){
    audioStatus();
    setTimeout(()=>{
      props.menu.navigate('Setting');
    },1) 
    
  }

    const styles = StyleSheet.create({
      menuButtonСontainer:{
        display: 'flex',
        flexDirection: 'row',
        opacity: 1,
        width: 'auto',
        height: 'auto',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        
        
        },
        wrapperCustom: {
          borderRadius: 8,
          padding: 6
        },
      menuButton:{ 
        backgroundColor: "rgb(205, 92, 92)",
        width: 80,
        height: 32,
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.5)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.5)",
        
      }
    });

    return (
      <View style={styles.menuButtonСontainer}>
        <Pressable
       onPressOut={() => clickGoHome()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton,{backgroundColor: backgroundColorClick,borderLeftWidth: 1,
            borderLeftColor: "rgba(0, 0, 0,0.5)",borderBottomLeftRadius: 5}]}>
     
          <MenuLogo/>

        </Pressable>
        <Pressable
       onPressOut={() => clickGoProgress()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton]}>
     
          <ProgressSvg/>

        </Pressable>
        <Pressable
       onPressOut={() => clickGoRang()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton]}>
     
          <RangSvg/>

        </Pressable>
        <Pressable
       onPressOut={() => clickGoCorrespondence()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton]}>
     
          <MailSvg/>

        </Pressable>
        <Pressable
       onPressOut={() => clickGoRegistLogin()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton]}>
     
     <RegistLoginSvg/>

        </Pressable>
        <Pressable
       onPressOut={() => clickGoSetting()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton,{borderBottomRightRadius: 5}]}>
         <SettingSvg/>

        </Pressable>
     </View>
    );
  }
 