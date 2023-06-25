import * as React from 'react';
import PointsName from './user-data/PointsName';
import MenuCentr from './menuCentr';
import { StyleSheet, View, Text,Pressable,ImageBackground } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

export default  function MenuContainer(props) {
  const menuCenterVisible = useSelector(state => state.counter.menuCenterVisible); 
  
  if(menuCenterVisible){
    return (
    <View style={styles.MainPageMain}>
      
      <MenuCentr linkGo={props}/>
      <PointsName />
      
    </View>
  );
} else{
  return (
    <View style={styles.MainPageMain}>
    
      <PointsName />
      
    </View>
  )
  }
}
  const styles = StyleSheet.create({
    MainPageMain:{
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      width: 'auto',
      height: '100%',
      
    }
  });