import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight ,TouchableOpacity,Pressable } from 'react-native';
import Svgicon  from './returnSvg';
import MenuLogo  from './menuSvg';
import audioClick from '../../../../../audio-components/audioClick.js'


export default function Menu(props) {

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

  function clickMenu(){
    audioClick();
    props.menu.openDrawer();
  }

  function clickGoLinck(){
    audioClick();
    props.menu.navigate('MainScreen');
  }

    const styles = StyleSheet.create({
      menuButtonСontainer:{
        display: 'flex',
        flexDirection: 'row',
        },
        wrapperCustom: {
          borderRadius: 8,
          padding: 6
        },
      menuButton:{ 
        backgroundColor: '#7B68EE',
        width: 80,
        height: 32,
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.3)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.3)",
      }
    });

    return (
      <View style={styles.menuButtonСontainer}>
        <Pressable
       onPressIn={() => clickGoLinck()}
        style={({ pressed }) => [
          {paddingRight: pressed
              ? 10
              : 0
          },styles.menuButton]}>
     
            <Svgicon/>

        </Pressable>
        <Pressable
        onPressIn={() => clickMenu()}
         style={({ pressed }) => [
          {paddingTop: pressed
              ? 5
              : 0
          },styles.menuButton]}>
         
          <MenuLogo/>   

        </Pressable>
     </View>
    );
  }
 