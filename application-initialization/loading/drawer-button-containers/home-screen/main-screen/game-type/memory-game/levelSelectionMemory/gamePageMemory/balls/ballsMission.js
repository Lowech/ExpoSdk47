import * as React from 'react';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, Button,ImageBackground } from 'react-native';
import SvgBalls from './svg/svgBalls';

import { useSelector, useDispatch } from 'react-redux';
import { nameGame,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../../../../redux/counterSlice';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';

let massElementColor= ["red","blue","yellow","green","grey","black","white","brown"];
let massNull=[];
let massElementNew=[]; 
  

export default  function Balls({navigation}) {
  
  const isFocused = useIsFocused();
  const [itapGames, setItapGames] = useState('ballFiguresThree');
  const [elementState, setElementState] = useState();
  const [massColor, setMassColor] = useState();
  const numberLevel = useSelector(state => state.counter.numberLevel);

  useEffect(()=>{
  
    if(isFocused === true){
      setItapGames('ballFiguresThree');
      massNull=[];
      massElementNew=[];
      
    setMassColor(()=>{
      for (let it=0; it <= 16; it++) {
        
        if(it <= 12-numberLevel){
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
      setTimeout(()=>{setElementState("start")},5000)
      setTimeout(()=>{navigation.navigate('BallsDecision')},21000)
    }
    else{
      setElementState("stop");
    }
    
  },[isFocused])
  
  useEffect(()=>{
    massElementNew=[];
    if(isFocused === false){
      
        massNull.forEach(element => {
          
      if(element.props.children){
        
        massElementNew.push(element.props.children.props.style) 
        
      }
    });
    
    setItapGames('ballFiguresTwo')
  }
  },[isFocused])
 
  
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/balls.png')} resizeMode="cover" style={styles.containerImg}> 
        
        
        <View style={styles.container}>
          <View  style={styles.MainPageMain}>
            {massColor}
         
         
          <Button title="назад" onPress={() => navigation.navigate('BallsDecision')}></Button>
          </View>
          </View>
          <AlertTextMission hiden={"8"} text={'1'}/>
          <Timer startTimer={elementState} ballFiguresTwo={itapGames} massElement={massElementNew} />
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
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent', 
    },
    elem:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
      width: 60,
      height: 60,
      borderRadius: 50,
      
    },
    elemItems:{
      width: 40,
      height: 40,
      borderRadius: 50,
      margin: 10,
    }
  });