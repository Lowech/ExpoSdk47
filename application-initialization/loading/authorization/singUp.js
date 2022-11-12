import * as React from 'react';
import { useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Pressable,ActivityIndicator} from 'react-native';

import LoginSvg from './loginSvg';
import  InputValueValidation  from "./InputValueValidation";

import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../firebaseConfig';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { hideRevealAuthorization,hideAuthorizationRegistration} from '../../../redux/counterSlice';

  initializeApp(firebaseConfig);
  export default  function SingUp(props) {

    const [activityIndicatorPosition, setActivityIndicatorPosition] = useState("relative");
    const [activityIndicatorDisplay, setActivityIndicatorDisplay] = useState("none");
    const [resetPasswordColor, setResetPasswordColor] = useState('silver');
    const [inputId, setInputId] = useState('');
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [borderErrorEmail, setBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [borderErrorPassword, setBorderErrorPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const displayValue1 = useSelector(state => state.counter.value1);
    const dispatch = useDispatch();
    const auth = getAuth();
    
  function inSignUp(){
      setActivityIndicatorPosition("absolute");
      setActivityIndicatorDisplay("flex");
      setInputId(""); 
    onAuthStateChanged(auth, user => {
      if (user) {
          
          const uid = user.uid;
          //console.log(uid)
        } else {
          //console.log('error')
        }
    });
   signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        console.log('User account created & signed in!');
        const user = userCredential.user;
        props.goToMain.navigate("HomeScreen");//переход на основную страницу
        clearInput();
        setActivityIndicatorPosition("relative");
        setActivityIndicatorDisplay("none");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        errorEmailPassword(); 
        setInputId("логин или пароль"); 
        setActivityIndicatorPosition("relative");
        setActivityIndicatorDisplay("none");
      });
     
    }
    
    function errorEmailPassword(){
      
        setBorderErrorPassword({borderBottomColor: 'red'})
        setBorderErrorEmail({borderBottomColor: 'red'}) 
    }
    
  function clearInput(){
    onChangeEmail('');
    onChangePassword('');
    setBorderErrorPassword({borderBottomColor: 'rgb(128, 128, 128)'})
    setBorderErrorEmail({borderBottomColor: 'rgb(128, 128, 128)'}) 
    dispatch(hideAuthorizationRegistration());
  }
  function LoginVisible(){
      if(displayValue1==='none'){
        dispatch(hideRevealAuthorization());
        
      }
    }
    
  const styles = StyleSheet.create({
    MainPageMain:{
      display: "flex",
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 180,
      zIndex: 2,
      
    },
    ElementLoginContainer:{
      width: 200,
      height: 160,
      display: displayValue1,
      
    },
    ElementItems:{
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      marginHorizontal: 100,
      borderRadius:  5 ,
      elevation: 20,
      shadowColor: "white",
      borderLeftWidth: 1.5,
      borderLeftColor: "rgba(0, 0, 0,0.5)",
      borderTopWidth: 1.5,
      borderTopColor: "rgba(0, 0, 0,0.5)",
      borderRightWidth: 1,
      borderRightColor: "rgba(255, 255, 255,0.3)",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255, 255, 255,0.3)", 
    },
    ElementLogin:{
      display: 'flex',
      width: 200,
      height: 130,
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      borderRadius:  5 ,
      textTransform: 'uppercase',
      borderLeftWidth: 0.3,
      borderLeftColor: "rgba(255, 255, 255,0.3)",
      borderTopWidth: 0.3,
      borderTopColor: "rgba(255, 255, 255,0.3)",
      borderRightWidth: 0.3,
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomWidth: 0.3,
      borderBottomColor: "rgba(0, 0, 0,0.3)", 
    },
    input:{
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    containerButton:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      width: 180,
      height: 30,
      marginTop: 10,
      marginHorizontal: 10,
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
      textAlign: 'center'
    },
    passwordRecoveryContainer:{
      height: 'auto',
      width: 130,
    },
    passwordRecoveryText:{
      color: resetPasswordColor,
      textAlign: 'left',
      fontSize: 15,
    },
    activityIndicator:{
      position: activityIndicatorPosition,
      display: activityIndicatorDisplay,
      zIndex: 9999,
      left: "45%",
      top: "12%",
    }
  });
  
return (
  <View style={styles.MainPageMain}>
    <InputValueValidation target={inputId}/>
      <TouchableOpacity style={styles.ElementItems} title="click" onPress={LoginVisible}>
        <LoginSvg/>
      </TouchableOpacity>
  <View style={styles.ElementLoginContainer}>
  <View style={styles.ElementLogin} >
  <ActivityIndicator style={styles.activityIndicator} size="large" color="#00FF7F" />
  <TextInput
    style={[styles.input ,borderErrorEmail]}
    onChangeText={onChangeEmail}
    value={email}
    keyboardType="email-address"
    placeholder="email"
    textAlign='center'
    onFocus={props.pozitionElementTop}
    onBlur={props.pozitionElementCenter}
    autoCorrect={false}
    disableFullscreenUI={true}/>
  <TextInput
    style={[styles.input,borderErrorPassword]}
    onChangeText={onChangePassword}
    value={password}
    placeholder="password"
    maxLength={20}
    textAlign='center'
    onFocus={props.pozitionElementTop}
    onBlur={props.pozitionElementCenter}
    autoCorrect={false}
    disableFullscreenUI={true}/>
  <View>
    <TouchableOpacity style={styles.containerButton} onPress={inSignUp}>
      <Text style={styles.buttonText}>ВХОД</Text>
    </TouchableOpacity>
  </View>  
     
  </View>
  <Pressable style={styles.passwordRecoveryContainer} onPressIn={()=>{props.goToMain.navigate('PasswordRecovery')}}>
        <Text style={styles.passwordRecoveryText} >забыли пароль?</Text>
    </Pressable> 
  </View>
  </View>
);
}