import * as React from 'react';
import { useState,useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,FlatList , Dimensions,Pressable } from 'react-native';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../firebaseConfig';
import { getDatabase, ref, onValue} from "firebase/database";
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import  ProgressSVGUp  from './progressSVGUp';
import  ProgressSVGDown  from './progressSVGDown';
import AsyncStorage from '@react-native-async-storage/async-storage';

initializeApp(firebaseConfig);
const dbF = getFirestore();
const collectionUsers = collection(dbF, "users");
const auth = getAuth();
const db = getDatabase();


export default  function ProgressList(props) {
  
  const [massRender, setMassRender] = useState('');
  const [isLodingTrue, setIsLodingTrue] = useState(false);
  const [massUsers, setMassUsers] = useState(null);
// значение смещения прокрутки
  const flatListRef = useRef(null);
//ник пользователя и его номер в списке
  const [nik, setNik] = useState();
  const [nikIndex, setNikIndex] = useState();
  const backgroundColor = isLodingTrue === massRender ? "#6e3b6e" : "#20B2AA";
  async function getDocUsers(){
    try {
      const value = await AsyncStorage.getItem('@usersValues');
      setMassUsers(JSON.parse(value));
    }
    catch(e) {
      console.log(e)
    } 
  }
  useEffect(()=>{
    getDocUsers()
  },[])
  useEffect(()=>{
    
  //получения ника пользователя
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);
  
       onValue(starCountRef, (snapshot) => {
        let data = Object(snapshot.val());
  
        setNik(data.username);
  
     });  
  
      } else {
        console.log('error')
      }
    }); 
//

//получения списка пользователей и их значения
    async function getDocUser(){
      
      setIsLodingTrue(false) 

      /*let massElemBd=[]; заменен на massUsers

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
    });  */
    if(massUsers !== null){

   
    const DATA =[];
    const conclusion =  []; 
      for(let it=0; it <= massUsers.length-1; it++){


        switch (props.value) {
          case 'победоносцы':

          massUsers.sort((a,b)=> {
              return  b.victory - a.victory;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massUsers[it].name} `,
              title1: massUsers[it].victory ,
            });
            
            break;
          case "неиссякаемый энтузиазм":

          massUsers.sort((a,b)=> {
              return b.numberGames - a.numberGames;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massUsers[it].name} `,
              title1: massUsers[it].numberGames ,
            });
            break;
          case "феноменальная память":

          massUsers.sort((a,b)=> {
              return b.remembering - a.remembering;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massUsers[it].name} `,
              title1: massUsers[it].remembering ,
            });
            break;
          case "исключительная сообразительность":

          massUsers.sort((a,b)=> {
              return b.smartest - a.smartest;
            })

            DATA.push({
              id: Math.random().toString(12).substring(0),
              title: `${it+1} ${massUsers[it].name} `,
              title1: massUsers[it].smartest ,
            });
            break;  
        }  
        
      }
    

  DATA.forEach(element => {
//поиск ника пользователя в массиве элементов и получения его номера   
        if(element.title.includes(nik)){
//индекс ника пользователя в списке элементов   
          setNikIndex(Number(element.title.slice(0, 1)-1))
          
    //заполнения массива элементами
          conclusion.push(element.title,element.title1)
        }   
      });


  setMassRender(DATA)  
  setIsLodingTrue(true) 
}
} 
  getDocUser();
  
},[props.value,massUsers])


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
    height: "auto",
    backgroundColor: 'rgba(105, 105, 105,0.5)',
    marginLeft: 40,
    marginRight: 20,
    marginVertical: 30,
    borderRadius: 20,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.5)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0,0.5)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.5)",
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

  },
  containerButton:{
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
    alignItems: "center",
    width: 'auto',
    height: 'auto',
    position: "absolute",
    bottom: 0,
    left: '40%'
  },
  button:{
    width: 60,
    height: 19,
  }
});
    return (   
       <View style={styles.containerProgress }>
          
          {isLodingTrue ? <FlatList 
            data={massRender}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ref={flatListRef}
            initialScrollIndex = {nikIndex}
            getItemLayout={(data, index) => ({length: 200, offset: 200 * index, index}) }/> 
            :
            <View style={styles.indicatorAction }>
              <ActivityIndicator  size="large" color="#00BFFF"/>
            </View>
          }
          <View style={styles.containerButton }>
          <Pressable style={({ pressed }) => [
          {opacity: pressed
              ? 1
              : 0.5
          },styles.button]} onPress={()=>{flatListRef.current.scrollToOffset({
            offset: 0,
            animated: true
          })}}><ProgressSVGUp/></Pressable>
          <Pressable style={({ pressed }) => [
          {opacity: pressed
              ? 1
              : 0.5
          },styles.button]} onPress={()=>{flatListRef.current.scrollToEnd({
            animated: true
          })}}><ProgressSVGDown/></Pressable>
          </View>
          
      </View >  
    );
  }
  