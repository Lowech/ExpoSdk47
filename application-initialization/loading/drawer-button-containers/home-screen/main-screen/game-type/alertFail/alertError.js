import React,{ useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { positionStatusRelative } from '../../../../../../../redux/counterSlice';

export default function AlertError() {
  const dispatch = useDispatch()
  const positionStatusState = useSelector(state => state.counter.positionStatus);
 
  function positionStatus(){
    dispatch(positionStatusRelative())
  }
const styles = StyleSheet.create({
  menuButtonСontainer:{
    display: "none",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    width: 300,
    height: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(128, 128, 128,0.5)',
    position: positionStatusState,
    zIndex: 99999,
    right: -20,
    bottom: 60,
    paddingHorizontal: 10,
  },
  MessageResultat:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textShadowRadius: 1,
    textShadowColor: '#696969',
    textShadowOffset: { width: 2, height: 2 },
    width: 280,
    height: 80,
    paddingHorizontal: 10,
    marginTop: 10,    
  },
  containerOption:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-end",
    width: 280,
    height: 40,    
  },
  button:{ 
    backgroundColor: '#7B68EE',
    width: 60,
    height: 30,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(128, 128, 128,0.9)'
  }
});
    
  return (
    <View style={styles.menuButtonСontainer}>
      <Text style={styles.MessageResultat}>У вас закончились timbon посмотреть рекламу</Text>
        <View style={styles.containerOption}>
          <Pressable
            onPress={() => positionStatus()}
             style={({ pressed }) => [
              {padding: pressed
                  ? 5
                  : 0
              },styles.button,{paddingLeft: 8}]}>
          </Pressable>    
          <Pressable
            onPress={() => navigation.navigate('Balls')}
             style={({ pressed }) => [
               {padding: pressed
                   ? 5
                   : 0
               },styles.button]}>
          </Pressable>
        </View>
    </View>
  );
}