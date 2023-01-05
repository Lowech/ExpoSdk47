import * as React from 'react';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { nameGameСhange,intermediateResultMemoryPush } from '../../../../../../../../../../redux/counterSlice';
import { StyleSheet, View,ImageBackground,Dimensions } from 'react-native';
import SvgFiguresCircle from './svg/SvgFiguresCircle';
import SvgFiguresStar from './svg/SvgFiguresStar';
import SvgFiguresRect from './svg/SvgFiguresRect';
import SvgFiguresTriangle from './svg/SvgFiguresTriangle';
import SvgFiguresRectangle from './svg/SvgFiguresRectangle';
import SvgFiguresCylinder from './svg/SvgFiguresCylinder';
import SvgFiguresRhombus from './svg/SvgFiguresRhombus';
import SvgFiguresPrism from './svg/SvgFiguresPrism';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';

//массив с фигурами
let massElementColor= [<SvgFiguresPrism/>,<SvgFiguresRhombus/>,<SvgFiguresRect/>,<SvgFiguresCircle/>,<SvgFiguresStar/>,<SvgFiguresTriangle/>,<SvgFiguresRectangle/>,<SvgFiguresCylinder/>];
//начальные значения
let massNull=[];
let massElementNew=[]; 

export default  function Figures({navigation}) {

const isFocused = useIsFocused();
const dispatch = useDispatch();
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
const [colBlock, setColBlock] = useState(31);
useEffect(()=>{
//назначения названия игры  
  dispatch(nameGameСhange('figures'))  
//
  if(widthWind.width > 760){
    return setColBlock( 31);
  }else{
   return  setColBlock( 23);
  }
},[widthWind]);
//   

//наполнения массива значениями 
  useEffect(()=>{
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
                {massElementColor[Math.floor(Math.random().toString()*massElementColor.length)]}
             
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
//формирования массива и добавления значения в intermediateResultMemory  
  useEffect(()=>{
//сброс массива перед фармированием нового
    massElementNew=[];
//
    if(isTrueFalse === true && isFocused === true){
      
        massNull.forEach(element => {
          
      if(element.props.children){
        
        massElementNew.push(String(element.props.children.type)) 
        
      }
    });
    
    dispatch(intermediateResultMemoryPush(massElementNew));  
  }
  },[isTrueFalse])
  
//переход на следующую страницу BallsDecision после формирования intermediateResultMemory и окончания таймера
useEffect(()=>{
    
  if(isTrueFalse === true && intermediateResultMemory !== '' && isFocused === true){
    
    navigation.navigate('FiguresDecision')
  }
},[intermediateResultMemory])
//  
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/figuresFon.png')} resizeMode="cover" style={styles.containerImg}> 
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
    elem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 70,
      margin: 10,
      
    }
  });