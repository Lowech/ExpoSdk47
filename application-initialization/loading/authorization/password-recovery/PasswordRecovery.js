import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,ImageBackground} from 'react-native';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../firebaseConfig';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

import  InputValueValidation  from "../InputValueValidation";

  initializeApp(firebaseConfig);
  
  export default  function PasswordRecovery({navigation}) {
    const auth = getAuth();
    const [email, onChangeEmail] = React.useState("");
    const [inputId, setInputId] = useState('');
    const [alignItemsFocus, setAlignItemsFocus] = useState('center');
    const [borderErrorEmail, setBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
   
    function resetPassword(){
      
     sendPasswordResetEmail(auth, email)
      .then(() => {
        setInputId('email правильный');
        setBorderErrorEmail({borderBottomColor: 'green'}) 
        setTimeout(()=>navigation.goBack(),5000);
        
      })
      .catch((error) => {
        setInputId('email неправильный');
        setBorderErrorEmail({borderBottomColor: 'red'})  
      });
      
    }
    useEffect(()=>{
      setInputId('');
    },
       [inputId],
    );

   function focusInput(){
    setAlignItemsFocus("flex-start")
   }
    function blurInput(){
      setAlignItemsFocus("center")
    }
    
  const styles = StyleSheet.create({
    MainPageMain:{
      alignItems: alignItemsFocus,
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#2f4f4f',
    },
    ElementLogin:{
      width: 300,
      height: 100,
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      borderRadius:  5 ,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      borderLeftWidth: 0.3,
      borderLeftColor: "rgba(255, 255, 255,0.3)",
      borderTopWidth: 0.3,
      borderTopColor: "rgba(255, 255, 255,0.3)",
      borderRightWidth: 0.3,
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomWidth: 0.3,
      borderBottomColor: "rgba(0, 0, 0,0.3)", 
      marginTop: 20
    },
    input:{
      fontSize: 20,
      color: 'white',
      width: 280,
      backgroundColor: 'rgba(128, 128, 128, 0.1)',  
      borderBottomWidth: 1,
      borderStyle: 'solid',
    },
    containerButton:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      width: 280,
      height: 30,
      backgroundColor: '#008080',
      borderLeftWidth: 0.3,
      borderLeftColor: "rgba(255, 255, 255,0.3)",
      borderTopWidth: 0.3,
      borderTopColor: "rgba(255, 255, 255,0.3)",
      borderRightWidth: 0.3,
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomWidth: 0.3,
      borderBottomColor: "rgba(0, 0, 0,0.3)", 
    },
    buttonText:{
      color: 'white',
      textAlign: 'center',
      textTransform: 'uppercase',
      textShadowColor: 'black',
      textShadowRadius: 8,
      textShadowOffset:  { width: 1, height: 1 },
    }
  });
  
return (
  <ImageBackground source={require('../../../../assets/img/avtorizachia.png')} resizeMode="cover" style={styles.MainPageMain}>
    <InputValueValidation target={inputId}/>
    <View style={styles.ElementLogin} >
     <TextInput
       style={[styles.input, borderErrorEmail]}
       onChangeText={onChangeEmail}
       value={email}
       keyboardType="email-address"
       placeholder="email"
       textAlign='center'
       disableFullscreenUI={true}
       onFocus={focusInput}
       onBlur={blurInput}/>
  <View>
    <TouchableOpacity style={styles.containerButton} onPress={resetPassword}>
      <Text style={styles.buttonText}>ОТПРАВИТЬ ПИСМЬМО</Text>
    </TouchableOpacity>
  </View>
    </View>
  </ImageBackground>
);
}