import * as React from 'react';
import { useState,useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,FlatList , Dimensions,Animated } from 'react-native';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../firebaseConfig';
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 

initializeApp(firebaseConfig);
const dbF = getFirestore();
const collectionUsers = collection(dbF, "users");

export default  function ProgressList(props) {
  
  const [massRender, setMassRender] = useState('');
  const [isLodingTrue, setIsLodingTrue] = useState(false);
  const backgroundColor = isLodingTrue === massRender ? "#6e3b6e" : "#20B2AA";

  useEffect(()=>{
    async function getDocUser(){

      setIsLodingTrue(false) 

      let massElemBd=[];

      const querySnapshotoo = await getDocs(collectionUsers);
  
    querySnapshotoo.forEach((doc) => {
      let  userData = doc.data()

      massElemBd.unshift({
        "name": userData.name,
        "victory": userData.victory,
        "numberGames": userData.numberGames,
        "remembering": userData.remembering,
        "smartest": userData.smartest
      });
    });  

    const DATA =[];
    const conclusion =  []; 

    

      for(let it=0; it <= massElemBd.length-1; it++){
        switch (props.value) {
          case 'больше всех побед':

            massElemBd.sort((a,b)=> {
              return  b.victory - a.victory;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massElemBd[it].name} `,
              title1: massElemBd[it].victory ,
            });
            
            break;
          case "больше всех играет":

            massElemBd.sort((a,b)=> {
              return b.numberGames - a.numberGames;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massElemBd[it].name} `,
              title1: massElemBd[it].numberGames ,
            });
            break;
          case "самая хорошая память":

            massElemBd.sort((a,b)=> {
              return b.remembering - a.remembering;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massElemBd[it].name} `,
              title1: massElemBd[it].remembering ,
            });
            break;
          case "самый смышленый":

            massElemBd.sort((a,b)=> {
              return b.smartest - a.smartest;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massElemBd[it].name} `,
              title1: massElemBd[it].smartest ,
            });
            break;  
        }  
      }
    

  DATA.forEach(element => {
    conclusion.push(element.title,element.title1) 
  });
  
  setMassRender(DATA)  
  setIsLodingTrue(true)  
} 
  getDocUser()
    
},[props.value])
 
/////// элементы отображения текста
    const Item = ({ item, item1}) => (
      <View style={styles.containerText}>
        <Text style={styles.Text}>{item}</Text>
        <Text style={styles.Text}>{item1}</Text>
      </View>   
  );
    const renderItem = ({ item }) => {  
      return(<Item item={item.title} item1={item.title1}/>);    
    };
//////////////  

const styles = StyleSheet.create({
  containerProgress:{
    width: '60%',
    height: 'auto',
    backgroundColor: 'rgba(105, 105, 105,0.5)',
    marginLeft: 40,
    marginRight: 20,
    marginVertical: 20,
    borderRadius: 20,
  },
  containerText:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    height: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8
  },
  Text:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: "auto",
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset:  { width: 1, height: 1 },
    
  },
  indicatorAction:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',

  }
});
    return (   
       <View style={styles.containerProgress }>
          
          {isLodingTrue ? <FlatList 
            data={massRender}
            renderItem={renderItem}
            keyExtractor={item => item.id}/> 
            :
            <View style={styles.indicatorAction }>
              <ActivityIndicator  size="large" color="#00BFFF"/>
            </View>
          }
      </View >  
    );
  }
  