import * as React from 'react';
import Authorization from './authorization/authorization';
import PasswordRecovery from './authorization/password-recovery/PasswordRecovery';

import { StyleSheet, View} from 'react-native';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import DrawerButtonContainers from '../../application-initialization/loading/drawer-button-containers/DrawerButtonContainers';

const Stack = createStackNavigator();

export default  function Loading(props) {
  
  if(!props.rezult){
    return (
    <View style={styles.MainPageMain}>
      <Stack.Navigator initialRouteName="Authorization" screenOptions={{headerShown: false}} >
        <Stack.Screen  name="Authorization" component={Authorization} />   
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false,...TransitionPresets.FadeFromBottomAndroid}}/>
      </Stack.Navigator>
    </View> 
  ); 
  }
  else{
    return (
    <View style={styles.MainPageMain}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerButtonContainers" component={DrawerButtonContainers} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{headerShown: false}}/>
      </Stack.Navigator>
    </View>
    );
  }
 
  }

  const styles = StyleSheet.create({
    MainPageMain:{
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: '#BC8F8F', 
    }
  });