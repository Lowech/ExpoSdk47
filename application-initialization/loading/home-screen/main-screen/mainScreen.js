import * as React from 'react';
import MemoryGameLogo from './game-type/memory-game/memoryGameLogo';
import LogicGameLogo from './game-type/logic-game/logicGameLogo';
import AlertRang from './game-type/alertFail/alertRang';
import { StyleSheet, View, Text,Pressable,ImageBackground } from 'react-native';

//<AlertRang/>

export default  function MainScreen({navigation}) {
  return (
    
      
      <ImageBackground style={styles.MainPageMain} source={require('../../../../assets/img/ooo.jpg')} resizeMode="stretch" >
        <AlertRang/>
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
      backgroundColor: '#3d6089',
    }
  });