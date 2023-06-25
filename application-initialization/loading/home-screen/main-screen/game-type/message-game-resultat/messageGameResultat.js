import { useState,useEffect,useRef } from 'react';
import { StyleSheet, Text, View, Pressable,ImageBackground,Animated,Easing } from 'react-native';
import {useIsFocused,StackActions  } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {audioGameStateСhange,audioLevelСhange, intermediateResultMemoryPush,numberLevelChangePlus,numberLevelChangeMinus,stateRezultatZero,numberGameСhange,intermediateResultChange } from '../../../../../../redux/counterSlice';


import NextLevelSvg  from './nextLevelSvg';
import LoginSvg  from '../../../../authorization/loginSvg';
import ButtonRefrechSvg  from './buttonRefrechSvg';
import audioClick from '../../../../../../audio-components/audioClick.js';
import FonText from './fonText';
  
  
export default function MessageGameResultat({navigation}) {

//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
} 
const isFocused = useIsFocused();
const dispatch = useDispatch();
//получения резульатов вычасления пройденного уровня
  const rezultGame = useSelector(state => state.counter.stateRezultat);
//промежуточные очки во время уровня
  const intermediateResult = useSelector(state => state.counter.intermediateResult);
//названия уровня
  const nGame = useSelector(state => state.counter.nameGame); 
//номер уровня
const numberLevel = useSelector(state => state.counter.numberLevel);
//отображение кнопки слеющий уровень
  const [hiddenVisible, setHiddenVisible] = useState('flex');
//начальные значения отображения результата
  const [textRezult, setTextRezult] = useState();
  const [textColorRezult, setTextColorRezult] = useState("#6495ED");
//массив  обозначения номера уровня
  const [levelNextMass, setLevelNextMass] = useState();
//анимация количества очков
  const fadeAnim = useRef(new Animated.Value(-100)).current;  
//изминения цвета и значения текста результата уровня
  useEffect(()=>{
    
      if(rezultGame === 'true' ){
        setTextRezult('Победа');
        setTextColorRezult("#00FFFF"); 
      }
      else{
        setTextRezult('Проигрыш');
        setTextColorRezult("#FF0000");
      }
//скрытие кнопки следующий уровень
      if(rezultGame === 'true' && numberLevel != 10){
        
        setHiddenVisible('flex'); 
      }
      else{
        
        setHiddenVisible("none");
      }
 //анимация количества очков
 Animated.timing( fadeAnim,{
  toValue: 0,
  duration: 2000,
  easing: Easing.bounce,
  useNativeDriver: false
}).start()
 //      
  },[])
 ////анимация количества очков
 
//
  function goHome(){
//музыка
    dispatch(audioLevelСhange(false));
    dispatch(audioGameStateСhange(true));
    audioStatus();
//переход на начальную страницу
//navigation.dispatch(StackActions.popToTop());
    navigation.navigate('MainScreen');
//сброс значений предыдущего уровня
    dispatch(intermediateResultMemoryPush(''));
    dispatch(stateRezultatZero());
    dispatch(intermediateResultChange(0));
//сброс значений к начальному уровню
    dispatch(numberLevelChangeMinus());
//перезапуск таймера и сообщения уровня
    dispatch(numberGameСhange(1));
  }

  function goGameReturn(){
    audioStatus();
//сброс значений предыдущего уровня
    dispatch(intermediateResultMemoryPush(''));
    dispatch(stateRezultatZero());
//остановка появления сообщения уровня и включения таймера сразу
    dispatch(numberGameСhange(2));
//переход к уровню
    if(nGame === 'ball'){
      navigation.navigate('Balls');
    }
    if(nGame === 'figures'){
      navigation.navigate('Figures');
    }
    if(nGame === 'wordMission'){
      navigation.navigate('WordMission');
    }
    if(nGame === 'sortingMission'){
      navigation.navigate('SortingMission');
    }
  }
  function goNextLevel(){
    audioStatus();
//сброс значений предыдущего уровня
    dispatch(intermediateResultMemoryPush(''));
    dispatch(stateRezultatZero());
//остановка появления сообщения уровня и включения таймера сразу
    dispatch(numberGameСhange(2));
//прибавления сложности
    dispatch(numberLevelChangePlus());
//переход к уровню
    if(nGame === 'ball'){
      navigation.navigate('Balls');
    }
    if(nGame === 'figures'){
      navigation.navigate('Figures');
    } 
    if(nGame === 'wordMission'){
      navigation.navigate('WordMission');
    }  
    if(nGame === 'sortingMission'){
      navigation.navigate('SortingMission');
    }
  }
  
 
    const styles = StyleSheet.create({
      menuButtonСontainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#8bc19d',
      },
      MessageResultat:{
        textAlign: "center",
        fontSize: 40,
        fontWeight: 'bold',
        color: textColorRezult,
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 3 },
        width: "auto",
        height: 60,
        
      },
      containMessageResultat:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end",
        width: 210,
        height: 100,
        marginTop: 10
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
      },
      levelNextContainer:{ 
        position: "absolute",
        top: 30,
        left: 30,
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: "auto",
        height: "auto",
      },
      levelNextElem:{ 
        backgroundColor: '#FF4500',
        width: 10,
        height: 30,
        margin: 5,
        borderRadius: 5,
        borderLeftWidth: 0.5,
        borderLeftColor: "rgba(255, 255, 255,0.5)",
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255,0.5)",
        borderRightWidth: 1,
        borderRightColor: "rgba(0, 0, 0,0.5)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0,0.5)",
      },
      totalRezultView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        height: "auto",
        paddingBottom: 80,
        paddingTop: 50
      },
      totalRezult: {
        paddingLeft: 30,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00FF7F',
        width: 100,
        height: "auto",
        backgroundColor: 'rgba(160, 82, 45,0.9)',
        borderTopWidth: 3,
        borderTopColor: "#8B4513",
        borderTopLeftRadius: 20,
        borderLeftWidth: 3,
        borderLeftColor: "#8B4513",
        borderBottomWidth: 3,
        borderBottomColor: "#00FF7F",
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 1 },
        
      },
    textGradient:{
      position: 'absolute',
      //zIndex: -1,
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      borderRadius: 10,
      
    }
  });
    
useEffect(()=>{
    switch (numberLevel) {
      case 3:
        //выводим элементы определения номера уровня
        if(rezultGame === 'true'){
          setLevelNextMass(
            <View style={[styles.levelNextContainer]}>
              <View style={[styles.levelNextElem]}></View>
            </View>);
        }
      break;
      case 4:
        //выводим элементы определения номера уровня
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 5:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 6:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 7:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 8:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 9:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
      case 10:
        setLevelNextMass(
          <View style={[styles.levelNextContainer]}>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
            <View style={[styles.levelNextElem]}></View>
          </View>);
      break;
    }
  },[numberLevel])
    return ( 
      <ImageBackground source={require('../../../../../../assets/img/alertRezult.jpg')} resizeMode="cover" style={styles.menuButtonСontainer}>
        {levelNextMass}
        <View  style={[styles.containMessageResultat]}>
        <View style={styles.textGradient}>
              <FonText />
          </View>
          <Text style={styles.MessageResultat}>{textRezult}
          
          </Text>
          
          
        </View>
        <Animated.View style={[styles.totalRezultView,{right: fadeAnim}]}>
          <Text style={styles.totalRezult}>{intermediateResult}</Text>
        </Animated.View>
          <View style={styles.containerOption}>
            <View style={styles.containerOptionItem}>
            
              <Pressable
                onPress={()=>goHome()}
                  style={({ pressed }) => [
                  { padding: pressed ? 5 : 0 },
                  styles.menuButton,{paddingLeft: 8}]}>
             
                <LoginSvg/>   

              </Pressable>
            </View>
            <View style={styles.containerOptionItem}>
       
              <Pressable
                onPress={()=>goGameReturn()}
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
                onPress={()=> goNextLevel()}
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
 