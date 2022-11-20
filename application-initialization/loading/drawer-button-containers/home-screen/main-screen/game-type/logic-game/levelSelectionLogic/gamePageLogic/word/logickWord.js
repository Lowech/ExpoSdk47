import React from 'react';
import { StyleSheet, View, Button,Text,Pressable } from 'react-native';
import {useState,useEffect,useLayoutEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"
import audioClick from '../../../../../../../../../../audio-components/audioClick.js';
import { useSelector, useDispatch } from 'react-redux';
import { timeGameFalse, incrementByAmount } from '../../../../../../../../../../redux/counterSlice';


import { push } from 'firebase/database';

//массив выбранных элементов пользователем
let clickElem = [];
//

function LogickWord(props) {

const massElementColor= ["red","blue","yellow","green","grey","black","white","brown"];
let rezultMass = [];

const [themeBackColorZero, setThemeBackColorZero] = useState('blue');
const [themeBackColorOne, setThemeBackColorOne] = useState('blue');
const [themeBackColorTwo, setThemeBackColorTwo] = useState('blue');
const [themeBackColorThree, setThemeBackColorThree] = useState('blue');
const [themeBackColorFour, setThemeBackColorFour] = useState('blue');
const [themeBackColorFive, setThemeBackColorFive] = useState('blue');
const [themeBackColorSix, setThemeBackColorSix] = useState('blue');
const [themeBackColorSeven, setThemeBackColorSeven] = useState('blue');
const isTrueFalse = useSelector(state => state.counter.timeGameEnd)
const dispatch = useDispatch();

const isFocused = useIsFocused();
//наполнения пустыми блоками массив поля
let step =0;
for(; step < props.colBlock; step++){
  rezultMass.push(<Pressable key={step} style={[styles.textBlockZero]}>
    </Pressable>)
}
//   
//наполнения элементами массива поле
  if(props.sortRandomElem !== undefined)
    {
        rezultMass.splice(props.sortRandomElem[0],1,
          <Pressable key={props.massRandomElemTrue[0]+massElementColor[0]} style={[styles.textBlock,{backgroundColor:themeBackColorZero}]} onPress={()=>ClickElemMassZero(props.massRandomElemTrue[0])}>
            <Text key={props.massRandomElemTrue[0]+massElementColor[0]} style={[styles.text,{color:massElementColor[0]}]} >{props.massRandomElemTrue[0]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[1],1,
          <Pressable key={props.massRandomElemTrue[1]+massElementColor[1]} style={[styles.textBlock,{backgroundColor:themeBackColorOne}]} onPress={()=>ClickElemMassOne(props.massRandomElemTrue[1])}>
            <Text key={props.massRandomElemTrue[1]+massElementColor[1]} style={[styles.text,{color:massElementColor[1]}]} >{props.massRandomElemTrue[1]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[2],1,
          <Pressable key={props.massRandomElemTrue[2]+massElementColor[2]} style={[styles.textBlock,{backgroundColor:themeBackColorTwo}]} onPress={()=>ClickElemMassTwo(props.massRandomElemTrue[2])}>
            <Text key={props.massRandomElemTrue[2]+massElementColor[2]} style={[styles.text,{color:massElementColor[2]}]} >{props.massRandomElemTrue[2]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[3],1,
          <Pressable key={props.massRandomElemTrue[3]+massElementColor[3]} style={[styles.textBlock,{backgroundColor:themeBackColorThree}]} onPress={()=>ClickElemMassThree(props.massRandomElemTrue[3])}>
            <Text key={props.massRandomElemTrue[3]+massElementColor[3]} style={[styles.text,{color:massElementColor[3]}]} >{props.massRandomElemTrue[3]}</Text>
          </Pressable>)
        if(props.sortRandomElem > 4){
        rezultMass.splice(props.sortRandomElem[4],1,
          <Pressable key={props.massRandomElemTrue[4]+massElementColor[4]} style={[styles.textBlock,{backgroundColor:themeBackColorFour}]} onPress={()=>ClickElemMassFour(props.massRandomElemTrue[4])}>
            <Text key={props.massRandomElemTrue[4]+massElementColor[4]} style={[styles.text,{color:massElementColor[4]}]} >{props.massRandomElemTrue[4]}</Text>
          </Pressable>)
        }
        if(props.sortRandomElem > 5){
          rezultMass.splice(props.sortRandomElem[5],1,
            <Pressable key={props.massRandomElemTrue[5]+massElementColor[5]} style={[styles.textBlock,{backgroundColor:themeBackColorFive}]} onPress={()=>ClickElemMassFive(props.massRandomElemTrue[5])}>
              <Text key={props.massRandomElemTrue[5]+massElementColor[5]} style={[styles.text,{color:massElementColor[5]}]} >{props.massRandomElemTrue[5]}</Text>
            </Pressable>)
         }
        if(props.sortRandomElem > 6){
        rezultMass.splice(props.sortRandomElem[6],1,
          <Pressable key={props.massRandomElemTrue[6]+massElementColor[6]} style={[styles.textBlock,{backgroundColor:themeBackColorSix}]} onPress={()=>ClickElemMassSix(props.massRandomElemTrue[6])}>
            <Text key={props.massRandomElemTrue[6]+massElementColor[6]} style={[styles.text,{color:massElementColor[6]}]} >{props.massRandomElemTrue[6]}</Text>
          </Pressable>)
        }
        if(props.sortRandomElem > 7){
          rezultMass.splice(props.sortRandomElem[7],1,
            <Pressable key={props.massRandomElemTrue[7]+massElementColor[7]} style={[styles.textBlock,{backgroundColor:themeBackColorSeven}]} onPress={()=>ClickElemMassSeven(props.massRandomElemTrue[7])}>
              <Text key={props.massRandomElemTrue[7]+massElementColor[7]} style={[styles.text,{color:massElementColor[7]}]} >{props.massRandomElemTrue[7]}</Text>
            </Pressable>)
          }
      }
  //
// отправка результатов на сервер и переход на экран сообщения
let massFinish = [];
massFinish.push(props.massRandomElemFalse) 
massFinish.push(clickElem)   
 
 useEffect(()=>{
  if(isTrueFalse === true){
    massFinish.reverse();
    
    dispatch(incrementByAmount(massFinish))
    props.navigation.navigation.navigate("MessageGameResultat");
   }
 },[isTrueFalse])
 //
 // сброс значений массива после ухода с экрана игры
 useEffect(()=>{
  if(isFocused === false){
    
      massFinish = [];
      clickElem = [];
  }
 },[isFocused])
// 

//Функции наполения массива выбранными элементами пользователя и отображения на экране
  function ClickElemMassZero(e){
    audioClick();
    if(themeBackColorZero === 'blue'){
      clickElem.push(e);
      setThemeBackColorZero('yellow');
    }else{
      clickElem.splice(clickElem.indexOf(e),1);
      setThemeBackColorZero('blue');
    }
  }  
  function ClickElemMassOne(e){
    audioClick();
    if(themeBackColorOne === 'blue'){
      clickElem.push(e);
      setThemeBackColorOne('yellow');
    }else{
      clickElem.splice(clickElem.indexOf(e),1);
      setThemeBackColorOne('blue');
    }
  }  
  function ClickElemMassTwo(e){
    audioClick(); 
    if(themeBackColorTwo === 'blue'){
        clickElem.push(e);
        setThemeBackColorTwo('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorTwo('blue');
      }
  }  
  function ClickElemMassThree(e){
    audioClick();
    if(themeBackColorThree === 'blue'){
        clickElem.push(e);
        setThemeBackColorThree('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorThree('blue');
      }
  }  
  function ClickElemMassFour(e){
    audioClick();
    if(themeBackColorFour === 'blue'){
        clickElem.push(e);
        setThemeBackColorFour('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorFour('blue');
      }
  }  
  function ClickElemMassFive(e){
    audioClick();
    if(themeBackColorFive === 'blue'){
        clickElem.push(e);
        setThemeBackColorFive('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorFive('blue');
    }
  }
  function ClickElemMassSix(e){
    audioClick();
    if(themeBackColorSix === 'blue'){
        clickElem.push(e);
        setThemeBackColorSix('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorSix('blue');
    }
  }
  function ClickElemMassSeven(e){
    audioClick();
    if(themeBackColorSeven === 'blue'){
        clickElem.push(e);
        setThemeBackColorSeven('yellow');
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorSeven('blue');
    }
  }
  return ( rezultMass)
}

export default LogickWord;

const styles = StyleSheet.create({
  
  textBlock:{
    width: 'auto',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 5,
    padding: 5
  },
  textBlockZero:{
    width: 230,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 5
  },
  text:{
    textAlign: 'center',
    fontSize: 23,
  }
})