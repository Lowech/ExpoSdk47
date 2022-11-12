import * as React from 'react';
import { useState } from 'react';
import Registration from './registration';
import SingUp from './singUp';
import { StyleSheet, View,ImageBackground} from 'react-native';

export default  function Authorization({navigation,route}) {
  const [position, setPosition] = useState('center');

 function pozitionElementTop(){
  setPosition("flex-start")
 }
 function pozitionElementCenter(){
  setPosition("center")
 }

  const styles = StyleSheet.create({
    MainPageMain:{
      display: "flex",
      justifyContent: 'center',
      alignItems: position,
      flexDirection: 'row',
      width: "100%",
      height: "100%",
      backgroundColor: 'transparent',
      
    }
  });

    return (
      <ImageBackground source={require('../../../assets/img/avtorizachia.png')} resizeMode="cover" style={styles.MainPageMain}>
        <View>
            <SingUp pozitionElementTop={pozitionElementTop} pozitionElementCenter={pozitionElementCenter} goToMain={navigation}/>
        </View>
        <View>
            <Registration pozitionElementTop={pozitionElementTop} pozitionElementCenter={pozitionElementCenter} goToMain={navigation}/>
         </View>
      </ImageBackground>
    ); 
  }

  