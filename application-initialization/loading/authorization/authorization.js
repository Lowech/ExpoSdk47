import * as React from 'react';
import { useState } from 'react';
import Registration from './registration';
import SingUp from './singUp';
import { StyleSheet, View,ImageBackground,Pressable} from 'react-native';
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();
export default  function Authorization({navigation,route}) {

  const [position, setPosition] = useState('center');

 function pozitionElementTop(){
    setPosition("flex-start");
 }
 function pozitionElementCenter(){
    setPosition("center");
 }
 function logindelete(){
  signOut(auth).then(() => {
    
  }).catch((error) => {
    console.log(error);
  });
 }
 //onPress={logindelete()} 
 
  const styles = StyleSheet.create({
    MainPageMain:{
      display: "flex",
      justifyContent: 'center',
      alignItems: position,
      flexDirection: 'row',
      width: "100%",
      height: "100%",
      backgroundColor: "#2f4f4f",
      
    },
    pressebleStyle:{
      
      width: "auto",
      height: "auto",

    }
  });

    return (
      <ImageBackground source={require('../../../assets/img/avtorizachia.png')} resizeMode="cover" style={styles.MainPageMain}>
        <View style={styles.pressebleStyle} >
            <SingUp   pozitionElementTop={pozitionElementTop} pozitionElementCenter={pozitionElementCenter} goToMain={navigation}/>
        </View>
        <View>
            <Registration pozitionElementTop={pozitionElementTop} pozitionElementCenter={pozitionElementCenter} goToMain={navigation} />
         </View>
      </ImageBackground>
    ); 
  }

  