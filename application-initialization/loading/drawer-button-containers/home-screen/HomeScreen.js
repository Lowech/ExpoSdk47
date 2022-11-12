import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, View,Text,Alert} from 'react-native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators  } from '@react-navigation/stack';
import MainScreen from './main-screen/mainScreen';
import LevelSelectionNavigationMemory from './main-screen/game-type/memory-game/levelSelectionMemory/levelSelectionNavigationMemory';
import LevelSelectionNavigationLogic from './main-screen/game-type/logic-game/levelSelectionLogic/levelSelectionNavigationLogic';
import Menu from './menu/menu';
import PointsName from './user-data/PointsName';


  const Stack = createStackNavigator();
  
export default function HomeScreen({navigation}) {
  const [alert, setAlert] = useState('');
 
  let user={
    id: 'one',
    name: "nika"
  }
  
 async function goLink(){
    
   await fetch('http://192.168.0.102:3001', {
    	method: 'POST',
    	headers: {
      'Content-Type': 'application/json; charset=UTF-8;'
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.text())
    .then((json) => {
    
     console.log(json)
      setAlert(json);
    })
    .catch((error) => {
      setAlert(error);
    });
 
  }
  //<Text style={styles.Button} onPress={goLink}>push</Text>
  //<Text style={styles.Text} >{alert}</Text>
  return (
    <View style={styles.HomeScreen}>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTitle: " ",
        headerStyle: { height: 32,},
        headerLeftContainerStyle: {left: -80},
        headerTransparent: true ,
        headerRight:() => (
          <PointsName/>),
        headerLeft:() => (
          <Menu menu={navigation}/>),
      }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="levelSelectionNavigationMemory" 
          component={LevelSelectionNavigationMemory} 
          options={{headerShown: false,...TransitionPresets.ModalPresentationIOS,}}/>
        <Stack.Screen
          name="levelSelectionNavigationLogic" 
          component={LevelSelectionNavigationLogic} 
          options={{headerShown: false,...TransitionPresets.ModalPresentationIOS,}}/>
      </Stack.Navigator>
    
    </View>
  )};

  const styles = StyleSheet.create({
    HomeScreen:{
      height: '100%',
    },
    MainPageHeader: {
      justifyContent: 'space-between',
      width: '100%',
      height: '10%',
      backgroundColor: 'yellow',
      flexDirection: 'row',
    },
    Button: {
      width: 150,
      height: 50,
      backgroundColor: 'yellow',
    },
    Text: {
      width: 150,
      height: 50,
      backgroundColor: 'white',
    }
  });