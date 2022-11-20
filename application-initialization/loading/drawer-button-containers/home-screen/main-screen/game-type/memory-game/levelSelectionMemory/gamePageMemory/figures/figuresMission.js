import * as React from 'react';
import {useState,useEffect} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View,ImageBackground } from 'react-native';
import SvgFiguresCircle from './svg/SvgFiguresCircle';
import SvgFiguresStar from './svg/SvgFiguresStar';
import SvgFiguresRect from './svg/SvgFiguresRect';
import SvgFiguresTriangle from './svg/SvgFiguresTriangle';
import SvgFiguresRectangle from './svg/SvgFiguresRectangle';
import SvgFiguresCylinder from './svg/SvgFiguresCylinder';
import SvgFiguresRhombus from './svg/SvgFiguresRhombus';
import SvgFiguresPrism from './svg/SvgFiguresPrism';

import { useSelector} from 'react-redux';

import AlertTextMission from '../../../../alertFail/alertTextMission/alertTextMission';
import TimerStart from '../../../../timerStart';
import Timer from '../../../../timer';

let massElementColor= [<SvgFiguresPrism/>,<SvgFiguresRhombus/>,<SvgFiguresRect/>,<SvgFiguresCircle/>,<SvgFiguresStar/>,<SvgFiguresTriangle/>,<SvgFiguresRectangle/>,<SvgFiguresCylinder/>];
let massNull=[];
let massElementNew=[]; 

export default  function Figures({navigation}) {
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
      for (let it=0; it <= 30; it++) {
        
        if(it <= 28-numberLevel){
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}
              style={[styles.elem]}>
            </View> 
          )
        }
        else{
          massNull.push(
            <View key={Math.random(massElementColor.toString().length*1)}style={styles.elem}> 
                {massElementColor[Math.floor(Math.random().toString()*massElementColor.length)]}
             
            </View> 
          );
        }
      }
      return massNull.sort(() => Math.random() - 0.4); 
    })
      setTimeout(()=>{setElementState("start")},5000)
      setTimeout(()=>{navigation.navigate('FiguresDecision')},21000)
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
        
        massElementNew.push(String(element.props.children.type)) 
        
      }
    });
    
    setItapGames('ballFiguresTwo')
  }
  },[isFocused])
  
    return (
      <ImageBackground source={require('../../../../../../../../../../assets/img/figuresFon.png')} resizeMode="cover" style={styles.containerImg}> 
        <View style={styles.container}>
          <View  style={styles.MainPageMain}>
            {massColor}
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
    elem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 70,
      margin: 10
    }
  });