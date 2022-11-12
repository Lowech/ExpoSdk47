import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,ActivityIndicator  } from 'react-native';

import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
import {getFirestore , collection, setDoc,getDocs , query,doc, where, orderBy } from "firebase/firestore"; 
import { getDatabase, ref, set} from "firebase/database";
import  {firebaseConfig}  from '../../../firebaseConfig';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideAuthorizationRegistration, hidingOpeningRegistration, } from '../../../redux/counterSlice';


import RegistrationSVG from './RegistrationSVG';
import  InputValueValidation  from "./InputValueValidation";


export default  function Registration(props) {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  const dbF = getFirestore();
  const collectionUsers = collection(dbF, "users");
  const filterItemsGetFirestore = query(collectionUsers, orderBy("gender"));
  const q = query(collectionUsers, where("gender", "==", " b[3]"));
  

  // чтение данных в getDatabase
  //const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
  //onValue(starCountRef, (snapshot) => {
  //const data = Object(snapshot.val());
 
 // console.log( data.timbon);
  
//});
//обновление данных в getDatabase
//update(starCountRef, {timbon: 15})
//
  const displayValue = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
    const [inputId, setInputId] = useState('');
    const [borderErrorPassword, setBorderErrorPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [borderErrorLogin, setBorderErrorLogin] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [borderErrorEmail, setBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [borderErrorBirth, setBorderErrorBirth] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
    const [activityIndicatorPosition, setActivityIndicatorPosition] = useState("relative");
    const [activityIndicatorDisplay, setActivityIndicatorDisplay] = useState("none");
    const [birth, onChangeBirth] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [login, onChangeLogin] = useState("");
    const [men, setMen] = useState(['white','#8B4513']);
    const [women, setWomen] = useState(['rgba(0, 0, 0, 0.3)','rgba(128, 128, 128, 0.2)']);
    const [genderPerson, setGenderPerson] = useState('1');
    const objPerson = [email,login,birth,genderPerson];
    
   
// проверка логина
async function nameVerification(nickName){

  props.pozitionElementCenter();

  const allAsyncResults = []
  const querySnapshotoo = await getDocs(filterItemsGetFirestore);
 
   querySnapshotoo.forEach((doc) => {
    let  userData = Object(doc.data())
    allAsyncResults.push(userData.name)
    
  });
 
  if(!allAsyncResults.includes(nickName) && nickName.length>=3){
    setBorderErrorLogin({borderBottomColor: 'green'})
    
  }else{
    setInputId("ник");
    setBorderErrorLogin({borderBottomColor: 'red'})
    
  }
}
//  
function birthVerification(){

  props.pozitionElementCenter();

  let date = new Date();
  let number= birth.replace(/\./g, '').slice(0, 10)

    if(birth.length>=8 && 
      Number(birth.slice(0, 2))<=31 &&
       Number(birth.slice(2, 4))<=12  &&
        Number(birth.slice(4, 8))<=date.getFullYear()-6 &&
        Number(birth.slice(4, 8))>=date.getFullYear()-90)
      {
        setBorderErrorBirth({borderBottomColor: 'green'})
      }
  else{
    
    setInputId("дата рождения");
    setBorderErrorBirth({borderBottomColor: 'red'})
  } 
}  
// добавления пользователя в getFirestore
    async  function pushData(Person){
       onAuthStateChanged(auth, (user) => {
        if (user) {
         try {
           setDoc(doc(dbF, "users", auth.currentUser.uid), {
             email: Person[0],
             name: Person[1],
             birthData: Person[2],
             gender: Person[3],
             victory: 0,
             numberGames: 0,
             smartest: 0,
             remembering: 0
           });
        
          } catch (e) {
           console.error("Error adding document: ", e);
           }
        } else {
          console.error("Error not auth");
          }
      })
    }
//   
// проверка пароля
    function complianceСheckPassword(){
      props.pozitionElementCenter();
      password.split('').forEach(element => {
        
        if(  password.length>=8 &&  /[A-Za-z0-9\_\#\=\№\!\:\;\%\+\?\^\-]/g.test(element)  )
      {
        
        setBorderErrorPassword({borderBottomColor: 'green'})

      }
      else{
        
        setInputId("пароль");
        setBorderErrorPassword({borderBottomColor: 'red'})
      
      }
    }); 
    }
 //   
    function clearInput(){
      
      onChangeBirth('');
      onChangeEmail('');
      onChangePassword('');
      onChangeLogin('');
      setBorderErrorLogin({borderBottomColor: 'rgba(128, 128, 128, 0.1)'});
      setBorderErrorBirth({borderBottomColor: 'rgba(128, 128, 128, 0.1)'});
      setBorderErrorPassword({borderBottomColor: 'rgba(128, 128, 128, 0.1)'});
      dispatch(hideAuthorizationRegistration());
              
      }
    
    function Women(){
      
      if(women[0]==='rgba(0, 0, 0, 0.3)'){
        setWomen(['white','#8B4513']);
        setMen(['rgba(0, 0, 0, 0.3)','rgba(128, 128, 128, 0.2)']);
        setGenderPerson('0');
        
      }
    }
    function Men(){
      
      if(men[0]==='rgba(0, 0, 0, 0.3)'){
        setWomen(['rgba(0, 0, 0, 0.3)','rgba(128, 128, 128, 0.2)']);
        setMen(['white','#8B4513']);
        setGenderPerson('1');
        
      } 
    }
    function RegistrationVisible(){
        if(displayValue==='none'){
          dispatch(hidingOpeningRegistration());
        }   
    }
// регистрация пользователя   
    function onSignUp(){
      if(email !== "" && password !== "" && login !== "" && birth !== ""){
        setActivityIndicatorPosition("absolute");
        setActivityIndicatorDisplay("flex");
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
          
          console.log('User account created & signed in!');
          const user = userCredential.user;
          console.log(user.uid)
          
            const db = getDatabase();
            set(ref(db, 'users/' + user.uid), {
              username: login,
              timbon: 10,
            });
            pushData(objPerson);
            props.goToMain.navigate("HomeScreen");//переход на основную страницу
            clearInput();
            setActivityIndicatorPosition("relative");
            setActivityIndicatorDisplay("none");
        })
        .catch(error => {
          setInputId("почта");
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
      }
    }
//
  const styles = StyleSheet.create({
    MainPageMain:{
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 180,
      backgroundColor: 'transparent',
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
    ElementRegistration:{
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: 403,
      height: 180,
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      borderRadius:  5 ,
      display: displayValue,
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
      width: 180,
      height: 30,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      backgroundColor: 'rgba(128, 128, 128, 0.1)',
      borderBottomColor: 'rgba(128, 128, 128, 0.1)',
      borderBottomWidth: 1,
      borderStyle: 'solid',
    },
    gender:{
      marginTop: 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      
    },
    menRender:{
      width: 180,
      color: men[0],
      backgroundColor: men[1],
      paddingHorizontal: 10,
      paddingVertical: 5,
      textAlign: 'center',
    },
  womenRender:{
    width: 180,
    color: women[0],
    backgroundColor: women[1],
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center'
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
    textAlign: 'center',
  },
  activityIndicator:{
    position: activityIndicatorPosition,
    display: activityIndicatorDisplay,
    zIndex: 9999,
    left: "45%",
    top: "12%",
  }
  });
    return(
<View style={styles.MainPageMain}>
<InputValueValidation target={inputId}/>
  <View style={styles.ElementRegistration} >
    <ActivityIndicator style={styles.activityIndicator} size="large" color="#00FF7F" />
      <TextInput
        style={[styles.input,borderErrorEmail]}
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
        autoCorrect={false}
        onFocus={props.pozitionElementTop}
        onBlur={complianceСheckPassword}
        disableFullscreenUI={true}/>
      <TextInput
        style={[styles.input,borderErrorLogin]}
        onChangeText={onChangeLogin}
        value={login}
        onFocus={props.pozitionElementTop}
        onBlur={()=>nameVerification(login)}
        placeholder="login"
        maxLength={12}
        textAlign='center'
        autoCorrect={false}
        disableFullscreenUI={true}/>
      <TextInput 
        key={"k"}
        style={[styles.input,borderErrorBirth]}
        onChangeText={onChangeBirth}
        value={birth}
        placeholder="дата рождения"
        maxLength={10}
        textAlign='center'
        keyboardType="numeric"
        autoCorrect={false}
        onFocus={props.pozitionElementTop}
        onBlur={birthVerification}
        disableFullscreenUI={true}/>
  <View style={styles.gender}>
    <Text style={styles.menRender} onPress={Men}>MEN</Text>
      <Text style={styles.womenRender} onPress={Women}>WOMEN</Text>
  </View>
    <View >
      <TouchableOpacity style={styles.containerButton} onPress={onSignUp}>
        <Text style={styles.buttonText} >регистрация</Text>
      </TouchableOpacity>
    </View>
    
  </View>
    <TouchableOpacity style={styles.ElementItems} title="click" onPress={RegistrationVisible}>
      <RegistrationSVG/>
      </TouchableOpacity>
</View>
  )}