import * as React from 'react';
import { useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Pressable,ActivityIndicator} from 'react-native';
import LoginSvg from './loginSvg';
import  InputValueValidation  from "./InputValueValidation";
import audioClick from '../../../audio-components/audioClick.js'
import {userTrueСhange} from '../../../redux/counterSlice';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../firebaseConfig';
import { getDatabase, ref, set,goOffline} from "firebase/database";
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { hideRevealAuthorization,hideAuthorizationRegistration,menuCenterVisibleСhange} from '../../../redux/counterSlice';
import {useIsFocused,StackActions  } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);

export default  function SingUp(props) {

  //Данные пользователя получены
  const userTrue = useSelector(state => state.counter.userTrue); 
  //проверка статуса звука
  const audioClickStatus = useSelector(state => state.counter.audioClick);
  function audioStatus(){
    if(audioClickStatus === true){
      audioClick();
      
    }
  }
  //  
    const [activityIndicatorPosition, setActivityIndicatorPosition] = useState("relative");
    const [activityIndicatorDisplay, setActivityIndicatorDisplay] = useState("none");
    const [resetPasswordColor, setResetPasswordColor] = useState('silver');
    const [usersDoc, setUsersDoc] = useState('{}');
    const [inputId, setInputId] = useState('');
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [borderErrorEmail, setBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [borderErrorPassword, setBorderErrorPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const displayValue1 = useSelector(state => state.counter.value1);
    const dispatch = useDispatch();
    const auth = getAuth();
    
   
//обнуления кэш
const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('@timbonUp')
  } catch(e) {
    console.log(e)
  }
}  
const removeTimbon = async () => {
  try {
    await AsyncStorage.removeItem('@timbon')
  } catch(e) {
    console.log(e)
  }
}  
const removeUserValue = async () => {
  try {
    await AsyncStorage.removeItem('@userValue')
  } catch(e) {
    console.log(e)
  }
}  
//установка значений по результатом уровня
const removeValueUpdate = async () => {
  try {
    await AsyncStorage.removeItem('@userValueUpdate')
  } catch(e) {
    console.log(e)
  }
}   
const removeDateValue = async () => {
  try {
    await AsyncStorage.removeItem('@dateValue')
  } catch(e) {
    console.log(e)
  }
}  
//чтение данных пользователя
async function getUserValue() {
  try {
    const value = await AsyncStorage.getItem('@userValue');
    if(!value){
      setUsersDoc('{}');
    }else{
      setUsersDoc(value);
    }
    
  }
  catch(e) {
    console.log(e)
  } 
}
getUserValue();
//выход из аккаунта
function logindelete(){
  signOut(auth).then(() => {
    
  }).catch((error) => {
    console.log(error);
  });
 }
  function inSignUp(){
    logindelete();
    onAuthStateChanged(auth, user => {
      if (user) {
        
          const uid = user.uid;
          //console.log(uid)
        } else {
          //console.log('error')
        }
    });
      audioStatus();
      setActivityIndicatorPosition("absolute");
      setActivityIndicatorDisplay("flex");
      setInputId(""); 
      //console.log(JSON.parse(usersDoc).email != email)
    if(JSON.parse(usersDoc).email != email){
        //console.log(JSON.parse(usersDoc).email)
        removeUserValue();
        removeValue();
        removeTimbon();
        removeValueUpdate();
        removeDateValue();
        dispatch(userTrueСhange(1));
   signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        
        console.log('User signed in!');
        const user = userCredential.user;
        if(props.goToMain.getState().routeNames.includes("MainScreen")){
          dispatch(menuCenterVisibleСhange(true));
          props.goToMain.navigate('MainScreen');//переход на основную страницу
        }
        clearInput();
        setActivityIndicatorPosition("relative");
        setActivityIndicatorDisplay("none");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        errorEmailPassword(); 
        setInputId("логин или пароль"); 
        setActivityIndicatorPosition("relative");
        setActivityIndicatorDisplay("none");
      });
      }else{
        setInputId("Пользователь уже авторизован");
        setActivityIndicatorPosition("relative");
        setActivityIndicatorDisplay("none");
        //console.log(JSON.parse(usersDoc))
      }
    
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
        audioStatus();
        
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
  <Pressable style={styles.passwordRecoveryContainer} onPressIn={()=>{props.goToMain.navigate('PasswordRecovery'),audioStatus()}}>
        <Text style={styles.passwordRecoveryText} >забыли пароль?</Text>
    </Pressable> 
  </View>
  </View>
);
}