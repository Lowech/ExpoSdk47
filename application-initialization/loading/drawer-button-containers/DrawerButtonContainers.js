import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import * as React from 'react';
import HomeScreen from './home-screen/HomeScreen';
import Progress from './progress-page/progress';
import Correspondence from './correspondence/correspondence';
import Authorization from '../authorization/authorization';
import Setting from './setting/setting';
import MessageGameResultat from '../drawer-button-containers/home-screen/main-screen/game-type/message-game-resultat/messageGameResultat';

const Drawer = createDrawerNavigator();

export default function DrawerButtonContainers() {
  
    return (
        <Drawer.Navigator 
      
        screenOptions={{
          drawerStyle: {
          backgroundColor: '#008B8B',
          width: '40%',  
        },
        drawerLabelStyle: {fontSize: 16},
        drawerActiveTintColor:'#00FFFF',
        drawerInactiveTintColor: '#D2B48C',
        }} 
          initialRouteName="HomeScreen" >
        <Drawer.Screen  name="HomeScreen" component={HomeScreen}  options={{headerShown: false, swipeEnabled: false}}/>  
        <Drawer.Screen name="Progress" component={Progress} options={{headerShown: false}}/>
        <Drawer.Screen name="Correspondence" component={Correspondence} options={{headerShown: false}}/>
        <Drawer.Screen name="Authorization" component={Authorization} options={{headerShown: false}} />
        <Drawer.Screen name="Setting" component={ Setting} options={{headerShown: false}}/>
        <Drawer.Screen name="MessageGameResultat" component={ MessageGameResultat} options={{headerShown: false}}/>
      </Drawer.Navigator>
    );
  }