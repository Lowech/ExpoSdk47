import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import audioClick from '../../../../../../../../audio-components/audioClick.js';

export default  function LevelSelection({navigation}) {
  
function GoGameBalls(){
  audioClick();
  setTimeout(()=>{
    navigation.navigate('Balls');
   },1)
}
function GoGameFigures(){
  audioClick();
  setTimeout(()=>{
    navigation.navigate('Figures');
   },1)
}

  return (
    <ImageBackground source={require('../../../../../../../../assets/img/memoryLevel.png')} resizeMode="cover" style={styles.MainPageMain}>
        <TouchableOpacity style={styles.GameIconsContainer}  onPress={GoGameBalls}>
          <Image source={require('../../../../../../../../assets/img/ballsIcons.png')} resizeMode="cover" style={styles.GameIcons}/>
        </TouchableOpacity >
        <TouchableOpacity   style={styles.GameIconsContainer} onPress={GoGameFigures}>
          <Image source={require('../../../../../../../../assets/img/Figures.png')} resizeMode="cover" style={styles.GameIcons}/>
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
      backgroundColor: '#339db2',
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