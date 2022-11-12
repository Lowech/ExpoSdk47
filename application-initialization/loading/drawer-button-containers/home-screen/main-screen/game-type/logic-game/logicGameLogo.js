import React from 'react';
import { StyleSheet, TouchableOpacity, View,  } from 'react-native';
import ImgLogick from './levelSelectionLogic/svg/ImgLogick';

export default function LogicGameLogo(props) {
const styles = StyleSheet.create({
  LogicGameLogo:{
    display: 'flex',
    width: '30%',
    height: '30%',
    backgroundColor: 'rgba(250, 235, 215,0.2)',
    borderRadius: 20,
    backgroundColor: 'rgba(250, 235, 215,0.2)',
    borderRadius: 20,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.5)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0,0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.3)",
  }
});
return (
    <TouchableOpacity style={styles.LogicGameLogo} onPress={() =>props.linkGo.navigate('levelSelectionNavigationLogic')}>
      <ImgLogick/>
    </TouchableOpacity>
);}
     