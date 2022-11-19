import * as React from 'react';
import {useState,useEffect,useMemo} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, Button,ImageBackground, Dimensions,Text,Pressable } from 'react-native';
import MassWord from './massWord';

import { useSelector, useDispatch } from 'react-redux';
import { nameGame,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../../../../redux/counterSlice';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';
import { current } from '@reduxjs/toolkit';


let massNull=[];
let massElementNew=[]; 

 

export default  function WordMission({navigation}) {

 
  

  const isFocused = useIsFocused();
  const [level, setLevel] = useState(3);
  const [elementState, setElementState] = useState();
  const [massColor, setMassColor] = useState();
  
  
  const massIsNumber = [0,1,2];
  const [numberMass, setNumberMass] = useState(Math.floor(Math.random().toString()*massIsNumber.length));
  
  

  const numberLevel = useSelector(state => state.counter.numberLevel);

 let it = 0; 

  useEffect(()=>{
    if(numberMass !=undefined){
    
    if(isFocused === true){
      setLevel(3);
      massNull=[];
      massElementNew=[];
      
    setMassColor(()=>{
      
      
      for (; it <= 24; it++) {
        
              
        if(it <= 24 - 8 -numberLevel){
          massNull.push(
            <View key={Math.random(24*1)}
              style={[styles.elem]}>
            </View> 
          )
        }
        if(it > 24 -4 - numberLevel){
          
          massNull.push(
            <View key={Math.random(24*1)}style={styles.elem}> 
                <MassWord colElem={5} numMass={numberMass} key={Math.random(24*1)}
              /> 
            </View> 
          );
        }
      }
      
      return massNull.sort(() => Math.random() - 0.4); 
      
    })
      setTimeout(()=>{setElementState("start")},5000)
      //setTimeout(()=>{navigation.navigate('BallsDecision')},21000)

    }
    else{
      setElementState("stop");
    }
  }
  },[isFocused,numberMass])


  
  useEffect(()=>{
    massElementNew=[];
    if(isFocused === false){
      
        massNull.forEach(element => {
          
      if(element.props.children){
        
        massElementNew.push(element.props.children.props.style) 
        
      }
    });
    
    setLevel(2)
  }
  },[isFocused])
 
 
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/wordFoon.png')} resizeMode="cover" style={styles.containerImg}> 
        
        
        <View  style={styles.container}>
        
          <View  style={styles.MainPageMain}>
         
          <MassWord colElemTrue={level} colElemFalse={1}/>
            
          <Button title="назад" onPress={() => navigation.navigate('levelSelectionLogic')}></Button>
          </View>
          </View>
          <Timer startTimer={elementState} level2={level} massElement={massElementNew} />
          
          <AlertTextMission hiden={"8"} text={'1'}/>
          
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