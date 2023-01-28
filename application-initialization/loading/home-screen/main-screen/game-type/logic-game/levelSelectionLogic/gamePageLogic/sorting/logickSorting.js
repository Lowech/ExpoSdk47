import React from 'react';
import { StyleSheet, View, Text,Pressable,PanResponder,Animated,Easing } from 'react-native';
import {useState,useEffect,useRef } from 'react';
import {useIsFocused } from '@react-navigation/native';
import audioClick from '../../../../../../../../../audio-components/audioClick.js';
import { useSelector, useDispatch } from 'react-redux';
import { timeGameFalse, incrementByAmount } from '../../../../../../../../../redux/counterSlice';
import Scoring from '../../../../scoring';


//массив выбранных элементов пользователем
let clickElem = [];
//
//массив окончательно выбранных элементов пользователем
let clickElemRezult = [];
//
//массив проверенных элементов
let clickElemRezultheck = [];
//
export default function LogickSorting(props) {

 //проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
}
const massElementColor= ["red","blue","#00FFFF","green","grey","black","white","brown","yellow","#FF00FF","#00FF00"];
let rezultMass = [];
let rezultBox = [];
//начальный массив значений результата уровня
const [selectionResult, setSelectionResult] = useState([]);
useEffect(()=>{
  
},[])
//
//анимация элементов верхнии блоки
const themeBackSizeZero = useRef(new Animated.Value(23)).current;
const themeBackSizeOne = useRef(new Animated.Value(23)).current;
const themeBackSizeTwo = useRef(new Animated.Value(23)).current;
const themeBackSizeThree = useRef(new Animated.Value(23)).current;
const themeBackSizeFour = useRef(new Animated.Value(23)).current;
const themeBackSizeFive = useRef(new Animated.Value(23)).current;
const themeBackSizeSix = useRef(new Animated.Value(23)).current;
const themeBackSizeSeven = useRef(new Animated.Value(23)).current;
const themeBackSizeEight = useRef(new Animated.Value(23)).current;
const themeBackSizeNine = useRef(new Animated.Value(23)).current;
//
//анимация элементов нижнии блоки
const textSizeBottomZero = useRef(new Animated.Value(15)).current;
const textSizeBottomOne = useRef(new Animated.Value(15)).current;
const textSizeBottomTwo = useRef(new Animated.Value(15)).current;
const textSizeBottomThree = useRef(new Animated.Value(15)).current;
const textSizeBottomFour = useRef(new Animated.Value(15)).current;
const textSizeBottomFive = useRef(new Animated.Value(15)).current;
const textSizeBottomSix  = useRef(new Animated.Value(15)).current;
const textSizeBottomSeven = useRef(new Animated.Value(15)).current;
const textSizeBottomEight = useRef(new Animated.Value(15)).current;
const textSizeBottomNine  = useRef(new Animated.Value(15)).current;
//элементы нижнего блока
const [coordsZero, setCoordsZero] = useState();
const [coordsOne, setCoordsOne] = useState();
const [coordsTwo, setCoordsTwo] = useState();
const [coordsThree, setCoordsThree] = useState();
const [coordsFour, setCoordsFour] = useState();
const [coordsFive, setCoordsFive] = useState();
const [coordsSix , setCoordsSix ] = useState();
const [coordsSeven, setCoordsSeven] = useState();
const [coordsEight, setCoordsEight] = useState();
const [coordsNine, setCoordsNine ] = useState();
//окончания и начала таймера
const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
//
const dispatch = useDispatch();
const isFocused = useIsFocused();

// выставление начальных значений при фокусе экрана
useEffect(()=>{
  if(isFocused === true){
      clickElem = [];
      clickElemRezult = [];
      let itemElem=0;
      if(props.sortRandomElem !== undefined){
        for(;itemElem<props.sortRandomElem.length;itemElem++){
          clickElemRezult.push(" ");
        }
      }
      setCoordsZero();
      setCoordsOne();
      setCoordsTwo();
      setCoordsThree();
      setCoordsFour();
      setCoordsFive();
      setCoordsSix();
      setCoordsSeven();
      setCoordsEight();
      setCoordsNine();
      themeBackSizeZero.setValue(23);
      themeBackSizeOne.setValue(23);
      themeBackSizeTwo.setValue(23);
      themeBackSizeThree.setValue(23);
      themeBackSizeFour.setValue(23);
      themeBackSizeFive.setValue(23);
      themeBackSizeSix.setValue(23);
      themeBackSizeSeven.setValue(23);
      themeBackSizeEight.setValue(23);
      themeBackSizeNine.setValue(23);

      //props.sortMass.sort(() => Math.random() - 0.4);
  }
  
 },[isFocused,props.sortRandomElem])
// 
//наполнения пустыми блоками массив поля
let step =0;
for(; step < props.colBlock; step++){
  rezultMass.push(<Pressable key={step} style={[styles.textBlockZero]} >
    </Pressable>)
}
//   

//наполнения элементами массива поле  
  if(props.sortRandomElem !== undefined)
    { 
        rezultMass.splice(props.sortRandomElem[0],1,
            <Pressable  key={props.sortMass[0]+massElementColor[0]} style={[styles.textBlock]} onPressIn ={(e)=>ClickElemMassZero(props.sortMass[0],e)}>
                <Animated.Text key={props.sortMass[0]+massElementColor[0]} style={[styles.text,{color:massElementColor[0],fontSize: themeBackSizeZero}]} >{props.sortMass[0]}</Animated.Text>
            </Pressable>)
        rezultMass.splice(props.sortRandomElem[1],1,
            <Pressable key={props.sortMass[1]+massElementColor[1]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassOne(props.sortMass[1])}>
              <Animated.Text key={props.sortMass[1]+massElementColor[1]} style={[styles.text,{color:massElementColor[1],fontSize:themeBackSizeOne}]} >{props.sortMass[1]}</Animated.Text>
            </Pressable>)
        rezultMass.splice(props.sortRandomElem[2],1,
          <Pressable key={props.sortMass[2]+massElementColor[2]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassTwo(props.sortMass[2])}>
            <Animated.Text key={props.sortMass[2]+massElementColor[2]} style={[styles.text,{color:massElementColor[2],fontSize:themeBackSizeTwo}]} >{props.sortMass[2]}</Animated.Text>
          </Pressable>)
          
        if(props.sortRandomElem.length > 3){
        rezultMass.splice(props.sortRandomElem[3],1,
          <Pressable key={props.sortMass[3]+massElementColor[3]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassThree(props.sortMass[3])}>
            <Animated.Text key={props.sortMass[3]+massElementColor[3]} style={[styles.text,{color:massElementColor[3],fontSize:themeBackSizeThree}]} >{props.sortMass[3]}</Animated.Text>
          </Pressable>)
        }
        if(props.sortRandomElem.length > 4){
        rezultMass.splice(props.sortRandomElem[4],1,
          <Pressable key={props.sortMass[4]+massElementColor[4]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassFour(props.sortMass[4])}>
            <Animated.Text key={props.sortMass[4]+massElementColor[4]} style={[styles.text,{color:massElementColor[4],fontSize:themeBackSizeFour}]} >{props.sortMass[4]}</Animated.Text>
          </Pressable>)
        }
        if(props.sortRandomElem.length > 5){
          rezultMass.splice(props.sortRandomElem[5],1,
            <Pressable key={props.sortMass[5]+massElementColor[5]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassFive(props.sortMass[5])}>
              <Animated.Text key={props.sortMass[5]+massElementColor[5]} style={[styles.text,{color:massElementColor[5],fontSize:themeBackSizeFive}]} >{props.sortMass[5]}</Animated.Text>
            </Pressable>)
         }
        if(props.sortRandomElem.length > 6){
        rezultMass.splice(props.sortRandomElem[6],1,
          <Pressable key={props.sortMass[6]+massElementColor[6]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassSix(props.sortMass[6])}>
            <Animated.Text key={props.sortMass[6]+massElementColor[6]} style={[styles.text,{color:massElementColor[6],fontSize:themeBackSizeSix}]} >{props.sortMass[6]}</Animated.Text>
          </Pressable>)
        }
        if(props.sortRandomElem.length > 7){
          rezultMass.splice(props.sortRandomElem[7],1,
            <Pressable key={props.sortMass[7]+massElementColor[7]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassSeven(props.sortMass[7])}>
              <Animated.Text key={props.sortMass[7]+massElementColor[7]} style={[styles.text,{color:massElementColor[7],fontSize:themeBackSizeSeven}]} >{props.sortMass[7]}</Animated.Text>
            </Pressable>)
          }
        if(props.sortRandomElem.length > 8){
          rezultMass.splice(props.sortRandomElem[8],1,
            <Pressable key={props.sortMass[8]+massElementColor[8]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassEight(props.sortMass[8])}>
              <Animated.Text key={props.sortMass[7]+massElementColor[8]} style={[styles.text,{color:massElementColor[8],fontSize:themeBackSizeSeven}]} >{props.sortMass[8]}</Animated.Text>
            </Pressable>)
          }
        if(props.sortRandomElem.length > 9){
          rezultMass.splice(props.sortRandomElem[9],1,
            <Pressable key={props.sortMass[9]+massElementColor[9]} style={[styles.textBlock]} onPressIn={()=>ClickElemMassNine(props.sortMass[9])}>
              <Animated.Text key={props.sortMass[9]+massElementColor[9]} style={[styles.text,{color:massElementColor[9],fontSize:themeBackSizeSeven}]} >{props.sortMass[9]}</Animated.Text>
            </Pressable>)
          }
///наполнения нижнего бокса элементами

        rezultBox.push(<Pressable key={props.sortRandomElem[0]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsZeroFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[0]} style={[styles.textBottomBox,{fontSize:textSizeBottomZero}]} >{coordsZero}</Animated.Text>
          </Pressable>)
      
        rezultBox.push(<Pressable key={props.sortRandomElem[1]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsOneFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[1]} style={[styles.textBottomBox,{fontSize:textSizeBottomOne}]} >{coordsOne}</Animated.Text>
          </Pressable>)
      
        rezultBox.push(<Pressable key={props.sortRandomElem[2]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsTwoFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[2]} style={[styles.textBottomBox,{fontSize:textSizeBottomTwo}]} >{coordsTwo}</Animated.Text>
          </Pressable>)
      
      if(props.sortRandomElem.length > 3){
        rezultBox.push(<Pressable key={props.sortRandomElem[3]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsThreeFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[3]} style={[styles.textBottomBox,{fontSize:textSizeBottomThree}]} >{coordsThree}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 4){
        rezultBox.push(<Pressable key={props.sortRandomElem[4]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsFourFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[4]} style={[styles.textBottomBox,{fontSize:textSizeBottomFour}]} >{coordsFour}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 5){
        rezultBox.push(<Pressable key={props.sortRandomElem[5]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsFiveFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[5]} style={[styles.textBottomBox,{fontSize:textSizeBottomFive}]} >{coordsFive}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 6){
        rezultBox.push(<Pressable key={props.sortRandomElem[6]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsSixFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[6]} style={[styles.textBottomBox,{fontSize:textSizeBottomSeven}]} >{coordsSix}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 7){
        rezultBox.push(<Pressable key={props.sortRandomElem[7]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsSevenFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[7]} style={[styles.textBottomBox,{fontSize:textSizeBottomSeven}]} >{coordsSeven}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 8){
        rezultBox.push(<Pressable key={props.sortRandomElem[8]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsEightFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[8]} style={[styles.textBottomBox,{fontSize:textSizeBottomEight}]} >{coordsEight}</Animated.Text>
          </Pressable>)
      }
      if(props.sortRandomElem.length > 9){
        rezultBox.push(<Pressable key={props.sortRandomElem[9]} style={[styles.reaultContainerBox,{height: props.heightElem}]} onPressIn = {(event)=>coordsNineFx(event.target)}>
         <Animated.Text key={props.sortRandomElem[9]} style={[styles.textBottomBox,{color:massElementColor[9],fontSize:textSizeBottomNine}]} >{coordsNine}</Animated.Text>
          </Pressable>)
      }    
  }
  
  //
//функции для нижних элементов поля
function coordsZeroFx(e){

  if(clickElem.length > 0 && coordsZero === undefined){
    
//добавления выбраного элемента пользователем в нижний блок
    setCoordsZero(clickElem[0]);  
//добавления элементов в конечный массив
  clickElemRezult.splice(0,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
    if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
        Animated.timing(themeBackSizeZero, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
        Animated.timing(themeBackSizeOne, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      }
    if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
        Animated.timing(themeBackSizeTwo, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
        Animated.timing(themeBackSizeThree, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
        Animated.timing(themeBackSizeFour, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
        Animated.timing(themeBackSizeFive, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
        Animated.timing(themeBackSizeSix, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }
    if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
        Animated.timing(themeBackSizeSeven, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
    }  
    if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
      Animated.timing(themeBackSizeEight, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  } 
  if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
    Animated.timing(themeBackSizeNine, {
      toValue: 0,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()
}             
  } 
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsZero !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomZero, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsZero); 
        setCoordsZero(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(0,1,coordsOne);
        clickElemRezult.splice(1,1,coordsZero);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsZero);
          setCoordsZero(coordsTwo); 

          clickElemRezult.splice(0,1,coordsTwo);
          clickElemRezult.splice(2,1,coordsZero);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsZero);
          setCoordsZero(coordsThree); 

          clickElemRezult.splice(0,1,coordsThree);
          clickElemRezult.splice(3,1,coordsZero);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFour):

        setCoordsFour(coordsZero);
        setCoordsZero(coordsFour); 

        clickElemRezult.splice(0,1,coordsFour);
        clickElemRezult.splice(4,1,coordsZero);

        Animated.timing(textSizeBottomFour, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFive):

        setCoordsFive(coordsZero);
        setCoordsZero(coordsFive); 

        clickElemRezult.splice(0,1,coordsFive);
        clickElemRezult.splice(5,1,coordsZero);

        Animated.timing(textSizeBottomFive, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomSix):

        setCoordsSix(coordsZero);
        setCoordsZero(coordsSix); 

        clickElemRezult.splice(0,1,coordsSix);
        clickElemRezult.splice(6,1,coordsZero);

        Animated.timing(textSizeBottomSix, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomSeven):

        setCoordsSeven(coordsZero);
        setCoordsZero(coordsSeven); 

        clickElemRezult.splice(0,1,coordsSeven);
        clickElemRezult.splice(7,1,coordsZero);

        Animated.timing(textSizeBottomSeven, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomEight):

        setCoordsEight(coordsZero);
        setCoordsZero(coordsEight); 

        clickElemRezult.splice(0,1,coordsEight);
        clickElemRezult.splice(8,1,coordsZero);

        Animated.timing(textSizeBottomEight, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomNine):

        setCoordsNine(coordsZero);
        setCoordsZero(coordsNine); 

        clickElemRezult.splice(0,1,coordsNine);
        clickElemRezult.splice(9,1,coordsZero);

        Animated.timing(textSizeBottomNine, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      
  }
}
  
  
}
function coordsOneFx(e){
 
  if(clickElem.length > 0 && coordsOne === undefined){
    setCoordsOne(clickElem[0]); 
    clickElemRezult.splice(1,1,clickElem[0]);
    clickElem.splice(0,1,) 
    if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
      Animated.timing(themeBackSizeZero, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
      Animated.timing(themeBackSizeOne, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
  if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
      Animated.timing(themeBackSizeTwo, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
      Animated.timing(themeBackSizeThree, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
      Animated.timing(themeBackSizeFour, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
      Animated.timing(themeBackSizeFive, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
      Animated.timing(themeBackSizeSix, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
      Animated.timing(themeBackSizeSeven, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
    Animated.timing(themeBackSizeEight, {
      toValue: 0,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()
}  
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
//меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsOne !== undefined){
//проверка чтобы хлемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
    Animated.timing(textSizeBottomOne, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero): 
        setCoordsOne(coordsZero); 
        setCoordsZero(coordsOne); 

        clickElemRezult.splice(0,1,coordsOne);
        clickElemRezult.splice(1,1,coordsZero);

      Animated.timing(textSizeBottomZero, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
      break;  
      case JSON.stringify(textSizeBottomTwo):
        setCoordsOne(coordsTwo); 
        setCoordsTwo(coordsOne); 

        clickElemRezult.splice(2,1,coordsOne);
        clickElemRezult.splice(1,1,coordsTwo);
        Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break; 
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsOne);
          setCoordsOne(coordsThree); 

          clickElemRezult.splice(1,1,coordsThree);
          clickElemRezult.splice(3,1,coordsOne);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFour):

      setCoordsFour(coordsOne);
      setCoordsOne(coordsFour); 

      clickElemRezult.splice(1,1,coordsFour);
      clickElemRezult.splice(4,1,coordsOne);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsFive(coordsOne);
      setCoordsOne(coordsFive); 

      clickElemRezult.splice(1,1,coordsFive);
      clickElemRezult.splice(5,1,coordsOne);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsOne);
      setCoordsOne(coordsSix); 

      clickElemRezult.splice(1,1,coordsSix);
      clickElemRezult.splice(6,1,coordsOne);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsOne);
      setCoordsOne(coordsSeven); 

      clickElemRezult.splice(1,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsOne);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsOne);
      setCoordsOne(coordsEight); 

      clickElemRezult.splice(1,1,coordsEight);
      clickElemRezult.splice(8,1,coordsOne);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsOne);
      setCoordsOne(coordsNine); 

      clickElemRezult.splice(1,1,coordsNine);
      clickElemRezult.splice(9,1,coordsOne);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
 
}
function coordsTwoFx(e){
  
  if(clickElem.length > 0 && coordsTwo === undefined){
    setCoordsTwo(clickElem[0]);
    clickElemRezult.splice(2,1,clickElem[0]);
    clickElem.splice(0,1,)
    if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
      Animated.timing(themeBackSizeZero, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
      Animated.timing(themeBackSizeOne, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
  if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
      Animated.timing(themeBackSizeTwo, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
      Animated.timing(themeBackSizeThree, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
      Animated.timing(themeBackSizeFour, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
      Animated.timing(themeBackSizeFive, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
      Animated.timing(themeBackSizeSix, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  }
  if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
      Animated.timing(themeBackSizeSeven, {
        toValue: 0,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
  } 
  if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
    Animated.timing(themeBackSizeEight, {
      toValue: 0,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()
} 
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}         
  }
//меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsTwo !== undefined){
//проверка чтобы хлемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
    Animated.timing(textSizeBottomTwo, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

      switch ('20') {
        case JSON.stringify(textSizeBottomZero):
          setCoordsTwo(coordsZero); 
          setCoordsZero(coordsTwo); 

          clickElemRezult.splice(2,1,coordsZero);
          clickElemRezult.splice(0,1,coordsTwo);

          Animated.timing(textSizeBottomZero, {
            toValue: 15,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        break;
        case JSON.stringify(textSizeBottomOne):
            setCoordsOne(coordsTwo);
            setCoordsTwo(coordsOne);

            clickElemRezult.splice(2,1,coordsOne);
            clickElemRezult.splice(1,1,coordsTwo);

            Animated.timing(textSizeBottomOne, {
              toValue: 15,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
        break;
        case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsTwo);
          setCoordsTwo(coordsThree); 

          clickElemRezult.splice(2,1,coordsThree);
          clickElemRezult.splice(3,1,coordsTwo);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFour):

      setCoordsFour(coordsTwo);
      setCoordsTwo(coordsFour); 

      clickElemRezult.splice(2,1,coordsFour);
      clickElemRezult.splice(4,1,coordsTwo);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsFive(coordsTwo);
      setCoordsTwo(coordsFive); 

      clickElemRezult.splice(2,1,coordsFive);
      clickElemRezult.splice(5,1,coordsTwo);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsTwo);
      setCoordsTwo(coordsSix); 

      clickElemRezult.splice(2,1,coordsSix);
      clickElemRezult.splice(6,1,coordsTwo);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsTwo);
      setCoordsTwo(coordsSeven); 

      clickElemRezult.splice(2,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsTwo);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsTwo);
      setCoordsTwo(coordsEight); 

      clickElemRezult.splice(2,1,coordsEight);
      clickElemRezult.splice(8,1,coordsTwo);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsTwo);
      setCoordsTwo(coordsNine); 

      clickElemRezult.splice(2,1,coordsNine);
      clickElemRezult.splice(9,1,coordsTwo);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
      }
  }
}
//функции для нижних элементов поля
function coordsThreeFx(e){
  
  if(clickElem.length > 0 && coordsThree === undefined){
    setCoordsThree(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(3,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
  Animated.timing(themeBackSizeSeven, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}          
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsThree !== undefined){
//проверка чтобы хлемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomThree, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsThree); 
        setCoordsThree(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsThree);
        clickElemRezult.splice(3,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsThree);
          setCoordsThree(coordsTwo); 

          clickElemRezult.splice(2,1,coordsThree);
          clickElemRezult.splice(3,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomZero):

          setCoordsThree(coordsZero);
          setCoordsZero(coordsThree); 

          clickElemRezult.splice(0,1,coordsThree);
          clickElemRezult.splice(3,1,coordsZero);

          Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFour):

      setCoordsFour(coordsThree);
      setCoordsThree(coordsFour); 

      clickElemRezult.splice(3,1,coordsFour);
      clickElemRezult.splice(4,1,coordsThree);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsFive(coordsThree);
      setCoordsThree(coordsFive); 

      clickElemRezult.splice(3,1,coordsFive);
      clickElemRezult.splice(5,1,coordsThree);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsThree);
      setCoordsThree(coordsSix); 

      clickElemRezult.splice(3,1,coordsSix);
      clickElemRezult.splice(6,1,coordsThree);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsThree);
      setCoordsThree(coordsSeven); 

      clickElemRezult.splice(3,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsThree);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsThree);
      setCoordsThree(coordsEight); 

      clickElemRezult.splice(3,1,coordsEight);
      clickElemRezult.splice(8,1,coordsThree);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsThree);
      setCoordsThree(coordsNine); 

      clickElemRezult.splice(3,1,coordsNine);
      clickElemRezult.splice(7,1,coordsThree);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
//функции для нижних элементов поля
function coordsFourFx(e){
  
  if(clickElem.length > 0 && coordsFour === undefined){
    setCoordsFour(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(4,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)    
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
  Animated.timing(themeBackSizeSeven, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}            
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsFour !== undefined){
//проверка чтобы хлемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomFour, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsFour(coordsZero);
        setCoordsZero(coordsFour); 

        clickElemRezult.splice(0,1,coordsFour);
        clickElemRezult.splice(4,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsFour); 
        setCoordsFour(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsFour);
        clickElemRezult.splice(4,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsFour);
          setCoordsFour(coordsTwo); 

          clickElemRezult.splice(2,1,coordsFour);
          clickElemRezult.splice(4,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsFour);
          setCoordsFour(coordsThree); 

          clickElemRezult.splice(3,1,coordsFour);
          clickElemRezult.splice(4,1,coordsThree);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomFive):

      setCoordsFive(coordsFour);
      setCoordsFour(coordsFive); 

      clickElemRezult.splice(4,1,coordsFive);
      clickElemRezult.splice(5,1,coordsFour);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsFour);
      setCoordsFour(coordsSix); 

      clickElemRezult.splice(4,1,coordsSix);
      clickElemRezult.splice(6,1,coordsFive);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsFour);
      setCoordsFour(coordsSeven); 

      clickElemRezult.splice(4,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsFour);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsFour);
      setCoordsFour(coordsEight); 

      clickElemRezult.splice(4,1,coordsEight);
      clickElemRezult.splice(8,1,coordsFour);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsFour);
      setCoordsFour(coordsNine); 

      clickElemRezult.splice(4,1,coordsNine);
      clickElemRezult.splice(9,1,coordsFour);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
//функции для нижних элементов поля
function coordsFiveFx(e){
  
  if(clickElem.length > 0 && coordsFive === undefined){
    setCoordsFive(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(5,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
  Animated.timing(themeBackSizeSeven, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsFive !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30'||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30'){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomFive, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsFive(coordsZero);
        setCoordsZero(coordsFive); 

        clickElemRezult.splice(0,1,coordsFive);
        clickElemRezult.splice(5,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsFive); 
        setCoordsFive(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsFive);
        clickElemRezult.splice(5,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsFive);
          setCoordsFive(coordsTwo); 

          clickElemRezult.splice(2,1,coordsFive);
          clickElemRezult.splice(5,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsFive);
          setCoordsFive(coordsThree); 

          clickElemRezult.splice(3,1,coordsFive);
          clickElemRezult.splice(5,1,coordsThree);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;

      case JSON.stringify(textSizeBottomFour):

      setCoordsFive(coordsFour);
      setCoordsFour(coordsFive); 

      clickElemRezult.splice(4,1,coordsFive);
      clickElemRezult.splice(5,1,coordsFour);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsFive);
      setCoordsFive(coordsSix); 

      clickElemRezult.splice(5,1,coordsSix);
      clickElemRezult.splice(6,1,coordsFive);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsFive);
      setCoordsFive(coordsSeven); 

      clickElemRezult.splice(5,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsFive);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsFive);
      setCoordsFive(coordsEight); 

      clickElemRezult.splice(5,1,coordsEight);
      clickElemRezult.splice(8,1,coordsFive);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsFive);
      setCoordsFive(coordsNine); 

      clickElemRezult.splice(5,1,coordsNine);
      clickElemRezult.splice(9,1,coordsFive);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
//функции для нижних элементов поля
function coordsSixFx(e){
  
  if(clickElem.length > 0 && coordsSix === undefined){
    setCoordsSix(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(6,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
  Animated.timing(themeBackSizeSeven, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsSix !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30' ||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30' ){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomFive, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsFive(coordsZero);
        setCoordsZero(coordsFive); 

        clickElemRezult.splice(0,1,coordsFive);
        clickElemRezult.splice(5,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsFive); 
        setCoordsFive(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsFive);
        clickElemRezult.splice(5,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsFive);
          setCoordsFive(coordsTwo); 

          clickElemRezult.splice(2,1,coordsFive);
          clickElemRezult.splice(5,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsFive);
          setCoordsFive(coordsThree); 

          clickElemRezult.splice(3,1,coordsFive);
          clickElemRezult.splice(5,1,coordsThree);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;

      case JSON.stringify(textSizeBottomFour):

      setCoordsFive(coordsFour);
      setCoordsFour(coordsFive); 

      clickElemRezult.splice(4,1,coordsFive);
      clickElemRezult.splice(5,1,coordsFour);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsFive);
      setCoordsFive(coordsSix); 

      clickElemRezult.splice(5,1,coordsSix);
      clickElemRezult.splice(6,1,coordsFive);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsSeven(coordsFive);
      setCoordsFive(coordsSeven); 

      clickElemRezult.splice(5,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsFive);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsFive);
      setCoordsFive(coordsEight); 

      clickElemRezult.splice(5,1,coordsEight);
      clickElemRezult.splice(8,1,coordsFive);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsFive);
      setCoordsFive(coordsNine); 

      clickElemRezult.splice(5,1,coordsNine);
      clickElemRezult.splice(9,1,coordsFive);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
function coordsSevenFx(e){
  
  if(clickElem.length > 0 && coordsSeven === undefined){
    setCoordsSeven(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(7,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSeven)) > 23) {
  Animated.timing(themeBackSizeSeven, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsSeven !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30' ||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30' ){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomSeven, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsSeven(coordsZero);
        setCoordsZero(coordsSeven); 

        clickElemRezult.splice(0,1,coordsSeven);
        clickElemRezult.splice(7,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsSeven); 
        setCoordsSeven(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsSeven);
        clickElemRezult.splice(7,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsSeven);
          setCoordsSeven(coordsTwo); 

          clickElemRezult.splice(2,1,coordsSeven);
          clickElemRezult.splice(7,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsSeven);
          setCoordsSeven(coordsThree); 

          clickElemRezult.splice(3,1,coordsSeven);
          clickElemRezult.splice(7,1,coordsThree);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;

      case JSON.stringify(textSizeBottomFour):

      setCoordsSeven(coordsFour);
      setCoordsFour(coordsSeven); 

      clickElemRezult.splice(4,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsFour);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsSeven);
      setCoordsSeven(coordsSix); 

      clickElemRezult.splice(7,1,coordsSix);
      clickElemRezult.splice(6,1,coordsSeven);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsSeven(coordsFive);
      setCoordsFive(coordsSeven); 

      clickElemRezult.splice(5,1,coordsSeven);
      clickElemRezult.splice(7,1,coordsFive);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsEight(coordsSeven);
      setCoordsSeven(coordsEight); 

      clickElemRezult.splice(7,1,coordsEight);
      clickElemRezult.splice(8,1,coordsSeven);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsSeven);
      setCoordsSeven(coordsNine); 

      clickElemRezult.splice(7,1,coordsNine);
      clickElemRezult.splice(9,1,coordsSeven);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
function coordsEightFx(e){
   
  if(clickElem.length > 0 && coordsEight === undefined){
    setCoordsEight(clickElem[0]);
//добавления элементов в конечный массив
    clickElemRezult.splice(8,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsEight !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30' ||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30' ){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomEight, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsEight(coordsZero);
        setCoordsZero(coordsEight); 

        clickElemRezult.splice(0,1,coordsEight);
        clickElemRezult.splice(8,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsEight); 
        setCoordsEight(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsEight);
        clickElemRezult.splice(8,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsEight);
          setCoordsEight(coordsTwo); 

          clickElemRezult.splice(2,1,coordsEight);
          clickElemRezult.splice(8,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsEight);
          setCoordsEight(coordsThree); 

          clickElemRezult.splice(3,1,coordsEight);
          clickElemRezult.splice(8,1,coordsThree);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;

      case JSON.stringify(textSizeBottomFour):

      setCoordsEight(coordsFour);
      setCoordsFour(coordsEight); 

      clickElemRezult.splice(4,1,coordsEight);
      clickElemRezult.splice(8,1,coordsFour);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsEight);
      setCoordsEight(coordsSix); 

      clickElemRezult.splice(8,1,coordsSix);
      clickElemRezult.splice(6,1,coordsEight);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsEight(coordsFive);
      setCoordsFive(coordsEight); 
      
      clickElemRezult.splice(5,1,coordsEight);
      clickElemRezult.splice(8,1,coordsFive);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsEight(coordsSeven);
      setCoordsSeven(coordsEight); 
      
      clickElemRezult.splice(7,1,coordsEight);
      clickElemRezult.splice(8,1,coordsSeven);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomNine):

      setCoordsNine(coordsEight);
      setCoordsEight(coordsNine); 

      clickElemRezult.splice(8,1,coordsNine);
      clickElemRezult.splice(9,1,coordsEight);

      Animated.timing(textSizeBottomNine, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
function coordsNineFx(e){
  if(clickElem.length > 0 && coordsNine === undefined){
    setCoordsNine(clickElem[0]);
    
//добавления элементов в конечный массив
    clickElemRezult.splice(9,1,clickElem[0]);
//удаление элемента из массива выбраного элемента пользователем
    clickElem.splice(0,1,)
//убираем активированые элементы с поля
if (Number(JSON.stringify(themeBackSizeZero)) > 23) {
  Animated.timing(themeBackSizeZero, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeOne)) > 23) {
  Animated.timing(themeBackSizeOne, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeTwo)) > 23) {
  Animated.timing(themeBackSizeTwo, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeThree)) > 23) {
  Animated.timing(themeBackSizeThree, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFour)) > 23) {
  Animated.timing(themeBackSizeFour, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeFive)) > 23) {
  Animated.timing(themeBackSizeFive, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeSix)) > 23) {
  Animated.timing(themeBackSizeSix, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeEight)) > 23) {
  Animated.timing(themeBackSizeEight, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}
if (Number(JSON.stringify(themeBackSizeNine)) > 23) {
  Animated.timing(themeBackSizeNine, {
    toValue: 0,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
}           
  }
 //меняет местами элементы нижнего поля и тоже делает в конечном массиве 
  if(coordsNine !== undefined){
//проверка чтобы элемент верхнего поля не заменял установленный элемент нижнего поля
    if(JSON.stringify(themeBackSizeZero) === '30' ||
        JSON.stringify(themeBackSizeOne) === '30' ||
          JSON.stringify(themeBackSizeTwo) === '30' ||
            JSON.stringify(themeBackSizeThree) === '30' ||
              JSON.stringify(themeBackSizeFour) === '30' ||
                JSON.stringify(themeBackSizeFive) === '30' ||
                  JSON.stringify(themeBackSizeSix) === '30' ||
                    JSON.stringify(themeBackSizeSeven) === '30' ||
                      JSON.stringify(themeBackSizeEight) === '30' ||
                        JSON.stringify(themeBackSizeNine) === '30' ){
      return;
    }
    audioStatus();
//анимация увелечения шрифта
    Animated.timing(textSizeBottomNine, {
      toValue: 20,
      duration: 500,
      easing: Easing.elastic(3),
      useNativeDriver: false
    }).start()

    switch ('20') {
      case JSON.stringify(textSizeBottomZero):

        setCoordsNine(coordsZero);
        setCoordsZero(coordsNine); 

        clickElemRezult.splice(0,1,coordsNine);
        clickElemRezult.splice(9,1,coordsZero);

        Animated.timing(textSizeBottomZero, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomOne):
//смена местами элементов нижнего блока
        setCoordsOne(coordsNine); 
        setCoordsNine(coordsOne); 
//добавления элементов в конечный массив
        clickElemRezult.splice(1,1,coordsNine);
        clickElemRezult.splice(9,1,coordsOne);
//анимация уменьшения шрифта
        Animated.timing(textSizeBottomOne, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomTwo):

          setCoordsTwo(coordsNine);
          setCoordsNine(coordsTwo); 

          clickElemRezult.splice(2,1,coordsNine);
          clickElemRezult.splice(9,1,coordsTwo);

          Animated.timing(textSizeBottomTwo, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;
      case JSON.stringify(textSizeBottomThree):

          setCoordsThree(coordsNine);
          setCoordsNine(coordsThree); 

          clickElemRezult.splice(3,1,coordsNine);
          clickElemRezult.splice(9,1,coordsThree);

          Animated.timing(textSizeBottomThree, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(3),
          useNativeDriver: false
        }).start()
      break;

      case JSON.stringify(textSizeBottomFour):

      setCoordsNine(coordsFour);
      setCoordsFour(coordsNine); 

      clickElemRezult.splice(4,1,coordsNine);
      clickElemRezult.splice(9,1,coordsFour);

      Animated.timing(textSizeBottomFour, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSix):

      setCoordsSix(coordsNine);
      setCoordsNine(coordsSix); 

      clickElemRezult.splice(9,1,coordsSix);
      clickElemRezult.splice(6,1,coordsNine);

      Animated.timing(textSizeBottomSix, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomFive):

      setCoordsNine(coordsFive);
      setCoordsFive(coordsNine); 
      
      clickElemRezult.splice(5,1,coordsNine);
      clickElemRezult.splice(9,1,coordsFive);

      Animated.timing(textSizeBottomFive, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomSeven):

      setCoordsNine(coordsSeven);
      setCoordsSeven(coordsNine); 
      
      clickElemRezult.splice(7,1,coordsNine);
      clickElemRezult.splice(9,1,coordsSeven);

      Animated.timing(textSizeBottomSeven, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
    case JSON.stringify(textSizeBottomEight):

      setCoordsNine(coordsEight);
      setCoordsEight(coordsNine); 

      clickElemRezult.splice(8,1,coordsNine);
      clickElemRezult.splice(9,1,coordsEight);

      Animated.timing(textSizeBottomEight, {
        toValue: 15,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    break;
  }
}
}
//сбрасываем к начальным значением шрифт элементов нижнего поля при условии изминения элементов
useEffect(()=>{
  Animated.timing(textSizeBottomZero, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomOne, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomTwo, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomThree, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomFour, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomFive, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomSix, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomSeven, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomEight, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
  Animated.timing(textSizeBottomNine, {
    toValue: 15,
    duration: 500,
    easing: Easing.elastic(3),
    useNativeDriver: false
  }).start()
},[coordsZero,coordsOne,coordsTwo,coordsThree,coordsFour,coordsFive,coordsSix,coordsSeven,coordsEight,coordsNine])

// 
//добавления элемента в массив по клику и проверка его на совпадения
useEffect(()=>{

  let i = 0;
  for(;i <props.sortMass.length; i++){
    if(props.sortMass[i] === clickElemRezult[i] ){
      clickElemRezultheck.splice(i,1,clickElemRezult[i])
    }
    else{
      clickElemRezultheck.splice(i,1,'')
    }
  }
  
    setSelectionResult([props.sortMass,clickElemRezultheck]);
    //setSelectionResult([props.sortMass,[]]);
 },[coordsZero,coordsOne,coordsTwo,coordsThree,coordsFour,coordsFive,coordsSix,coordsSeven,coordsEight,coordsNine])
//наполнения массива при загрузки экрана
 useEffect(()=>{
    setSelectionResult([props.sortMass,clickElemRezult]);
    //setSelectionResult([props.sortMass,[]]);
 },[props.sortMass,isTrueFalse])
 //
 
//Функции верхнего поля наполнения массива выбранными элементами пользователя и отображения на экране
  function ClickElemMassZero(e){
   
//анимация увелечения шрифта    
    if(JSON.stringify(themeBackSizeZero) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeZero, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()  
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeTwo):
          Animated.timing(themeBackSizeTwo, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeThree):
          Animated.timing(themeBackSizeThree, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeFour):
          Animated.timing(themeBackSizeFour, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        break;
        case JSON.stringify(themeBackSizeFive):
          Animated.timing(themeBackSizeFive, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        break;
        case JSON.stringify(themeBackSizeSix):
          Animated.timing(themeBackSizeSix, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        break; 
        case JSON.stringify(themeBackSizeSeven):
          Animated.timing(themeBackSizeSeven, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        break;     
    }
    }
  }  
  function ClickElemMassOne(e){
//анимация увелечения шрифта     
    if(JSON.stringify(themeBackSizeOne) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeOne, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
//анимация уменьшения шрифта   
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeTwo):
          Animated.timing(themeBackSizeTwo, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
    }
  }  
  function ClickElemMassTwo(e){
//анимация увелечения шрифта   

    if(JSON.stringify(themeBackSizeTwo) === '23'){
      audioStatus();    
      clickElem.unshift(e);
      Animated.timing(themeBackSizeTwo, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
    }
  }  
  function ClickElemMassThree(e){
    
//анимация увелечения шрифта       
    if(JSON.stringify(themeBackSizeThree) === '23'){
      audioStatus();  
      clickElem.unshift(e);
      Animated.timing(themeBackSizeThree, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeTwo):
            Animated.timing(themeBackSizeTwo, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
  }  
  function ClickElemMassFour(e){
    
//анимация увелечения шрифта       
    if(JSON.stringify(themeBackSizeFour) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeFour, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeTwo):
            Animated.timing(themeBackSizeTwo, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
  }  
  function ClickElemMassFive(e){
    
//анимация увелечения шрифта       
    if(JSON.stringify(themeBackSizeFive) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeFive, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeTwo):
            Animated.timing(themeBackSizeTwo, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
  }
  function ClickElemMassSix(e){
    
//анимация увелечения шрифта       
    if(JSON.stringify(themeBackSizeSix) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeSix, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeTwo):
            Animated.timing(themeBackSizeTwo, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSeven):
            Animated.timing(themeBackSizeSeven, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
  }
  function ClickElemMassSeven(e){
    
//анимация увелечения шрифта       
    if(JSON.stringify(themeBackSizeSeven) === '23'){
      audioStatus(); 
      clickElem.unshift(e);
      Animated.timing(themeBackSizeSeven, {
        toValue: 30,
        duration: 500,
        easing: Easing.elastic(3),
        useNativeDriver: false
      }).start()
    }
//анимация уменьшения шрифта    
      switch ('30') {
        case JSON.stringify(themeBackSizeZero):
          Animated.timing(themeBackSizeZero, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
        case JSON.stringify(themeBackSizeOne):
          Animated.timing(themeBackSizeOne, {
            toValue: 23,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
          break;
          case JSON.stringify(themeBackSizeTwo):
            Animated.timing(themeBackSizeTwo, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
            break;
          case JSON.stringify(themeBackSizeThree):
            Animated.timing(themeBackSizeThree, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFour):
            Animated.timing(themeBackSizeFour, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;
          case JSON.stringify(themeBackSizeFive):
            Animated.timing(themeBackSizeFive, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break; 
          case JSON.stringify(themeBackSizeSix):
            Animated.timing(themeBackSizeSix, {
              toValue: 23,
              duration: 500,
              easing: Easing.elastic(3),
              useNativeDriver: false
            }).start()
          break;         
    }
  }
  function ClickElemMassEight(e){
    
    //анимация увелечения шрифта       
        if(JSON.stringify(themeBackSizeEight) === '23'){
          audioStatus(); 
          clickElem.unshift(e);
          Animated.timing(themeBackSizeEight, {
            toValue: 30,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        }
    //анимация уменьшения шрифта    
          switch ('30') {
            case JSON.stringify(themeBackSizeZero):
              Animated.timing(themeBackSizeZero, {
                toValue: 23,
                duration: 500,
                easing: Easing.elastic(3),
                useNativeDriver: false
              }).start()
              break;
            case JSON.stringify(themeBackSizeOne):
              Animated.timing(themeBackSizeOne, {
                toValue: 23,
                duration: 500,
                easing: Easing.elastic(3),
                useNativeDriver: false
              }).start()
              break;
              case JSON.stringify(themeBackSizeTwo):
                Animated.timing(themeBackSizeTwo, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
                break;
              case JSON.stringify(themeBackSizeThree):
                Animated.timing(themeBackSizeThree, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;
              case JSON.stringify(themeBackSizeFour):
                Animated.timing(themeBackSizeFour, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;
              case JSON.stringify(themeBackSizeFive):
                Animated.timing(themeBackSizeFive, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break; 
              case JSON.stringify(themeBackSizeSix):
                Animated.timing(themeBackSizeSix, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;   
              case JSON.stringify(themeBackSizeSeven):
                Animated.timing(themeBackSizeSeven, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;  
              case JSON.stringify(themeBackSizeNine):
                Animated.timing(themeBackSizeNine, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;    
        }
  }
  function ClickElemMassNine(e){
    
    //анимация увелечения шрифта       
        if(JSON.stringify(themeBackSizeNine) === '23'){
          audioStatus(); 
          clickElem.unshift(e);
          Animated.timing(themeBackSizeNine, {
            toValue: 30,
            duration: 500,
            easing: Easing.elastic(3),
            useNativeDriver: false
          }).start()
        }
    //анимация уменьшения шрифта    
          switch ('30') {
            case JSON.stringify(themeBackSizeZero):
              Animated.timing(themeBackSizeZero, {
                toValue: 23,
                duration: 500,
                easing: Easing.elastic(3),
                useNativeDriver: false
              }).start()
              break;
            case JSON.stringify(themeBackSizeOne):
              Animated.timing(themeBackSizeOne, {
                toValue: 23,
                duration: 500,
                easing: Easing.elastic(3),
                useNativeDriver: false
              }).start()
              break;
              case JSON.stringify(themeBackSizeTwo):
                Animated.timing(themeBackSizeTwo, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
                break;
              case JSON.stringify(themeBackSizeThree):
                Animated.timing(themeBackSizeThree, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;
              case JSON.stringify(themeBackSizeFour):
                Animated.timing(themeBackSizeFour, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;
              case JSON.stringify(themeBackSizeFive):
                Animated.timing(themeBackSizeFive, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break; 
              case JSON.stringify(themeBackSizeSix):
                Animated.timing(themeBackSizeSix, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;   
              case JSON.stringify(themeBackSizeSeven):
                Animated.timing(themeBackSizeSeven, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;  
              case JSON.stringify(themeBackSizeEight):
                Animated.timing(themeBackSizeEight, {
                  toValue: 23,
                  duration: 500,
                  easing: Easing.elastic(3),
                  useNativeDriver: false
                }).start()
              break;    
        }
  }
  
  return ( 
    <View style={styles.container}>
      <View style={styles.MainPageMain}>
        {rezultMass}
       
      </View>
      <View style={styles.reaultContainer}>
            {rezultBox}
      </View>
      <Scoring selectionResult = {selectionResult} navig={props.navigation.navigation} />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {   
    position: 'absolute',
    zIndex: 0,
    display: 'flex', 
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  MainPageMain:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    width: '95%',
    height: '65%',
    
  },
  textBlock:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'red',
    zIndex: 9999,
  },
  textBlockZero:{
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  text:{ 
    width: "auto",
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset:  { width: 1, height: 1 },
    
  },
  reaultContainer:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    width: '100%',
    height: '30%',
    zIndex: -1,
    backgroundColor: 'rgba(250, 235, 215,0.2)',
  },
  reaultContainerBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    margin: 5,
    backgroundColor: 'rgba(250, 235, 215,0.2)',
    borderRadius: 10,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.5)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0,0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.3)",
  },
  textBottomBox:{
    position: 'absolute',
    color: '#FFD700',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset:  { width: 1, height: 1 },
    fontSize: 100
  },
})