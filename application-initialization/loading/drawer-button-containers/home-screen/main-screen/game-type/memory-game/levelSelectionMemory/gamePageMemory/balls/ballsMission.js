import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, Dimensions,ImageBackground } from 'react-native';
import SvgBalls from './svg/svgBalls';

import { useSelector, useDispatch } from 'react-redux';
import { nameGameСhange,numberLevelChangePlus,numberLevelChangeMinus,intermediateResultMemoryPush } from '../../../../../../../../../../redux/counterSlice';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';

//вынесины из компонента чтобы значения не переписывались и сохранялись между рендерами компонента
let massElementColor= ["red","blue","yellow","green","grey","black","white","brown"];
let massNull=[];
let massElementNew=[]; 
///  

export default  function Balls({navigation}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
//наполнения массива значениями 
  const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
  const intermediateResultMemory = useSelector(state => state.counter.intermediateResultMemory);
  const numberLevel = useSelector(state => state.counter.numberLevel);
//номер подуровня для появления сообщения
const numberGame = useSelector(state => state.counter.numberGame);
//запуск таймера 
  const [elementState, setElementState] = useState();
//начальные значения 
  const [massColor, setMassColor] = useState();
//Определяет размер экрана и тем саммым колличество элементов на экране  
  let widthWind =  Dimensions.get('window');
  const [colBlock, setColBlock] = useState(49);
  useEffect(()=>{
  //назначения названия игры
    dispatch(nameGameСhange('ball'))
  //
    if(widthWind.width > 760){
      return setColBlock( 49);
    }else{
     return  setColBlock( 27);
    }
  },[widthWind]);
  //  
 //наполнения массива значениями 
  useEffect(()=>{
    console.log(numberLevel)
    if(isFocused === true){
//выставления начальных значений массивов
  massNull=[];
  massElementNew=[];
//
    setMassColor(()=>{
      for (let it=0; it <= colBlock; it++) {
        
        if(it <= colBlock-numberLevel){
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}
              style={[styles.elem]}>
            </View> 
          )
        }
        else{
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}style={styles.elem}> 
                <SvgBalls key={Math.random(massElementColor.toString().length*1)}
              style={massElementColor[Math.floor(Math.random().toString()*massElementColor.length)]}/> 
            </View> 
          );
        }
      }
      return massNull.sort(() => Math.random() - 0.4); 
    })
    if(numberGame === 1){
      setTimeout(()=>{setElementState("start")},5000);
    }else{
      setElementState("start");
    }
        
    } 
  },[isFocused])
//
//формирования массива и добавления значения в intermediateResultMemory
  useEffect(()=>{
//сброс массива перед фармированием нового
    massElementNew=[];
//
    if(isTrueFalse === true && isFocused === true){
      
        massNull.forEach(element => {
          
      if(element.props.children){
        
        massElementNew.push(element.props.children.props.style)  
      } 
    });
    dispatch(intermediateResultMemoryPush(massElementNew));  
  }
  },[isTrueFalse])
//
//переход на следующую страницу BallsDecision после формирования intermediateResultMemory и окончания таймера
  useEffect(()=>{
    
    if(isTrueFalse === true && intermediateResultMemory !== '' && isFocused === true){
      
      navigation.navigate('BallsDecision');
    }
  },[intermediateResultMemory])
//
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/balls.png')} resizeMode="cover" style={styles.containerImg}> 
        <View style={styles.container}>
          <View  style={styles.MainPageMain}>
            {massColor}
          </View>
        </View>
          <AlertTextMission text={'memory'}/>
          <Timer startTimer={elementState} />
          <TimerStart />
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    containerImg:{
      width: '100%',
      height: '100%',
      display: "flex",
      backgroundColor: '#d058c4',
    },
    container: {    
      position: 'absolute',
      zIndex: 0,
      display: 'flex', 
      width: "100%",
      height: "100%",
      backgroundColor: 'transparent',
   
    },
    MainPageMain:{
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'space-around',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent', 
      
    },
    elem:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 10,
      width: 60,
      height: 60,
      borderRadius: 50,
      
    }
  });