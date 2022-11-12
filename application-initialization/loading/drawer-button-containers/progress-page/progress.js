import * as React from 'react';
import { useState, useRef } from 'react';

import { StyleSheet, Text, View, TouchableOpacity,FlatList ,Animated,ImageBackground } from 'react-native';
import  ProgressList  from './ProgressList';

export default  function Progress() {
  
    const DATA = [
        {
          id: "больше всех побед",
          title: "больше всех побед",
        },
        {
          id: "больше всех играет",
          title: "больше всех играет",
        },
        {
          id: "самая хорошая память",
          title: "самая хорошая память",
        },
        {
          id: "самый смышленый",
          title: "самый смышленый",
        },
      ];

      const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity activeOpacity={1} onPressIn={onPress} style={[styles.containerItemsItem, backgroundColor  ]}>
          <Text  style={[styles.containerItemsItemText, textColor]}>{item.title}</Text>
        </TouchableOpacity >
      );

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "transparent";
        const color = item.id === selectedId ? 'white' : 'rgba(105, 105, 105,0.8)';
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            textColor={{ color }}
            backgroundColor={{ backgroundColor }}
          />
        );
      };
   
    const [selectedId, setSelectedId] = useState("больше всех побед");
    const fadeAnim = useRef(new Animated.Value(-50)).current;

    
      Animated.timing(fadeAnim, {
        toValue: 45,
        duration: 1000,
        useNativeDriver: false
      }).start() 

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: '#6e3b6e',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
    
  },
  containerItems:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '34%',
    height: 'auto',
    backgroundColor: 'transparent', 
    
  },
  containerItemsItem:{
    color: 'white',
    padding: 10,
    height: 'auto',
    width: '100%',
    
  },
  containerItemsItemText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset:  { width: 1, height: 1 },
    textAlign: 'left',
    textTransform: 'uppercase',
    width: 260,
            
  }
});
    
    return (
      <ImageBackground source={require('../../../../assets/img/progress.png')} resizeMode="cover" style={styles.container}>
        <View style={styles.containerItems}>
         <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          horizontal={false}/> 
        </View>
        <ProgressList value={selectedId}/>
      </ImageBackground>
    );
  }
  