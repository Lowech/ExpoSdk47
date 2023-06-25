import * as React from 'react';
import { useState, useRef,useEffect } from 'react';
import audioClick from '../../../../audio-components/audioClick.js';
import { StyleSheet, Text, View, TouchableOpacity,FlatList ,Animated,ImageBackground } from 'react-native';
import  ProgressList  from './ProgressList';
import { useSelector,useDispatch } from 'react-redux';

export default  function Progress({navigation}) {
//проверка статуса звука
const audioClickStatus = useSelector(state => state.counter.audioClick);
function audioStatus(){
  if(audioClickStatus === true){
    audioClick();
  }
  
}
//    

    const DATA = [
        {
          id: "победоносцы",
          title: "победоносцы",
        },
        {
          id: "неиссякаемый энтузиазм",
          title: "неиссякаемый энтузиазм",
        },
        {
          id: "феноменальная память",
          title: "феноменальная память",
        },
        {
          id: "исключительная сообразительность",
          title: "исключительная сообразительность",
        },
      ];

      const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity activeOpacity={1} onPressIn={onPress} style={[styles.containerItemsItem, backgroundColor  ]}>
          <Text  style={[styles.containerItemsItemText, textColor]}>{item.title}</Text>
        </TouchableOpacity >
      );

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "rgba(105, 105, 105,0.5)" : "transparent";
        const color = item.id === selectedId ? 'white' : 'rgba(222, 184, 135,1)';
        return (
          <Item
            item={item}
            onPress={() => {
              audioStatus();
              setSelectedId(item.id);
            }}
            textColor={{ color }}
            backgroundColor={{ backgroundColor }}
          />
        );
      };
   
    const [selectedId, setSelectedId] = useState("победоносцы");
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
    backgroundColor: '#ff7c00',
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
    marginVertical: 30,
  },
  containerItemsItem:{
    color: 'white',
    padding: 10,
    height: 'auto',
    width: '100%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    
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
      <ImageBackground source={require('../../../../assets/img/1.png')} resizeMode="cover" style={styles.container}>
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
  