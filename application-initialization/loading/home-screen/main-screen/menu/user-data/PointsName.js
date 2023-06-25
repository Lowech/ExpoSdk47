import { useState,useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import  {firebaseConfig}  from '../../../../../../firebaseConfig';
import { getDatabase, ref, onValue} from "firebase/database";
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import { useEffect } from 'react';
import {useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';

  /*initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  const dbF = getFirestore();
  const collectionUsers = collection(dbF, "users");*/
  
export default function PointsName() {
  //console.log("value" + '')
  const isFocused = useIsFocused();
  const [username, setUsername] = useState();
  const [timbon, setTimbon] = useState();
  const [timbonUp, setTimbonUp] = useState();
  const [imgRang, setImgRang] = useState(require('../../../../../../assets/img/Newbie.png'));
  //Данные пользователя получены
  const userTrue = useSelector(state => state.counter.userTrue); 
  
  const getMyStringValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@timbon');
      if(value !== null){
        setTimbon(Number(JSON.parse(value).timbon));
        setUsername(String(JSON.parse(value).username));
      }
      
    } catch(e) {
      console.log(e)
    } 
  }
  const getTimbonUp = async () => {
    try {
      const value = await AsyncStorage.getItem('@timbonUp');
      setTimbonUp(value); 
    } catch(e) {
      console.log(e)
    } 
  }
//проверка авторизации и выставления имени и количества тимбонов
 /*useEffect(()=>{
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);

     onValue(starCountRef, (snapshot) => {
      let data = Object(snapshot.val());
    //setTimbon(data.timbon);
   });  
    } else {
      console.log('error')
    }
  });  
 },[])*/
 //проверка ранга и установка соответствующего иконки
useLayoutEffect(()=>{
 
  getTimbonUp();
  getMyStringValue();
  async function getDocUser(){
  try {
  const value = await AsyncStorage.getItem('@userValue');
  let  userData = JSON.parse(value);

 if(userData !== null){
  switch (true) {
    case userData.logickWordPart >= 10 && userData.logickSortingPart >= 10 && userData.memoryBallsPart >= 10 && userData.memoryFiguresPart >= 10:
      setImgRang(require('../../../../../../assets/img/Persistent.png'));
    break;
    case userData.logickWordPart >= 30 && userData.logickSortingPart >= 30 && userData.memoryBallsPart >= 30 && userData.memoryFiguresPart >= 30:
       setImgRang(require('../../../../../../assets/img/childProdigy.png'));
    break;
    case userData.logickWordPart >= 50 && userData.logickSortingPart >= 50 && userData.memoryBallsPart >= 50 && userData.memoryFiguresPart >= 50:
      setImgRang(require('../../../../../../assets/img/FlexibleMind.png'));
    break;
    case userData.logickWordPart >= 100 && userData.logickSortingPart >= 100 && userData.memoryBallsPart >= 100 && userData.memoryFiguresPart >= 100:
       setImgRang(require('../../../../../../assets/img/Scrabble.png'));
    break;
    case userData.logickWordPart >= 150 && userData.logickSortingPart >= 150 && userData.memoryBallsPart >= 150 && userData.memoryFiguresPart >= 150:
      setImgRang(require('../../../../../../assets/img/mentalist.png'));
    break;
    case userData.logickWordPart >= 200 && userData.logickSortingPart >= 200 && userData.memoryBallsPart >= 200 && userData.memoryFiguresPart >= 200:
       setImgRang(require('../../../../../../assets/img/Virtuoso.png'));
    break;
    case userData.logickWordPart >= 300 && userData.logickSortingPart >= 300 && userData.memoryBallsPart >= 300 && userData.memoryFiguresPart >= 300:
      setImgRang(require('../../../../../../assets/img/Creator.png'));
    break;
  }
}
}
catch(e) {
  console.log(e)
} 
  /*const querySnapshotoo = await getDocs(collectionUsers);
   querySnapshotoo.forEach((doc) => {
     let  userData = doc.data()  
   }); */
 }
 getDocUser();

},[isFocused,userTrue])

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
  fontFamily: 'sans-serif-light',
  textShadowColor: 'black',
  textShadowRadius: 10,
  textShadowOffset:  { width: 2, height: 2 },
  borderLeftWidth: 1,
  borderLeftColor: "rgba(255, 255, 255,0.5)",
  
  
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
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset:  { width: 1, height: 1 },
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0,0.5)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.5)",
} 
});
         
  return (
    <View style={styles.LoginRegister}>
      
      <Text style={styles.username}>{username}</Text>
        <Image style={styles.icons} source={imgRang}/>
          <Text style={styles.timbon}>{timbonUp === null ? timbon : timbonUp }t</Text>
    </View>
  );
}    