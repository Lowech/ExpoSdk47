import * as React from 'react';
import { StyleSheet, View,} from 'react-native';
import LevelSelectionMemory from './levelSelectionMemory'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import MessageGameResultat from '../../message-game-resultat/messageGameResultat';
import Balls from './gamePageMemory/balls/ballsMission';
import BallsDecision from './gamePageMemory/balls/ballsDecision';
import Figures from './gamePageMemory/figures/figuresMission';
import FiguresDecision from './gamePageMemory/figures/figuresDecision';
import ClickGoBack from '../../../menu/clickGoBack';
import PointsName from '../../../../main-screen/menu/user-data/PointsName';

const Stack = createStackNavigator();

export default  function LevelSelectionNavigationMemory({navigation}) {
  
  console.log("m")
  return (
    <View  style={styles.MainPageMain}>
      <Stack.Navigator 
      initialRouteName="levelSelectionMemory"
      screenOptions={{  
        headerMode: 'screen',
        headerStyle: { height: 32,},
        headerTransparent: true ,
        headerTitle: " ",
        headerLeftContainerStyle: {left: -35},
        headerRight:(props) => (
          <PointsName/>),
        headerLeft:(props) => (
          <ClickGoBack goBack={navigation}/>),
      }}>
        <Stack.Screen  name="levelSelectionMemory" component={LevelSelectionMemory}/>  
        <Stack.Screen  name="Balls" component={Balls} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}}/>
        <Stack.Screen  name="BallsDecision" component={BallsDecision} options={{headerShown: false,...TransitionPresets.ModalPresentationIOS,}}/>   
        <Stack.Screen  name="Figures" component={Figures} options={{headerShown: false,...TransitionPresets.ModalPresentationIOS}}/>  
        <Stack.Screen  name="FiguresDecision" component={FiguresDecision} options={{headerShown: false,...TransitionPresets.ModalPresentationIOS,}}/>
        <Stack.Screen  name="MessageGameResultat" component={MessageGameResultat} options={{headerShown: false,...TransitionPresets.ModalPresentationIOS}}/>
      </Stack.Navigator>
    </View>
  );
}

  const styles = StyleSheet.create({
    MainPageMain:{
      width: '100%',
      height: '100%',
      backgroundColor: '#00FFFF',  
    },
    
  });