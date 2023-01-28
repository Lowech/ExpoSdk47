import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import * as React from 'react';
import HomeScreen from './home-screen/HomeScreen';
import Progress from './progress-page/progress';
import Correspondence from './correspondence/correspondence';
import Authorization from '../authorization/authorization';
import Setting from './setting/setting';
import Rang from '../drawer-button-containers/ranks/ranks';

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
        defaultStatus = "open" >
        <Drawer.Screen  name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>  
        <Drawer.Screen name="Progress" component={Progress} options={{headerShown: false}}/>
        <Drawer.Screen name="Correspondence" component={Correspondence} options={{headerShown: false}}/>
        <Drawer.Screen name="Authorization" component={Authorization} options={{headerShown: false}} />
        <Drawer.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
        <Drawer.Screen name="Rang" component={Rang} options={{headerShown: false}}/>
      </Drawer.Navigator>
    );
  }