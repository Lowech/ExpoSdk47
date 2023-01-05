import React from 'react';
import { Audio } from 'expo-av';
import { Text } from 'react-native';



export default async function generalGame (props)  {
     
          const sound = new Audio.Sound();
        if(props === 'start'){
          try {
            await sound.unloadAsync();
            await sound.loadAsync(require('../assets/audio/fonSoung.mp3'));
            await sound.replayAsync();
            await sound.setStatusAsync({ isLooping: true})
            await sound.setStatusAsync({ volume: 0.5 })
          } 
          catch (error) {
            console.log(error)
          }
        }
        
   
   return(<Text></Text>) 
  
}