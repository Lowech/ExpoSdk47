import * as React from 'react';
import Authorization from './authorization/authorization';
import PasswordRecovery from './authorization/password-recovery/PasswordRecovery';
import { useState, useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {userTrueСhange} from '../../redux/counterSlice';
import { StyleSheet, View} from 'react-native';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
//import DrawerButtonContainers from '../../application-initialization/loading/drawer-button-containers/DrawerButtonContainers';
import HomeScreen from '../../application-initialization/loading/home-screen/HomeScreen';
import WaitingDownload from '../WaitingDownload';
import {Audio} from 'expo-av';


const Stack = createStackNavigator();

export default  function Loading(props) {
  const [connectOne, setConnectOne] = useState();
  const dispatch = useDispatch();
//console.log(props.rezult+"???????????")
//музыка
  const audioGameStatus = useSelector(state => state.counter.audioGame);
  const audioGameState = useSelector(state => state.counter.audioGameState);
  const sound = React.useRef(new Audio.Sound());
  async function playSound() {
      try { 
        await sound.current.loadAsync(require('../../assets/audio/fonSoung.mp3'));
        await sound.current.playAsync();
        await sound.current.replayAsync();
        await sound.current.setStatusAsync({ isLooping: true})
        await sound.current.setStatusAsync({ volume: 0.5 })  
      }
      catch (error) {
      console.log(error)
      }   
  }
  async function stopSound() {
      await sound.current.stopAsync()
      await sound.current.unloadAsync();
  }
  useEffect(()=>{
    if(audioGameStatus === true && audioGameState === true){
      playSound()
    }else{
//проверка загруженна ли мелодия
      if(sound.current._loaded === true){
        stopSound()
      }
    } 
  },[audioGameStatus,audioGameState])
//  
const [displayOn, setDisplayOn] = useState();
React.useLayoutEffect(()=>{
  setTimeout(()=>{
    if(props.userTrue == null){
      setConnectOne(false);
    }else{
      setConnectOne(true);
    }
  },3000)
  
  if(props.userTrue !== null && props.userTrue !== undefined && connectOne == false){
    dispatch(userTrueСhange(props.userTrue));
    setDisplayOn('none');
  }
  console.log(connectOne)
 
},[props.userTrue,connectOne])
console.log(props.userTrue)
/*<Stack.Navigator  screenOptions={{headerShown: false}} >
        <Stack.Screen  name="Authorization" component={Authorization} initialParams = {{props}}/>   
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false,...TransitionPresets.FadeFromBottomAndroid}}/>
      </Stack.Navigator>*/
  if(props.rezult == null && connectOne == false){
    return (
    <View style={styles.MainPageMain}>
      <Stack.Navigator  screenOptions={{headerShown: false}} >
        <Stack.Screen  name="Authorization" component={Authorization} initialParams = {{'key':'props.displayStatus'}}/>   
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false,...TransitionPresets.FadeFromBottomAndroid}}/>
      </Stack.Navigator>
    </View> 
  ); 
  }
  else{
    return (
    <View style={styles.MainPageMain}>
      
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false}}/>
      </Stack.Navigator>
    </View>
    );
  }
 
  }
 
  const styles = StyleSheet.create({
    MainPageMain:{
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      
    }
  });