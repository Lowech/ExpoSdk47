import React from 'react';
import { StyleSheet, View, Text,Pressable } from 'react-native';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import audioClick from '../../../../../../../../../../audio-components/audioClick.js';
import { useSelector, useDispatch } from 'react-redux';
import { timeGameFalse, incrementByAmount } from '../../../../../../../../../../redux/counterSlice';
import Scoring from '../../../../scoring';


//массив выбранных элементов пользователем
let clickElem = [];
//

export default function LogickWord(props) {

  const styles = StyleSheet.create({
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
    textBlock:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'flex-start',
      minWidth: 100,
      height: 45,
      borderRadius: 10,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftColor: "transparent",
      margin: 5,
      PaddingTop: 10,
      padding: 5,
      backgroundColor: 'transparent',
    },
    textBlockClick:{
      backgroundColor: 'rgb(250, 235, 215)',
      borderLeftColor: "rgba(0, 0, 0,0.3)",
      borderTopColor: "rgba(0, 0, 0,0.3)",
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomColor: "rgba(0, 0, 0,0.3)",
    },
    textBlockZero:{
      width: 230,
      height: 45,
      backgroundColor: 'transparent',
      margin: 5
    },
    text:{
      textAlign: 'center',
      fontSize: 23,
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset:  { width: 1, height: 1 },
      
    }
  })

const massElementColor= ["red","blue","#00FFFF","green","grey","black","white","brown","#FF00FF","#00FF00"];
let rezultMass = [];
//начальный массив значений результата уровня
const [selectionResult, setSelectionResult] = useState([]);
useEffect(()=>{
  
},[])
const [themeBackColorZero, setThemeBackColorZero] = useState(styles.textBlock);
const [themeBackColorOne, setThemeBackColorOne] = useState(styles.textBlock);
const [themeBackColorTwo, setThemeBackColorTwo] = useState(styles.textBlock);
const [themeBackColorThree, setThemeBackColorThree] = useState(styles.textBlock);
const [themeBackColorFour, setThemeBackColorFour] = useState(styles.textBlock);
const [themeBackColorFive, setThemeBackColorFive] = useState(styles.textBlock);
const [themeBackColorSix, setThemeBackColorSix] = useState(styles.textBlock);
const [themeBackColorSeven, setThemeBackColorSeven] = useState(styles.textBlock);
const [themeBackColorEight, setThemeBackColorEight] = useState(styles.textBlock);
const [themeBackColorNine, setThemeBackColorNine] = useState(styles.textBlock);

//окончания и начала таймера
const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
//
const dispatch = useDispatch();
const isFocused = useIsFocused();

// сброс значений массива после ухода с экрана игры
useEffect(()=>{
  if(isFocused === true){
    
      clickElem = [];
  
      setThemeBackColorZero(styles.textBlock);
      setThemeBackColorOne(styles.textBlock);
      setThemeBackColorTwo(styles.textBlock);
      setThemeBackColorThree(styles.textBlock);
      setThemeBackColorFour(styles.textBlock);
      setThemeBackColorFive(styles.textBlock);
      setThemeBackColorSix(styles.textBlock);
      setThemeBackColorSeven(styles.textBlock);
      setThemeBackColorEight(styles.textBlock);
      setThemeBackColorNine(styles.textBlock);
  }
  
 },[isFocused])
// 

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
          <Pressable key={props.massRandomElemTrue[0]+massElementColor[0]} style={[styles.textBlock,themeBackColorZero]} onPress={()=>ClickElemMassZero(props.massRandomElemTrue[0])}>
            <Text key={props.massRandomElemTrue[0]+massElementColor[0]} style={[styles.text,{color:massElementColor[0]}]} >{props.massRandomElemTrue[0]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[1],1,
          <Pressable key={props.massRandomElemTrue[1]+massElementColor[1]} style={[styles.textBlock,themeBackColorOne]} onPress={()=>ClickElemMassOne(props.massRandomElemTrue[1])}>
            <Text key={props.massRandomElemTrue[1]+massElementColor[1]} style={[styles.text,{color:massElementColor[1]}]} >{props.massRandomElemTrue[1]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[2],1,
          <Pressable key={props.massRandomElemTrue[2]+massElementColor[2]} style={[styles.textBlock,themeBackColorTwo]} onPress={()=>ClickElemMassTwo(props.massRandomElemTrue[2])}>
            <Text key={props.massRandomElemTrue[2]+massElementColor[2]} style={[styles.text,{color:massElementColor[2]}]} >{props.massRandomElemTrue[2]}</Text>
          </Pressable>)
        rezultMass.splice(props.sortRandomElem[3],1,
          <Pressable key={props.massRandomElemTrue[3]+massElementColor[3]} style={[styles.textBlock,themeBackColorThree]} onPress={()=>ClickElemMassThree(props.massRandomElemTrue[3])}>
            <Text key={props.massRandomElemTrue[3]+massElementColor[3]} style={[styles.text,{color:massElementColor[3]}]} >{props.massRandomElemTrue[3]}</Text>
          </Pressable>)
        if(props.sortRandomElem.length > 4){
        rezultMass.splice(props.sortRandomElem[4],1,
          <Pressable key={props.massRandomElemTrue[4]+massElementColor[4]} style={[styles.textBlock,themeBackColorFour]} onPress={()=>ClickElemMassFour(props.massRandomElemTrue[4])}>
            <Text key={props.massRandomElemTrue[4]+massElementColor[4]} style={[styles.text,{color:massElementColor[4]}]} >{props.massRandomElemTrue[4]}</Text>
          </Pressable>)
        }
        if(props.sortRandomElem.length > 5){
          rezultMass.splice(props.sortRandomElem[5],1,
            <Pressable key={props.massRandomElemTrue[5]+massElementColor[5]} style={[styles.textBlock,themeBackColorFive]} onPress={()=>ClickElemMassFive(props.massRandomElemTrue[5])}>
              <Text key={props.massRandomElemTrue[5]+massElementColor[5]} style={[styles.text,{color:massElementColor[5]}]} >{props.massRandomElemTrue[5]}</Text>
            </Pressable>)
         }
        if(props.sortRandomElem.length > 6){
        rezultMass.splice(props.sortRandomElem[6],1,
          <Pressable key={props.massRandomElemTrue[6]+massElementColor[6]} style={[styles.textBlock,themeBackColorSix]} onPress={()=>ClickElemMassSix(props.massRandomElemTrue[6])}>
            <Text key={props.massRandomElemTrue[6]+massElementColor[6]} style={[styles.text,{color:massElementColor[6]}]} >{props.massRandomElemTrue[6]}</Text>
          </Pressable>)
        }
        if(props.sortRandomElem.length > 7){
          rezultMass.splice(props.sortRandomElem[7],1,
            <Pressable key={props.massRandomElemTrue[7]+massElementColor[7]} style={[styles.textBlock,themeBackColorSeven]} onPress={()=>ClickElemMassSeven(props.massRandomElemTrue[7])}>
              <Text key={props.massRandomElemTrue[7]+massElementColor[7]} style={[styles.text,{color:massElementColor[7]}]} >{props.massRandomElemTrue[7]}</Text>
            </Pressable>)
          }
        if(props.sortRandomElem.length > 8){
          rezultMass.splice(props.sortRandomElem[8],1,
            <Pressable key={props.massRandomElemTrue[8]+massElementColor[8]} style={[styles.textBlock,themeBackColorEight]} onPress={()=>ClickElemMassEight(props.massRandomElemTrue[8])}>
              <Text key={props.massRandomElemTrue[8]+massElementColor[8]} style={[styles.text,{color:massElementColor[8]}]} >{props.massRandomElemTrue[8]}</Text>
            </Pressable>)
        }
        if(props.sortRandomElem.length > 9){
          rezultMass.splice(props.sortRandomElem[9],1,
            <Pressable key={props.massRandomElemTrue[9]+massElementColor[9]} style={[styles.textBlock,themeBackColorNine]} onPress={()=>ClickElemMassNine(props.massRandomElemTrue[9])}>
              <Text key={props.massRandomElemTrue[9]+massElementColor[9]} style={[styles.text,{color:massElementColor[9]}]} >{props.massRandomElemTrue[9]}</Text>
            </Pressable>)
        }
      }
  //
//добавления элемента в массив по клику
useEffect(()=>{
 
    setSelectionResult([props.massRandomElemFalse,clickElem]);
    
 },[props.massRandomElemFalse,themeBackColorZero,themeBackColorOne,themeBackColorTwo,themeBackColorThree,
  themeBackColorFour,themeBackColorFive,themeBackColorSix,themeBackColorSeven])
//наполнения массива при загрузки экрана
 useEffect(()=>{
  
    //setSelectionResult([props.massRandomElemFalse,['false']]);
    setSelectionResult([props.massRandomElemFalse,[]]);
 },[props.massRandomElemFalse,isTrueFalse])
 //
 
//Функции наполения массива выбранными элементами пользователя и отображения на экране
  function ClickElemMassZero(e){
    audioClick();
    if(themeBackColorZero.backgroundColor === 'transparent'){
      clickElem.push(e);
      setThemeBackColorZero(styles.textBlockClick);
    }else{
      clickElem.splice(clickElem.indexOf(e),1);
      setThemeBackColorZero(styles.textBlock);
    }
  }  
  function ClickElemMassOne(e){
    audioClick();
    if(themeBackColorOne.backgroundColor === 'transparent'){
      clickElem.push(e);
      setThemeBackColorOne(styles.textBlockClick);
    }else{
      clickElem.splice(clickElem.indexOf(e),1);
      setThemeBackColorOne(styles.textBlock);
    }
  }  
  function ClickElemMassTwo(e){
    audioClick(); 
    if(themeBackColorTwo.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorTwo(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorTwo(styles.textBlock);
      }
  }  
  function ClickElemMassThree(e){
    audioClick();
    if(themeBackColorThree.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorThree(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorThree(styles.textBlock);
      }
  }  
  function ClickElemMassFour(e){
    audioClick();
    if(themeBackColorFour.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorFour(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorFour(styles.textBlock);
      }
  }  
  function ClickElemMassFive(e){
    audioClick();
    if(themeBackColorFive.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorFive(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorFive(styles.textBlock);
    }
  }
  function ClickElemMassSix(e){
    audioClick();
    if(themeBackColorSix.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorSix(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorSix(styles.textBlock);
    }
  }
  function ClickElemMassSeven(e){
    audioClick();
    if(themeBackColorSeven.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorSeven(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorSeven(styles.textBlock);
    }
  }
  function ClickElemMassEight(e){
    audioClick();
    if(themeBackColorEight.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorEight(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorEight(styles.textBlock);
    }
  }
  function ClickElemMassNine(e){
    audioClick();
    if(themeBackColorNine.backgroundColor === 'transparent'){
        clickElem.push(e);
        setThemeBackColorNine(styles.textBlockClick);
      }else{
        clickElem.splice(clickElem.indexOf(e),1);
        setThemeBackColorNine(styles.textBlock);
    }
  }
  return ( 
    <View style={styles.container}>
      <View style={styles.MainPageMain}>
        {rezultMass}
       
      </View>
      
      <Scoring selectionResult = {selectionResult} navig={props.navigation.navigation} />
    </View> 
  )
}

