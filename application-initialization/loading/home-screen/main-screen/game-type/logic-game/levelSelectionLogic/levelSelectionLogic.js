import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import audioClick from '../../../../../../../audio-components/audioClick.js';
import { useSelector,useDispatch } from 'react-redux';
import {audioGameStateСhange,audioClickСhange,audioLevelСhange} from '../../../../../../../redux/counterSlice';

export default  function LevelSelectionLogic({navigation}) {
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
}
//
  const dispatch = useDispatch();
  
function GoGameWordMission(){
  dispatch(audioGameStateСhange(false));
  audioStatus();
  setTimeout(()=>{
    navigation.navigate('WordMission');
   },1)
}
function GoGameSortingMission(){
  dispatch(audioGameStateСhange(false));
  audioStatus();
  setTimeout(()=>{
    navigation.navigate('SortingMission');
   },1)
}

  return (
    <ImageBackground source={require('../../../../../../../assets/img/zzz.jpg')} resizeMode="cover" style={styles.MainPageMain}>
        <TouchableOpacity style={styles.GameIconsContainer}  onPress={GoGameWordMission}>
          <Image source={require('../../../../../../../assets/img/word.png')} resizeMode="cover" style={styles.GameIcons}/>
        </TouchableOpacity >
        <TouchableOpacity   style={styles.GameIconsContainer} onPress={GoGameSortingMission}>
          <Image source={require('../../../../../../../assets/img/logickSort.png')} resizeMode="cover" style={styles.GameIcons}/>
         </TouchableOpacity >
    </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    MainPageMain:{
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: "row",
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
    },
    GameIcons:{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderRadius: 20,
        
    },
    GameIconsContainer: { 
      width: "30%",
      height: "35%",
      backgroundColor: '#67ced7',
      borderRadius: 20,
      borderColor: "white",
      borderWidth: 1,
    },
    
  });