import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, View,Text,Alert} from 'react-native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators,HeaderStyleInterpolators,TransitionSpecs    } from '@react-navigation/stack';
import MainScreen from './main-screen/mainScreen';
import LevelSelectionNavigationMemory from './main-screen/game-type/memory-game/levelSelectionMemory/levelSelectionNavigationMemory';
import LevelSelectionNavigationLogic from './main-screen/game-type/logic-game/levelSelectionLogic/levelSelectionNavigationLogic';
import Menu from './main-screen/menu/menu';
import MenuCentr from './main-screen/menu/menuCentr';

import PointsName from './main-screen/menu/user-data/PointsName';
import Progress from './progress-page/progress';
import Correspondence from './correspondence/correspondence';
import Authorization from '../authorization/authorization';
import Setting from './setting/setting';
import Rang from './ranks/ranks';


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
        headerTitleAlign: "center",
        headerTitle:() => (
          <MenuCentr menu={navigation}/>),
        headerStyle: { height: 32},
        
        
        headerTransparent: true ,
        headerRight:() => (
          <PointsName/>),
        headerLeft:() => (
          <Menu menu={navigation}/>),
          ...TransitionPresets.FadeFromBottomAndroid
      }}>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerLeftContainerStyle:{top: -32}}}/>
        <Stack.Screen
          name="levelSelectionNavigationMemory" 
          component={LevelSelectionNavigationMemory} 
          options={{headerShown: false}}/>
        <Stack.Screen
          name="levelSelectionNavigationLogic" 
          component={LevelSelectionNavigationLogic} 
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Progress" 
          component={Progress} 
          options={{headerTitleContainerStyle:{top: -32}}}/>
        <Stack.Screen
          name="Correspondence" 
          component={Correspondence} 
          options={{headerTitleContainerStyle:{top: -32}}}
         />
        <Stack.Screen
          name="Authorization" 
          component={Authorization} 
          options={{headerTitleContainerStyle:{top: -32}}}/>
        <Stack.Screen
          name="Setting" 
          component={Setting} 
          options={{headerTitleContainerStyle:{top: -32}}}
          />
        <Stack.Screen
          name="Rang" 
          component={Rang} 
          options={{headerTitleContainerStyle:{top: -32}}}
          />
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