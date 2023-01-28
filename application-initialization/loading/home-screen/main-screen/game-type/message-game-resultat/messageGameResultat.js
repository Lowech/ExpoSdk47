import { useState,useEffect,useRef } from 'react';
import { StyleSheet, Text, View, Pressable,ImageBackground,Animated } from 'react-native';
import {useIsFocused,StackActions  } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {audioGameStateСhange,audioLevelСhange, intermediateResultMemoryPush,numberLevelChangePlus,numberLevelChangeMinus,stateRezultatZero,numberGameСhange } from '../../../../../../redux/counterSlice';


import NextLevelSvg  from './nextLevelSvg';
import LoginSvg  from '../../../../authorization/loginSvg';
import ButtonRefrechSvg  from './buttonRefrechSvg';
import audioClick from '../../../../../../audio-components/audioClick.js';

  
  
export default function MessageGameResultat({navigation}) {

//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
} 
const dispatch = useDispatch();
//получения резульатов вычасления пройденного уровня
  const rezultGame = useSelector(state => state.counter.stateRezultat);
//названия уровня
  const nGame = useSelector(state => state.counter.nameGame); 
//номер уровня
const numberLevel = useSelector(state => state.counter.numberLevel);
//отображение кнопки слеющий уровень
  const [hiddenVisible, setHiddenVisible] = useState('flex');
//начальные значения отображения результата
  const [textRezult, setTextRezult] = useState();
  const [textColorRezult, setTextColorRezult] = useState("#6495ED");
  
//изминения цвета и значения текста результата уровня
  useEffect(()=>{
    
      if(rezultGame === 'true' ){
        setTextRezult('Победа');
        setTextColorRezult("#00FA9A"); 
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
  },[])
 //
  function goHome(){
//музыка
    dispatch(audioLevelСhange(false));
    dispatch(audioGameStateСhange(true));
    audioStatus();
//переод на начальную страницу
navigation.dispatch(StackActions.popToTop());
    //navigation.navigate('MainScreen');
//сброс значений предыдущего уровня
    dispatch(intermediateResultMemoryPush(''));
    dispatch(stateRezultatZero());
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

    return (
      <ImageBackground source={require('../../../../../../assets/img/alertRezultat.png')} resizeMode="cover" style={styles.menuButtonСontainer}>
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
 