import * as React from 'react';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, Button,ImageBackground, Dimensions } from 'react-native';
import MassWord from './massWord';

import { useSelector, useDispatch } from 'react-redux';
import { nameGame,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../../../../redux/counterSlice';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';

let massElementColor= ["red","blue","yellow","green","grey","black","white","brown"];
let massNull=[];
let massElementNew=[]; 
let WidWinnd=  Dimensions.get('window');
 

export default  function WordMission({navigation}) {
  
  const isFocused = useIsFocused();
  const [level, setLevel] = useState(3);
  const [elementState, setElementState] = useState();
  const [massColor, setMassColor] = useState();
  const [colBlock, setColBlock] = useState(27);
  useEffect(()=>{
    if(WidWinnd.width > 760){
      return setColBlock( 27);
    }else{
     return  setColBlock( 13);
    }
  },[WidWinnd]);

  const numberLevel = useSelector(state => state.counter.numberLevel);

  const numberInMass = [0,1,2,3,4,5,6,7,8,9,10];

//console.log(Math.floor(Math.random().toString()*numberInMass.length))
  useEffect(()=>{
   
    if(isFocused === true){
      setLevel(3);
      massNull=[];
      massElementNew=[];
      
    setMassColor(()=>{
      for (let it=0; it <= colBlock; it++) {
        
        if(it <= colBlock - 5 -numberLevel){
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}
              style={[styles.elem]}>
            </View> 
          )
        }
        if(it > colBlock - 4 - numberLevel){
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}style={styles.elem}> 
                <MassWord key={Math.random(massElementColor.toString().length*1)}
              style={massElementColor[Math.floor(Math.random().toString()*massElementColor.length)]}/> 
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
    
  },[isFocused])
  
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
          
            {massColor}
         
            
          <Button title="назад" onPress={() => navigation.navigate('BallsDecision')}></Button>
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
      width: '95%',
      height: '90%',
      backgroundColor: 'transparent', 
    },
    elem:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 5,
      width: 230,
      height: 30,
      backgroundColor: 'blue', 
      
    },
    elemItems:{
      width: 40,
      height: 40,
      borderRadius: 50,
      margin: 10,
    },
    Block:{
      display: 'flex',
      width: 70,
      height: 40,
      backgroundColor: 'blue', 
      left: '95%'

    }
  });