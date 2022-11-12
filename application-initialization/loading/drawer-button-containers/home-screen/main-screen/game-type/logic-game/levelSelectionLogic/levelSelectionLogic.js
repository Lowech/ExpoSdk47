import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import audioClick from '../../../../../../../../audio-components/audioClick.js';

export default  function LevelSelection({navigation}) {
  
function GoGameWordMission(){
  audioClick();
  setTimeout(()=>{
    navigation.navigate('WordMission');
   },1)
}

  return (
    <ImageBackground source={require('../../../../../../../../assets/img/fonLogick.png')} resizeMode="cover" style={styles.MainPageMain}>
        <TouchableOpacity style={styles.GameIconsContainer}  onPress={GoGameWordMission}>
          <Image source={require('../../../../../../../../assets/img/ballsIcons.png')} resizeMode="cover" style={styles.GameIcons}/>
        </TouchableOpacity >
        <TouchableOpacity   style={styles.GameIconsContainer} onPress={() =>navigation.navigate('Figures')}>
          <Image source={require('../../../../../../../../assets/img/ballsIcons.png')} resizeMode="cover" style={styles.GameIcons}/>
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