import * as React from 'react';
import { StyleSheet, View,} from 'react-native';
import LevelSelectionLogic from './levelSelectionLogic'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import MessageGameResultat from '../../message-game-resultat/messageGameResultat';
import WordMission from './gamePageLogic/word/wordMission';
import Menu from '../../../../menu/menu';
import PointsName from '../../../../user-data/PointsName';

const Stack = createStackNavigator();

export default  function LevelSelectionNavigation({navigation}) {
    
  return (
    <View  style={styles.MainPageMain}>
      <Stack.Navigator initialRouteName="levelSelectionLogic" screenOptions={{  
        headerMode: 'screen',
        headerStyle: { height: 32,},
        headerTransparent: true ,
        headerTitle: " ",
        headerLeftContainerStyle: {left: 0},
        headerRight:(props) => (
          <PointsName/>),
        headerLeft:(props) => (
          <Menu menu={navigation}/>),
      }}>
        <Stack.Screen  name="WordMission" component={WordMission} options={{headerShown: false, ...TransitionPresets.FadeFromBottomAndroid}}/>
        
        <Stack.Screen  name="levelSelectionLogic" component={LevelSelectionLogic}/>  
        <Stack.Screen  name="MessageGameResultat" component={MessageGameResultat} options={{headerShown: false,...TransitionPresets.FadeFromBottomAndroid}}/>
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