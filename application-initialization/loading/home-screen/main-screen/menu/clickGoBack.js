import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight ,TouchableOpacity,Pressable } from 'react-native';
import ReturnSvg  from './returnSvg';
import MenuLogo  from './menuSvg';
import audioClick from '../../../../../audio-components/audioClick.js'
import { useSelector,useDispatch } from 'react-redux';
import {  menuCenterVisibleСhange, } from '../../../../../redux/counterSlice';

export default function ClickGoBack(props) {

  const dispatch = useDispatch()
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
}
  //const sound = new Audio.Sound();
    
      /*try {
        const { sound , soundObject, status } = await Audio.Sound.createAsync(
          require('../../../../../assets/audio/bulkBit.wav'),
          { shouldPlay: true }
        );
        //await sound.loadAsync(require('../../../../../../../assets/audio/bulkBit.wav'));
        //await sound.setStatusAsync({ volume: 0.5 })
        await sound.playAsync();
        await sound.unloadAsync();
        console.log(status)
     
    } catch (error) {
    }
  }
  useEffect( ()=>{
    async function reloudSound() {
      try {
        
        await sound.unloadAsync();
        await sound.loadAsync(require('../../../../../assets/audio/bulkBit.wav'));
       
      } catch (error) {
      }
    }
      reloudSound()
  },[sound])*/

  function clickGoBack(){
    audioStatus();
    setTimeout(()=>{
      dispatch(menuCenterVisibleСhange(true));
      props.goBack.goBack();
    },1)
  }

    const styles = StyleSheet.create({
      menuButtonСontainer:{
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 32,
        
        },
        wrapperCustom: {
          borderRadius: 8,
          padding: 6
        },
      menuButton:{ 
        backgroundColor: '#7B68EE',
        width: 100,
        height: 32,
        paddingLeft: 20,
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.3)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.3)",
        borderBottomRightRadius: 5,
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.5)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.5)",
        
      }
    });

    return (
      <View style={styles.menuButtonСontainer}>
        <Pressable
       onPressOut={() => clickGoBack()}
        style={({ pressed }) => [
          {paddingRight: pressed
              ? 20
              : 0
          },styles.menuButton]}>
     
            <ReturnSvg/>

        </Pressable>
     </View>
    );
  }
 