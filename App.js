import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,  View, Dimensions,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './application-initialization/loading/Loading';
import WaitingDownload from './application-initialization/WaitingDownload';

import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarHidden } from "expo-status-bar";
import {getFirestore,updateDoc,doc,collection,onSnapshot,getDocs } from "firebase/firestore"; 
import { getDatabase, ref, set,onValue,get,child,update, off,onDisconnect,disconnect,goOffline,goOnline } from "firebase/database";
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import  {firebaseConfig}  from './firebaseConfig';
import { stringify } from 'uuid';
 
NavigationBar.setPositionAsync("absolute");
NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("inset-swipe");
NavigationBar.setBackgroundColorAsync("#00000080"); // `rgba(0,0,0,0.5)`
setStatusBarHidden(true, "none");

const firebase = initializeApp(firebaseConfig);
  const db = getDatabase(firebase);
  const dbRef = ref(db);
  const auth = getAuth();
  const dbF = getFirestore();
  const collectionUsers = collection(dbF, "users");

export default  function App() {
 
 // console.log(firebase.database().goOffline() )
  
  const [rezult, setRezult] = useState(); 
  const [timbonSet, setTimbonSet] = useState(null);
  const [usersDoc, setUsersDoc] = useState(null);
  const [userValueUp, setUserValueUp] = useState(null);
  
//получения ключа пользователя для идентификации


useEffect(()=>{
  
  onAuthStateChanged(auth, user => {
    //console.log(user)
    if (user) {
      const uid = user.uid;
     
      getUser();
      getStateUser();
      setRezult(uid);
//входим в базу реалВремени  
      goOnline(db);
      
      //setTimeout(()=>{disconnect(database);;console.log(database);},5000)
      
    
      /*const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);
     onValue(starCountRef, (snapshot) => {
    let data = Object(snapshot.val());
  //
  
  //начисление балов каждые 4 часа  
    function timenew(){
       
      setTimeout(()=>{
        let now = new Date();
        switch (now.getHours()+":"+now.getMinutes()+":"+now.getSeconds() ) {
          case "0:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            console.log(now.getMinutes() );
            break;
          case "4:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            break;
          case "8:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            break;
          case "12:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            break;
          case "16:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            break;
          case "20:0:0":
            update(starCountRef, {timbon: data.timbon + 1});
            break;
        }
        timenew();
      },1000)
    }
    timenew(); 
   });*/
   //setDisplayOn('none')
    } else {
      
      //setDisplayOn('none')
    }
  }); 
},[])
//получения данных timbon из базы
async function getStateUser(){
  
  await get(child(ref(db),`users/${auth.currentUser.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const getTimbon = JSON.stringify(snapshot.val());

    if(getTimbon !== null){
      
      setStringValue(getTimbon);
      getTimbonUp();
      setTimbonSet(getTimbon);
      
    }
   }
  });
}
// получения данных user из базы
async function getUser(){
  //console.log(rezult)
  let massElemBd=[];

      const querySnapshotoo = await getDocs(collectionUsers);
  
    querySnapshotoo.forEach((doc) => {
      let  userData = doc.data()
      
      massElemBd.unshift({
        "name": userData.name,
        "victory": userData.victory,
        "numberGames": userData.numberGames,
        "remembering": userData.remembering,
        "smartest": userData.smartest
      });
    });  
  setUsersValues(JSON.stringify(massElemBd));
  onSnapshot(doc(dbF, "users", auth.currentUser.uid),  (doc) => {
    const geUserValue = JSON.stringify(doc.data())
    //console.log(geUserValue + " ;")
      setUserValue(geUserValue);
      getUserValue(); 
//выходим из базы реалвремени      
      setTimeout(()=>{goOffline(db);},5000)
 });
    
}
//
//обновления данных timbon в базе
async function setStateUser(e){
  if(e !== undefined && e !== 0 && e !== null  && rezult !== null && rezult !== undefined){
    await update(ref(db, `users/${auth.currentUser.uid}`), {timbon:  e});
  }
}
//обновления данных Users в базе
async function updateUsersDoc(u){
  
  console.log(u + '11111111')
   
  
  if(u !== null && userValueUp !== null){
    setUsersDoc(userValueUp)
    if(JSON.parse(userValueUp).name === JSON.parse(u).name){
      //console.log(u + 'update')
      //console.log(userValueUp + 'update1')
      if(Number(JSON.parse(userValueUp).logickWordPart) != 0){
        await  updateDoc(doc(dbF, "users", auth.currentUser.uid), {
          logickWordPart: Number(JSON.parse(userValueUp).logickWordPart),
        });  
      }
      if(Number(JSON.parse(userValueUp).logickSortingPart) != 0){
        await  updateDoc(doc(dbF, "users", auth.currentUser.uid), {
          logickSortingPart: Number(JSON.parse(userValueUp).logickSortingPart), 
        });  
      }
      if(Number(JSON.parse(userValueUp).memoryBallsPart) != 0){
        await  updateDoc(doc(dbF, "users", auth.currentUser.uid), {
          memoryBallsPart: Number(JSON.parse(userValueUp).memoryBallsPart), 
        });  
      }
      if(Number(JSON.parse(userValueUp).memoryFiguresPart) != 0){
        await  updateDoc(doc(dbF, "users", auth.currentUser.uid), {
          memoryFiguresPart: Number(JSON.parse(userValueUp).memoryFiguresPart), 
        });  
      }
      await  updateDoc(doc(dbF, "users", auth.currentUser.uid), {
        numberGames: Number(JSON.parse(userValueUp).numberGames),
        victory: Number(JSON.parse(userValueUp).victory),
        remembering: Number(JSON.parse(userValueUp).remembering),
        smartest: Number(JSON.parse(userValueUp).smartest),
      }); 
    }
  }else{
    setUsersDoc(u)
  }
}  
useEffect(()=>{
  getUserValueUpdate();
  if((rezult !== null && rezult !== undefined)){
    getUserValue();
    const connectedRef = ref(db, ".info/connected");
    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        console.log("connected");
        //goOffline(db);
      } else {
        console.log("not connected");
        //goOnline(db);
      }
      
    });
    getStateUser();
    //console.log(rezult)
  } 
},[usersDoc,timbonSet])
useEffect(()=>{
  
},[usersDoc,timbonSet])

//
//обновления данных пользователя
//установка значений в кэш
const setStringValue = async (t) => {
  try {
    await AsyncStorage.setItem('@timbon', t)
  } catch(e) {
    console.log(e)
  }
}  
const setUserValue = async (u) => {
  try {
    //console.log(u + "55")
    await AsyncStorage.setItem('@userValue', u)
  } catch(e) {
    console.log(e)
  }
} 
const setUsersValues = async (us) => {
  try {
    //console.log(us)
    await AsyncStorage.setItem('@usersValues', us)
  } catch(e) {
    console.log(e)
  }
}  
//
// чтение данных из кэша
const getTimbonUp = async () => {
  try {
    const value = await AsyncStorage.getItem('@timbonUp');
    setStateUser(Number(value))
  } catch(e) {
    console.log(e)
  }  
}
async function getUserValue() {
  try {
    const value = await AsyncStorage.getItem('@userValue');
    updateUsersDoc(value);
  }
  catch(e) {
    console.log(e)
  } 
}
async function getUserValueUpdate() {
  try {
    const value = await AsyncStorage.getItem('@userValueUpdate');
    
    setUserValueUp(value);
  }
  catch(e) {
    console.log(e)
  } 
}
//
 
const styles = StyleSheet.create({
  MainPage:{
    height: '100%',
    width: '100%',
    
  }
});

  return (
    <Provider store={store}>
      <NavigationContainer >   
        
          <View style={styles.MainPage}>
            <WaitingDownload />
            <Loading rezult={rezult} userTrue = {timbonSet}/>
       
            <StatusBar  backgroundColor="transparent" hidden={true}/> 
          </View>  
      </NavigationContainer> 
    </Provider>
  ); 
}
