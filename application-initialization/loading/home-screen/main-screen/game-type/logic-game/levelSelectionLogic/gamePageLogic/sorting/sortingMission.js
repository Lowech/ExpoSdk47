import * as React from 'react';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View,ImageBackground, Dimensions} from 'react-native';
import SortingMass from './sortingMass';

import { useSelector, useDispatch } from 'react-redux';
import { nameGameСhange,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../../../redux/counterSlice';
import {Audio} from 'expo-av';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';



export default  function SortingMission({navigation}) {

//музыка
const audioLevelStatus = useSelector(state => state.counter.audioLevel);
const sound = React.useRef(new Audio.Sound());
async function playSound() {
    try { 
      await sound.current.loadAsync(require('../../../../../../../../../assets/audio/generalGame.mp3'));
      await   sound.current.playAsync();
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
  if(audioLevelStatus === true){
    playSound()
  }else{
    if(sound.current._loaded === true){
      stopSound()
    }
  } 
},[audioLevelStatus])
//  

const dispatch = useDispatch();
//
//фокус экрана
const isFocused = useIsFocused();
//запуск таймера
const [elementState, setElementState] = useState();
//номер подуровня для появления сообщения
const numberGame = useSelector(state => state.counter.numberGame);
//Получения номера уровня
const numberLevel = useSelector(state => state.counter.numberLevel);
//высота элементов нижнего блока
const [heightElem, setHeightElem] = useState(40);
//количество элементов true
const [colElemFalse, setColElemFalse] = useState(1);

//Определяет размер экрана и тем саммым колличество элементов на экране
let widthWind =  Dimensions.get('window');
const [colBlock, setColBlock] = useState(20);
useEffect(()=>{
// назначения названия игры
  dispatch(nameGameСhange('sortingMission'));
  if(widthWind.width > 760){
     setColBlock(20);
     setHeightElem(40);
  }else{
     setColBlock(15);
     setHeightElem(30);
  }
},[widthWind]);
//
useEffect(()=>{
    
  if(isFocused === true){
    
//запуск таймера в зависимости от уровня  
  if(numberGame === 1){
      setTimeout(()=>{setElementState("start")},5000);
    }else{
      setElementState("start");
    }
  } 
//  
},[isFocused])  


    return (
      <ImageBackground source={require('../../../../../../../../../assets/img/logickSortFon.png')} resizeMode="cover" style={styles.containerImg}> 
          <SortingMass colElemTrue={numberLevel}  colBlock={colBlock} heightElem={heightElem} navigation={{navigation}}/>  
          <AlertTextMission  text={'сортировка'}/>
          <TimerStart />
          <Timer startTimer={elementState} />
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    containerImg:{
      width: '100%',
      height: '100%',
      display: "flex",
      backgroundColor: '#f56336',
      
    },
    container: {   
      position: 'absolute',
      zIndex: 0,
      display: 'flex', 
      width: "100%",
      height: "100%",
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
      MainPageMain:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        height: '85%',
        backgroundColor: 'transparent', 
      },
    elem:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 5,
      width: 230,
      height: 40,
      backgroundColor: 'blue', 
      borderRadius: 10,
      
    },
    elemItems:{
      width: 40,
      height: 30,
      borderRadius: 50,
      
    },
    Block:{
      display: 'flex',
      width: 70,
      height: 40,
      backgroundColor: 'blue', 
      left: '95%'

    }
  });