import * as React from 'react';
import MemoryGameLogo from './game-type/memory-game/memoryGameLogo';
import LogicGameLogo from './game-type/logic-game/logicGameLogo';
import { StyleSheet, View, Button,Pressable,ImageBackground } from 'react-native';

export default  function MainScreen({navigation}) {
  return (
    <ImageBackground style={styles.MainPageMain} source={require('../../../../../assets/img/mainFoon.png')} resizeMode="cover" >
    
      <LogicGameLogo linkGo={navigation}/>
      <MemoryGameLogo  linkGo={navigation}/>
     
    </ImageBackground>
  );
}

  const styles = StyleSheet.create({
    MainPageMain:{
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
      backgroundColor: '#BC8F8F',
    }
  });