import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,  View, Dimensions,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import { Provider } from 'react-redux';

import Loading from './application-initialization/loading/Loading';
import WaitingDownload from './application-initialization/WaitingDownload';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,update } from "firebase/database";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import  {firebaseConfig}  from './firebaseConfig';
import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarHidden } from "expo-status-bar";
import { Audio } from 'expo-av';

NavigationBar.setPositionAsync("absolute");
NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("inset-swipe");
NavigationBar.setBackgroundColorAsync("#00000080"); // `rgba(0,0,0,0.5)`
setStatusBarHidden(true, "none");

const sound = new Audio.Sound();
async function playSound() {
    try {
      await sound.unloadAsync();
      //await sound.loadAsync(require('../../../../../assets/audio/foon.wav'));
      await sound.replayAsync();
      //await sound.setStatusAsync({ isLooping: true})
      await sound.setStatusAsync({ volume: 0.5 })
    } catch (error) {
      console.log(error)
    }
  }

initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  
export default  function App() {
  
  //playSound()

  const [rezult, setRezult] = useState();
  const [displayOn, setDisplayOn] = useState();
  
 onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    setRezult(uid);
    const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);
   onValue(starCountRef, (snapshot) => {
  let data = Object(snapshot.val());
  
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
  setDisplayOn('none')
 });
     
  } else {
    setDisplayOn('none')
  }
}); 

const styles = StyleSheet.create({
  MainPage:{
    height: '100%',
    width: '100%',
    
  }
});

  return (
    <Provider store={store}>
      <NavigationContainer >   
        <WaitingDownload  displayStatus={displayOn}/>
          <View style={styles.MainPage}>
       
            <Loading rezult={rezult}/>
       
            <StatusBar  backgroundColor="transparent" hidden={true}/> 
          </View>  
      </NavigationContainer> 
    </Provider>
  ); 
}
