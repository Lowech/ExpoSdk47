import React from 'react';
import { useState, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import  {firebaseConfig}  from '../../../../../firebaseConfig';
import { getDatabase, ref, onValue} from "firebase/database";
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import { useEffect } from 'react';
import {useIsFocused } from '@react-navigation/native';


  initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  const dbF = getFirestore();
  const collectionUsers = collection(dbF, "users");
  
export default function PointsName() {

  const isFocused = useIsFocused();
  const [username, setUsername] = useState();
  const [timbon, setTimbon] = useState();
  const [imgRang, setImgRang] = useState(require('../../../../../assets/img/Новичок.png'));
  
//проверка авторизации и выставления имени и количества тимбонов
 useEffect(()=>{
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);

     onValue(starCountRef, (snapshot) => {
      let data = Object(snapshot.val());

    setUsername(data.username);
    setTimbon(data.timbon);

   });  

    } else {
      console.log('error')
    }
  }); 
 },[])
 //проверка ранга и установка соответствующего иконки
 useEffect(()=>{
 async function getDocUser(){
  const querySnapshotoo = await getDocs(collectionUsers);
 
   querySnapshotoo.forEach((doc) => {
     let  userData = doc.data()
     
     switch (userData.logickWordPart && userData.logickSortingPart && userData.memoryBallsPart && userData.memoryFiguresPart) {
       case 10:
         setImgRang(require('../../../../../assets/img/Упорный.png'));
       break;
       case 30:
          setImgRang(require('../../../../../assets/img/Вундеркинд.png'));
       break;
       case 50:
         setImgRang(require('../../../../../assets/img/ГибкийУм.png'));
       break;
       case 100:
          setImgRang(require('../../../../../assets/img/Эрудит.png'));
       break;
       case 150:
         setImgRang(require('../../../../../assets/img/Менталист.png'));
       break;
       case 200:
          setImgRang(require('../../../../../assets/img/Виртуоз.png'));
       break;
       case 300:
         setImgRang(require('../../../../../assets/img/Создатель.png'));
       break;
     }
   }); 
 }
 getDocUser();
},[isFocused])

const styles = StyleSheet.create({
LoginRegister:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    width: 120,
    height: 40,
    backgroundColor: 'transparent',
    shadowRadius: 5 ,
    shadowOffset: {width: 6,height: 6},
    shadowColor: '#808080',
      
},
icons:{    
    backgroundColor: '#7B68EE',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 2, 
    width: 35,
    height: 28,
    position : 'absolute',
    zIndex: 1,
    top: 16,
    left: 0,
    
},
username:{
  fontSize: 15,
  color: 'white',
  fontWeight: "bold",
  width: '100%',
  height: 'auto',
  textAlign: 'center',
  backgroundColor: '#7B68EE',
  borderBottomLeftRadius: 10, 
  borderBottomWidth: 1,
  borderLeftWidth: 2,
  borderColor: '#696969',
  fontFamily: 'sans-serif-light',
  textShadowColor: 'black',
  textShadowRadius: 10,
  textShadowOffset:  { width: 2, height: 2 },
  
},
timbon:{
    fontSize: 15,
    color: 'white',
    fontWeight: "bold",
    backgroundColor: 'red',
    width: 90,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',  
    borderBottomLeftRadius: 10, 
    marginLeft: 30, 
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#696969',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset:  { width: 1, height: 1 },
} 
});
         
  return (
    <View style={styles.LoginRegister}>
      <Text style={styles.username}>{username}</Text>
        <Image style={styles.icons} source={imgRang}/>
          <Text style={styles.timbon}>{timbon}t</Text>
    </View>
  );
}    