import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,Button , Animated, Pressable,ImageBackground,Easing } from 'react-native';
import {useState,useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nameGameСhange} from '../../../../../../../../../../redux/counterSlice';
import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import Timer from '../../../../timer';
import { Audio } from 'expo-av';
import audioClick from '../../../../../../../../../../audio-components/audioClick.js';
import {useIsFocused } from '@react-navigation/native';


let massElementColor= ["red","blue","yellow","green","grey","black","white","brown"];
let clickElementColor= [];


export default  function BallsDecision({navigation}) {
  const sound = require('../../../../../../../../../../assets/audio/bulkBit.wav');
   function playSound() {
    Audio.Sound.createAsync(
      sound,
      { shouldPlay: true }
    ).then((res)=>{
      res.sound.setOnPlaybackStatusUpdate((status)=>{
        if(!status.didJustFinish) return;
        //console.log(status);
        
        res.sound.unloadAsync()
        .catch(()=>{
          console.log(error)
        });
      });
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  
    const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
    
    const dispatch = useDispatch();
    dispatch(nameGameСhange('ball'));

    const [elementState, setElementState] = useState("start");
    const [level, setLevel] = useState(0);
    const [numberRed, setNumberRed] = useState(0);
    const [numberBlue, setNumberBlue] = useState(0);
    const [numberYellow, setNumberYellow] = useState(0);
    const [numberGreen, setNumberGreen] = useState(0);
    const [numberGrey, setNumberGrey] = useState(0);
    const [numberBlack, setNumberBlack] = useState(0);
    const [numberWhite, setNumberWhite] = useState(0);
    const [numberBrown, setNumberBrown] = useState(0);
 
    const animateNumberRed = useRef(new Animated.Value(0)).current;
    const animateNumberBlue = useRef(new Animated.Value(0)).current;
    const animateNumberYellow = useRef(new Animated.Value(0)).current;
    const animateNumberGreen = useRef(new Animated.Value(0)).current;
    const animateNumberGrey = useRef(new Animated.Value(0)).current;
    const animateNumberBlack = useRef(new Animated.Value(0)).current;
    const animateNumberWhite = useRef(new Animated.Value(0)).current;
    const animateNumberBrown = useRef(new Animated.Value(0)).current;
    
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
const VisibleNumberPlusRed = () => {
  audioClick();
  animateNumberRed.resetAnimation();
 Animated.timing( animateNumberRed,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("red")
  setNumberRed(numberRed+1)
}
useEffect(()=>{
  numberRed
},[numberRed])
const VisibleNumberMinusRed = () => {
  audioClick();
  if(numberRed==0)return;
  animateNumberRed.resetAnimation();
 Animated.timing( animateNumberRed,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("red")
  setNumberRed(numberRed-1)
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
  clickElementColor.push("blue")
  setNumberBlue(numberBlue+1)
}
const VisibleNumberMinusBlue = () => {
  playSound();
  if(numberBlue==0)return;
  animateNumberBlue.resetAnimation();
 Animated.timing( animateNumberBlue,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("blue")
  setNumberBlue(numberBlue-1)
}

const VisibleNumberPlusYellow = () => {
  playSound();
  animateNumberYellow.resetAnimation();
 Animated.timing( animateNumberYellow,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("yellow")
  setNumberYellow(numberYellow+1)
}
const VisibleNumberMinusYellow = () => {
  playSound();
  if(numberYellow==0)return;
  animateNumberYellow.resetAnimation();
 Animated.timing( animateNumberYellow,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("yellow")
  setNumberYellow(numberYellow-1)
}

const VisibleNumberPlusGreen = () => {
  playSound();
  animateNumberGreen.resetAnimation();
 Animated.timing( animateNumberGreen,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("green")
  setNumberGreen(numberGreen+1)
}
const VisibleNumberMinusGreen = () => {
  playSound();
  if(numberGreen==0)return;
  animateNumberGreen.resetAnimation();
 Animated.timing( animateNumberGreen,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("green")
  setNumberGreen(numberGreen-1)
}

const VisibleNumberPlusGrey = () => {
  playSound();
  animateNumberGrey.resetAnimation();
 Animated.timing( animateNumberGrey,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("grey")
  setNumberGrey(numberGrey+1)
}
const VisibleNumberMinusGrey = () => {
  playSound();
  if(numberGrey==0)return;
  animateNumberGrey.resetAnimation();
 Animated.timing( animateNumberGrey,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("grey")
  setNumberGrey(numberGrey-1)
}

const VisibleNumberPlusBlack = () => {
  playSound();
  animateNumberBlack.resetAnimation();
 Animated.timing( animateNumberBlack,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("black")
  setNumberBlack(numberBlack+1)
}
const VisibleNumberMinusBlack = () => {
  playSound();
  if(numberBlack==0)return;
  animateNumberBlack.resetAnimation();
 Animated.timing( animateNumberBlack,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("black")
  setNumberBlack(numberBlack-1)
}

const VisibleNumberPlusWhite = () => {
  playSound();
  animateNumberWhite.resetAnimation();
 Animated.timing( animateNumberWhite,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("white")
  setNumberWhite(numberWhite+1)
}
const VisibleNumberMinusWhite = () => {
  playSound();
  if(numberWhite==0)return;
  animateNumberWhite.resetAnimation();
 Animated.timing( animateNumberWhite,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("white")
  setNumberWhite(numberWhite-1)
}
const VisibleNumberPlusBrown = () => {
  playSound();
  animateNumberBrown.resetAnimation();
 Animated.timing( animateNumberBrown,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.push("brown")
  setNumberBrown(numberBrown+1)
}
const VisibleNumberMinusBrown = () => {
  playSound();
  if(numberBrown==0)return;
  animateNumberBrown.resetAnimation();
 Animated.timing( animateNumberBrown,{
    toValue: 100,
    duration: 800,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start()
  clickElementColor.pop("brown")
  setNumberBrown(numberBrown-1)
}
useEffect(()=>{
  if(isTrueFalse === true){
    
    navigation.navigate("MessageGameResultat")
    
  }else{
    setLevel(0)
  }
},[isTrueFalse])

const isFocused = useIsFocused();
useEffect(()=>{
  if(isFocused === true){
    clickElementColor= [];
    setLevel(1)
    
  }else{
    setLevel(0)
  }
},[isFocused])
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/balls.png')} resizeMode="cover" style={styles.containerImg}> 
        <Timer startTimer={elementState} level={level} clickElementMass={clickElementColor} />
        <ScrollView style={styles.ScrollView} persistentScrollbar={true}>
         <View  style={styles.MainPageMain}>
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenRed}]}>{String(numberRed)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusRed()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "red"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusRed()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "red"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View>
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBlue}]}>{String(numberBlue)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusBlue()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "blue"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=>VisibleNumberMinusBlue()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "blue"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenYellow}]}>{String(numberYellow)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusYellow()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "yellow"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusYellow()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "yellow"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenGreen}]}>{String(numberGreen)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusGreen()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "green"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusGreen()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "green"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenGrey}]}>{String(numberGrey)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusGrey()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "grey"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusGrey()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "grey"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBlack}]}>{String(numberBlack)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusBlack()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "black"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusBlack()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "black"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenWhite}]}>{String(numberWhite)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusWhite()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "white"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusWhite()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "white"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View> 
           <View style={styles.containerItems} >
            <Animated.Text   style={[styles.elemItemSumm,{top: interpolateHiddenBrown}]}>{String(numberBrown)}</Animated.Text>
              <View style={[styles.containerElemItems, ]}>
                <Pressable
                  onPress={()=> VisibleNumberPlusBrown()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "brown"
                    },styles.elemItemsPlus]}>
                  <Text style={[styles.elemItemsPlus]} on>+</Text>
                </Pressable>
                <Pressable
                  onPress={()=> VisibleNumberMinusBrown()}
                  style={({ pressed }) => [
                    {backgroundColor: pressed
                      ? '#FFDEAD'
                      : "brown"
                    },styles.elemItemMinus]}>
                  <Text style={[styles.elemItemMinus,]}>-</Text>
                </Pressable>
              </View>
           </View>  
          <Button title="назад" onPress={() => navigation.goBack()}></Button>
          </View>
       </ScrollView>
        <AlertTextMission text={'ball'}/>
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
        margin: 10
      },
    containerElemItems:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 93,
      height: 93,
      borderRadius: 50,
      elevation: 5,
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
      borderBottomColor: '#8B4513',
      borderBottomWidth: 1,
      color: '#8B4513',
      textShadowRadius: 1,
      textShadowColor: '#BC8F8F',
      textShadowOffset: { width: 0.5, height: 0.5}
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
        color: '#8B4513',
        textShadowRadius: 1,
        textShadowColor: '#BC8F8F',
        textShadowOffset: { width: 0.5, height: 0.5 }
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