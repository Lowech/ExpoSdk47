import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,Button , Animated, Pressable,ImageBackground,Easing } from 'react-native';
import {useState,useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import Timer from '../../../../timer';
import TimerStart from '../../../../timerStart';
import audioClick from '../../../../../../../../../../audio-components/audioClick.js';
import {useIsFocused } from '@react-navigation/native';
import Scoring from '../../../../scoring';

import SvgFiguresCircle from './svg/SvgFiguresCircle';
import SvgFiguresStar from './svg/SvgFiguresStar';
import SvgFiguresRect from './svg/SvgFiguresRect';
import SvgFiguresTriangle from './svg/SvgFiguresTriangle';
import SvgFiguresRectangle from './svg/SvgFiguresRectangle';
import SvgFiguresCylinder from './svg/SvgFiguresCylinder';
import SvgFiguresRhombus from './svg/SvgFiguresRhombus';
import SvgFiguresPrism from './svg/SvgFiguresPrism';

//массив элементов уровня
let massElementFigures= [<SvgFiguresPrism/>,<SvgFiguresRhombus/>,<SvgFiguresRect/>,<SvgFiguresCircle/>,<SvgFiguresStar/>,<SvgFiguresTriangle/>,<SvgFiguresRectangle/>,<SvgFiguresCylinder/>];
//массив выбранных элементов пользователем
let clickElementFiguresMass= [];

export default  function FiguresDecision({navigation}) {

  const isFocused = useIsFocused();
//номер подуровня для появления таймера
  const numberGame = useSelector(state => state.counter.numberGame);  
//промежуточные данные уровня
  const intermediateResultMemory = useSelector(state => state.counter.intermediateResultMemory);
//запуск таймера
  const [elementState, setElementState] = useState("stop");
//начальный массив значений результата уровня
  const [selectionResult, setSelectionResult] = useState([]);  
  const isTrueFalse = useSelector(state => state.counter.timeGameEnd)
//количество выбранных элементов пользователем    
    const [numberPrism, setNumberPrism] = useState(0);
    const [numberRhombus, setNumberRhombus] = useState(0);
    const [numberRect, setNumberRect] = useState(0);
    const [numberCircle, setNumberCircle] = useState(0);
    const [numberStar, setNumberStar] = useState(0);
    const [numberTriangle, setNumberTriangle] = useState(0);
    const [numberRectangle, setNumberRectangle] = useState(0);
    const [numberCylinder, setNumberCylinder] = useState(0);
//анимация кликов цифр  
    const animateNumberRed = useRef(new Animated.Value(0)).current;
    const animateNumberBlue = useRef(new Animated.Value(0)).current;
    const animateNumberYellow = useRef(new Animated.Value(0)).current;
    const animateNumberGreen = useRef(new Animated.Value(0)).current;
    const animateNumberGrey = useRef(new Animated.Value(0)).current;
    const animateNumberBlack = useRef(new Animated.Value(0)).current;
    const animateNumberWhite = useRef(new Animated.Value(0)).current;
    const animateNumberBrown = useRef(new Animated.Value(0)).current;
//анимация    
    const interpolateHiddenRed =  animateNumberRed.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenBlue =  animateNumberBlue.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenYellow =  animateNumberYellow.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenGreen =  animateNumberGreen.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenGrey =  animateNumberGrey.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenBlack =  animateNumberBlack.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenWhite =  animateNumberWhite.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
    const interpolateHiddenBrown =  animateNumberBrown.interpolate({
      inputRange: [0, 100],
      outputRange: ['60%', '0%']
    });
//функции на нажатия пользователя    
const VisibleNumberPlusRed = () => {
  audioClick();
  animateNumberRed.resetAnimation();
 Animated.timing( animateNumberRed,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[0].type))
  setNumberPrism(numberPrism+1)
}
useEffect(()=>{
  numberPrism
},[numberPrism])
const VisibleNumberMinusRed = () => {
  audioClick();
  if(numberPrism==0)return;
  animateNumberRed.resetAnimation();
 Animated.timing( animateNumberRed,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[0].type))
  setNumberPrism(numberPrism-1)
}

const VisibleNumberPlusBlue = () => {
  audioClick();
  animateNumberBlue.resetAnimation();
 Animated.timing( animateNumberBlue,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[1].type))
  setNumberRhombus(numberRhombus+1)
}
const VisibleNumberMinusBlue = () => {
  audioClick();
  if(numberRhombus==0)return;
  animateNumberBlue.resetAnimation();
 Animated.timing( animateNumberBlue,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[1].type))
  setNumberRhombus(numberRhombus-1)
}

const VisibleNumberPlusYellow = () => {
  audioClick();
  animateNumberYellow.resetAnimation();
 Animated.timing( animateNumberYellow,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[2].type))
  setNumberRect(numberRect+1)
}
const VisibleNumberMinusYellow = () => {
  audioClick();
  if(numberRect==0)return;
  animateNumberYellow.resetAnimation();
 Animated.timing( animateNumberYellow,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[2].type))
  setNumberRect(numberRect-1)
}

const VisibleNumberPlusGreen = () => {
  audioClick();
  animateNumberGreen.resetAnimation();
 Animated.timing( animateNumberGreen,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[3].type))
  setNumberCircle(numberCircle+1)
}
const VisibleNumberMinusGreen = () => {
  audioClick();
  if(numberCircle==0)return;
  animateNumberGreen.resetAnimation();
 Animated.timing( animateNumberGreen,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[3].type))
  setNumberCircle(numberCircle-1)
}

const VisibleNumberPlusGrey = () => {
  audioClick();
  animateNumberGrey.resetAnimation();
 Animated.timing( animateNumberGrey,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[4].type))
  setNumberStar(numberStar+1)
}
const VisibleNumberMinusGrey = () => {
  audioClick();
  if(numberStar==0)return;
  animateNumberGrey.resetAnimation();
 Animated.timing( animateNumberGrey,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[4].type))
  setNumberStar(numberStar-1)
}

const VisibleNumberPlusBlack = () => {
  audioClick();
  animateNumberBlack.resetAnimation();
 Animated.timing( animateNumberBlack,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[5].type))
  setNumberTriangle(numberTriangle+1)
}
const VisibleNumberMinusBlack = () => {
  audioClick();
  if(numberTriangle==0)return;
  animateNumberBlack.resetAnimation();
 Animated.timing( animateNumberBlack,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[5].type))
  setNumberTriangle(numberTriangle-1)
}

const VisibleNumberPlusWhite = () => {
  audioClick();
  animateNumberWhite.resetAnimation();
 Animated.timing( animateNumberWhite,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[6].type))
  setNumberRectangle(numberRectangle+1)
}
const VisibleNumberMinusWhite = () => {
  audioClick();
  if(numberRectangle==0)return;
  animateNumberWhite.resetAnimation();
 Animated.timing( animateNumberWhite,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[6].type))
  setNumberRectangle(numberRectangle-1)
}
const VisibleNumberPlusBrown = () => {
  audioClick();
  animateNumberBrown.resetAnimation();
 Animated.timing( animateNumberBrown,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.push(String(massElementFigures[7].type))
  setNumberCylinder(numberCylinder+1)
}
const VisibleNumberMinusBrown = () => {
  audioClick();
  if(numberCylinder==0)return;
  animateNumberBrown.resetAnimation();
 Animated.timing( animateNumberBrown,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementFiguresMass.pop(String(massElementFigures[7].type))
  setNumberCylinder(numberCylinder-1)
}
//объединение массива с значениями предыдущего экрана и выбранных польвателем
useEffect(()=>{

  setSelectionResult([intermediateResultMemory,clickElementFiguresMass]);

},[numberPrism,numberRhombus,numberRect,numberCircle,numberStar,numberTriangle,numberRectangle,numberCylinder])
//
//сброс значений назначения начальных значений
useEffect(()=>{
  
if(isFocused === true){
//запуск таймера при фокусе экрана и при первой игре
  if(numberGame === 1){
    setTimeout(()=>{setElementState("start")},5000);
  }else{
    setElementState("start");
} 
//выставления начально пустого массива
clickElementFiguresMass= [];
//обновления состояния в массив для результатов
  setSelectionResult([intermediateResultMemory,['false']]);
}

},[isFocused])
//
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/figuresFon.png')} resizeMode="cover" style={styles.containerImg}> 
        <Scoring selectionResult={selectionResult} navig={navigation}/>
        <Timer startTimer={elementState}/>
        <TimerStart />
        <AlertTextMission text={'figures'}/>
        <ScrollView style={styles.ScrollView} persistentScrollbar={true}>
        
         <View  style={styles.MainPageMain}>
           <View style={styles.containerItems} >
           
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenRed}]}>{String(numberPrism)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresPrism style={[styles.svgStyle, ]}/>
                <Pressable
                  onPress={()=> VisibleNumberPlusRed()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusRed()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View>
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBlue}]}>{String(numberRhombus)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresRhombus/>
                <Pressable
                  onPress={()=> VisibleNumberPlusBlue()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} >+</Text>
                </Pressable>
                <Pressable
                  onPress={()=>VisibleNumberMinusBlue()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenYellow}]}>{String(numberRect)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresRect/>
                <Pressable
                  onPress={()=> VisibleNumberPlusYellow()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusYellow()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenGreen}]}>{String(numberCircle)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresCircle/>
                <Pressable
                  onPress={()=> VisibleNumberPlusGreen()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusGreen()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenGrey}]}>{String(numberStar)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresStar/>
                <Pressable
                  onPress={()=> VisibleNumberPlusGrey()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusGrey()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBlack}]}>{String(numberTriangle)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresTriangle/>
                <Pressable
                  onPress={()=> VisibleNumberPlusBlack()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusBlack()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenWhite}]}>{String(numberRectangle)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresRectangle/>
                <Pressable
                  onPress={()=> VisibleNumberPlusWhite()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusWhite()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBrown}]}>{String(numberCylinder)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
              <SvgFiguresCylinder/>
                <Pressable
                  onPress={()=> VisibleNumberPlusBrown()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusBrown()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? 'transparent'
                      : "rgba(255, 255, 255, 0.3)"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View>  
          </View>
       </ScrollView>
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
    MainPageMain:{
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent', 
      
    },
    ScrollView:{
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent', 
    },
    containerItems: { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 160,
        height: 150,
        margin: 10,
        
      },
    containerElemItems:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 93,
      height: 93,
      borderRadius: 50,
       
    },
    elemItemsPlus:{
      width: 90,
      height: 45,
      textAlign: "center",
      textAlignVertical: "center",
      includeFontPadding: false,
      fontSize: 40,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      color: 'white',
      textShadowRadius: 2,
      textShadowColor: 'black',
      textShadowOffset: { width: 0.5, height: 0.5},
      position: "absolute",
      top: 2
    },
    elemItemMinus:{
        width: 90,
        height: 45,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        textAlign: "center",
        textAlignVertical: "center",
        lineHeight: 55,
        fontSize: 60,
        color: 'white',
        textShadowRadius: 2,
        textShadowColor: 'black',
        textShadowOffset: { width: 0.5, height: 0.5 },
        position: "absolute",
        bottom: 2
      },
    elemItemSumm:{
        width: 40,
        height: 65, 
        color: '#7B68EE',
        textAlign: "center",
        textAlignVertical: "top",
        fontWeight: "700",
        fontSize: 40,
        textShadowRadius: 1,
        textShadowColor: 'white',
        textShadowOffset: { width: 0.5, height: 0.5 },
        
      }
  });