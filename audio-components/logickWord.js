import React from 'react';
import { Audio } from 'expo-av';
import { Text } from 'react-native';



export default async function logickWord ()  {
     
        const sound = require('../assets/audio/logickWord.mp3');
        await  Audio.Sound.createAsync(
          sound,
          { shouldPlay: true }
        ).then((res)=>{
          res.sound.setOnPlaybackStatusUpdate((status)=>{
            if(!status.didJustFinish) return;
            //console.log(status);
            res.sound.unloadAsync()
            .catch((error)=>{
              console.log(error)
            });
          });
        })
        .catch((error)=>{
          console.log(error)
        });
   
   return(<Text></Text>) 
  
}