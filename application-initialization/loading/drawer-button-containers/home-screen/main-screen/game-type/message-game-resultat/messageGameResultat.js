import { useState,useEffect,useRef } from 'react';
import { StyleSheet, Text, View, Pressable,ImageBackground,Animated } from 'react-native';
import {useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { timeGameFalse,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../redux/counterSlice';
import {getFirestore , updateDoc , doc,getDocs,onSnapshot } from "firebase/firestore"; 
import  {firebaseConfig}  from '../../../../../../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

import NextLevelSvg  from './nextLevelSvg';
import LoginSvg  from '../../../../../authorization/loginSvg';
import ButtonRefrechSvg  from './buttonRefrechSvg';
import audioClick from '../../../../../../../audio-components/audioClick.js';

initializeApp(firebaseConfig);
  const auth = getAuth();
  const dbF = getFirestore();
  
export default function MessageGameResultat({navigation}) {
 
  const docUsers = doc(dbF, "users", auth.currentUser.uid);
  const [hiddenVisible, setHiddenVisible] = useState('flex');
  const rezultGame = useSelector(state => state.counter.stateRezultat);
  const nGame = useSelector(state => state.counter.nameGame)
  const [textRezult, setTextRezult] = useState();
  const [textColorRezult, setTextColorRezult] = useState("#6495ED");
  const [usersVictory, setUsersVictory] = useState( ()=>{
    onSnapshot(doc(dbF, "users", auth.currentUser.uid),  (doc) => {
     
       setUsersVictory(doc.data());
    });
  }
);

  useEffect(()=>{
    
      if(rezultGame === 'true' ){
        setTextRezult('Победа');
        setTextColorRezult("#00FA9A"); 
        setHiddenVisible('flex'); 
      }
      else{
        setTextRezult('Проигрыш');
        setTextColorRezult("#FF0000");
        setHiddenVisible("none");
      }
  
  },[])
  /*const sound = require('../../../../../../../assets/audio/bulkBit.wav');
  async function playSound() {
    await  Audio.Sound.createAsync(
      sound,
      { shouldPlay: true }
    ).then((res)=>{
      res.sound.setOnPlaybackStatusUpdate((status)=>{
        if(!status.didJustFinish) return;
        console.log(status);
        res.sound.unloadAsync()
        .catch((error)=>{
          console.log(error)
        });
      });
    })
    .catch((error)=>{
      console.log(error)
    });
  }*/
  
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isFocused === false){
      dispatch(timeGameFalse());
      async function updateUsersDoc(){
   
        if(rezultGame === 'true' ){
        
          await  updateDoc(docUsers, {
            numberGames: usersVictory.numberGames + 1,
            remembering: usersVictory.remembering + 1,
            victory: usersVictory.victory + 1,
            
          }); 
        }
        else{
          await updateDoc(docUsers, {
            numberGames: usersVictory.numberGames + 1,
            remembering: usersVictory.remembering - 1,
            victory: usersVictory.victory - 1,
            
          });
        }
      }
    updateUsersDoc();
    }
    //console.log(usersVictory)
  },[isFocused])

    const styles = StyleSheet.create({
      menuButtonСontainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#6495ED',
      },
      MessageResultat:{
        fontSize: 40,
        fontWeight: 'bold',
        color: textColorRezult,
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 3 },
        width: "auto",
        height: "auto",
        marginBottom: 100,
      },
      containAnimate:{
        width: "auto",
        height: "auto",
      },
      containerOption:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 350,
        height: 80,
      },
      containerOptionItem:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
      },
      containerOptionText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FAEBD7',
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 1 },
        width: "auto",
        height: "auto",
      },
      menuButton:{ 
        backgroundColor: '#7B68EE',
        width: 80,
        height: 40,
        borderLeftWidth: 1,
        borderLeftColor: "rgba(255, 255, 255,0.5)",
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255,0.5)",
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.5)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.5)",
      }
    });

  function goHome(){
    audioClick();
    navigation.navigate('MainScreen');
    dispatch(numberLevelChangeMinus());
  }

  function goGameReturn(){
    audioClick();
    if(nGame === 'ball'){
      navigation.navigate('Balls');
    }
    if(nGame === 'figures'){
      navigation.navigate('Figures');
    }
  }
  function goNextLevel(){
    audioClick();
    if(nGame === 'ball'){
      navigation.navigate('Balls');
    }
    if(nGame === 'figures'){
      navigation.navigate('Figures');
    }  
    dispatch(numberLevelChangePlus());
  }

    return (
      <ImageBackground source={require('../../../../../../..//assets/img/alertRezultat.png')} resizeMode="cover" style={styles.menuButtonСontainer}>
        <Animated.View  style={[styles.containAnimate]}>
          <Text style={styles.MessageResultat}>{textRezult}</Text>
        </Animated.View>
          <View style={styles.containerOption}>
            <View style={styles.containerOptionItem}>
            
              <Pressable
                onPress={goHome}
                  style={({ pressed }) => [
                  { padding: pressed ? 5 : 0 },
                  styles.menuButton,{paddingLeft: 8}]}>
             
                <LoginSvg/>   

              </Pressable>
            </View>
            <View style={styles.containerOptionItem}>
       
              <Pressable
                onPress={goGameReturn}
                  style={({ pressed }) => [
                  {padding: pressed
                  ? 5
                  : 0
                  },styles.menuButton]}>
     
                <ButtonRefrechSvg/>

              </Pressable>
            </View>
            <View style={[styles.containerOptionItem,{display:hiddenVisible}]}>
            
              <Pressable
                onPress={ goNextLevel}
                  style={({ pressed }) => [
                  {padding: pressed ? 5 : 0},
                  styles.menuButton]}>
         
                <NextLevelSvg/>   

              </Pressable>
            </View>
          </View>
      </ImageBackground>
    );
  }
 