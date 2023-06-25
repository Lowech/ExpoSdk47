import * as React from 'react';
import { StyleSheet, View,} from 'react-native';
import LevelSelectionLogic from './levelSelectionLogic'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import MessageGameResultat from '../../message-game-resultat/messageGameResultat';
import WordMission from './gamePageLogic/word/wordMission';
import SortingMission from './gamePageLogic/sorting/sortingMission';
import ClickGoBack from '../../../menu/clickGoBack';
import PointsName from '../../../../main-screen/menu/user-data/PointsName';

const Stack = createStackNavigator();


export default  function LevelSelectionNavigationLogic({navigation}) {
 
  return (
    <View  style={styles.MainPageMain}>
      <Stack.Navigator
      initialRouteName="levelSelectionLogic"
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
        <Stack.Screen  name="levelSelectionLogic" component={LevelSelectionLogic}/>  
        <Stack.Screen  name="WordMission" component={WordMission} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}}/>
        <Stack.Screen  name="SortingMission" component={SortingMission} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}}/>
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