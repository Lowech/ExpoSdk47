import React,{ useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Pressable,Image,Animated,Easing } from 'react-native';
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../../../firebaseConfig';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import { getDatabase, ref, onValue} from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';

initializeApp(firebaseConfig);
const dbF = getFirestore();
const db = getDatabase();
const collectionUsers = collection(dbF, "users");
const auth = getAuth();

export default function AlertRang() {
    
  const [imgRang, setImgRang] = useState(require('../../../../../../assets/img/Newbie.png'));
  const [rang, setRang] = useState('Новичок');
  const [displayNone, setDisplayNone] = useState('none');
  const [username, setUsername] = useState();
  const viewZoom = useRef(new Animated.Value(0)).current;
  const viewWidth = useRef(new Animated.Value(300)).current;
  
    
 
  //Данные пользователя получены
  const userTrue = useSelector(state => state.counter.userTrue); 
  
  
//получения данных пользователя из кэш
const [userValue, setUserValue] = useState(null);
async function getUserValue() {
  try {
    const value = await AsyncStorage.getItem('@userValue');
    //console.log(value + "rjjjjjjjjjjjjj")
    setUserValue(value);
    
  }
  catch(e) {
    console.log(e)
  } 
}

//проверка авторизации и выставления имени и количества тимбонов
useEffect(()=>{
  
  onAuthStateChanged(auth, user => {
    if (user) {
      
      const uid = user.uid;
      const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);

     onValue(starCountRef, (snapshot) => {
      let data = Object(snapshot.val());

    setUsername(data.username);

   });  

    } else {
      console.log('error')
    }
  }); 
 },[userTrue])
//показ сообщения и проверки

async function getDocUser(){
  
  
  //console.log(username)
//проверка признака чтобы показать сообщения

//
if(JSON.parse(userValue) !== null){
  console.log(userValue+ 23698)

if(JSON.parse(userValue).name === username){
  console.log(username +'12447')
  const docUsers = doc(dbF, "users", auth.currentUser.uid);
  if(Number(JSON.parse(userValue).rangTrue) ===  0){
    console.log(JSON.parse(userValue).rangTrue +'eф')
      setDisplayNone('flex');
      aniEffect()
      updateDoc(docUsers, {
        rangTrue:  1,
      });
  };
        /*
        const querySnapshotoo = await getDocs(collectionUsers);
      querySnapshotoo.forEach((doc) => {
        let  userData = doc.data()
        if(userData.rangTrue ===  0){
          //console.log(userData.name )
            setDisplayNone('flex');
            updateDoc(docUsers, {
              rangTrue:  1,
            });
        };
        }); 
        */
//
         switch (true) {
          case Number(JSON.parse(userValue).logickWordPart) >= 10 && Number(JSON.parse(userValue).logickSortingPart) >= 10 && Number(JSON.parse(userValue).memoryBallsPart) >= 10 && Number(JSON.parse(userValue).memoryFiguresPart) >= 10:
            if(Number(JSON.parse(userValue).rangTrue) ===  1){
              setImgRang(require('../../../../../../assets/img/Persistent.png'));
              setRang( 'Упорный');
              setDisplayNone('flex');
              aniEffect()
  //выставления признака что один раз было показано сообщение
               updateDoc(docUsers, {
                  rangTrue:  2,
                });  
              }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 30 && Number(JSON.parse(userValue).logickSortingPart) >= 30 && Number(JSON.parse(userValue).memoryBallsPart) >= 30 && Number(JSON.parse(userValue).memoryFiguresPart) >= 30:
            if(Number(JSON.parse(userValue).rangTrue) ===  2){
             setImgRang(require('../../../../../../assets/img/childProdigy.png'));
             setRang( 'Вундеркинд' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  3,
              });
            }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 50 && Number(JSON.parse(userValue).logickSortingPart) >= 50 && Number(JSON.parse(userValue).memoryBallsPart) >= 50 && Number(JSON.parse(userValue).memoryFiguresPart) >= 50:
            if(Number(JSON.parse(userValue).rangTrue) ===  3){
             setImgRang(require('../../../../../../assets/img/FlexibleMind.png'));
             setRang( 'Гибкий ум' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  4,
             });
            }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 100 && Number(JSON.parse(userValue).logickSortingPart) >= 100 && Number(JSON.parse(userValue).memoryBallsPart) >= 100 && Number(JSON.parse(userValue).memoryFiguresPart) >= 100:
            if(Number(JSON.parse(userValue).rangTrue) ===  4){
             setImgRang(require('../../../../../../assets/img/Scrabble.png'));
             setRang( 'Эрудит' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  5,
              });
            }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 150 && Number(JSON.parse(userValue).logickSortingPart) >= 150 && Number(JSON.parse(userValue).memoryBallsPart) >= 150 && Number(JSON.parse(userValue).memoryFiguresPart) >= 150:
            if(Number(JSON.parse(userValue).rangTrue) ===  5){
             setImgRang(require('../../../../../../assets/img/mentalist.png'));
             setRang( 'Менталист' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  6,
              });
            }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 200 && Number(JSON.parse(userValue).logickSortingPart) >= 200 && Number(JSON.parse(userValue).memoryBallsPart) >= 200 && Number(JSON.parse(userValue).memoryFiguresPart) >= 200:
            if(Number(JSON.parse(userValue).rangTrue) ===  6){
             setImgRang(require('../../../../../../assets/img/Virtuoso.png'));
             setRang( 'Виртуоз' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  7,
              });
            }
          break;
          case Number(JSON.parse(userValue).logickWordPart) >= 300 && Number(JSON.parse(userValue).logickSortingPart) >= 300 && Number(JSON.parse(userValue).memoryBallsPart) >= 300 && Number(JSON.parse(userValue).memoryFiguresPart) >= 300:
            if(Number(JSON.parse(userValue).rangTrue) ===  7){
             setImgRang(require('../../../../../../assets/img/Creator.png'));
             setRang( 'Создатель' );
             setDisplayNone('flex');
             aniEffect()
             updateDoc(docUsers, {
                rangTrue:  8,
              });
            }
          break;
        }
      }
      
    }
  }
  
useLayoutEffect(()=>{
  getUserValue()
  getDocUser();
},[userTrue,userValue])
    
function aniEffect(){
//запуск анимации появления сообщения
Animated.timing(viewZoom, {
  toValue: 1.5,
  duration: 2000,
  easing: Easing.elastic(3),
  useNativeDriver: false
}).start()

//запуск анимации исчезновения
setTimeout(() => {
Animated.timing(viewZoom, {
  toValue: 0,
  duration: 1000,
  easing: Easing.elastic(2),
  useNativeDriver: false
}).start()
}, 5000); 
setTimeout(() => { Animated.timing(viewWidth, {
toValue: 0,
duration: 1,
easing: Easing.elastic(2),
useNativeDriver: false
}).start()}, 6000); 
/*setTimeout(() => { Animated.timing(viewWidth, {
  toValue: 300,
  duration: 1,
  easing: Easing.elastic(2),
  useNativeDriver: false
  }).start()}, 7000);
  */
}
//проверка ранга и установка соответствующего иконки
 useEffect(()=>{
    
},[])
   
//   
const styles = StyleSheet.create({
  resultatСontainer:{
    display: displayNone,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    width: 300,
    height: 180,
    backgroundColor: 'rgba(250, 235, 215,0.2)',
    borderRadius: 20,
    backgroundColor: 'rgba(250, 235, 215,0.2)',
    borderRadius: 20,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.5)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.5)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0,0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0,0.3)",
    backgroundColor: 'rgba(255, 255, 255,0.3)',
    position: 'absolute',
    zIndex: 99999,
    left: '30%',
    bottom: '30%',
    
  },
  MessageResultat:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00FF00',
    backgroundColor: 'transparent',
    textShadowRadius: 1,
    textShadowColor: '#696969',
    textShadowOffset: { width: 2, height: 2 },
    width: 280,
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
        
  },
  rang:{ 
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowRadius: 1,
    textShadowColor: '#696969',
    textShadowOffset: { width: 2, height: 2 },
    color: '#00FFFF',
    width: "100%",
    height: "auto",
    borderRadius: 5,
    marginBottom: 10, 
  },
  icons:{ 
    width: 70,
    height: 55,
    borderRadius: 5,
  }
});

  return (
    <Animated.View style={[styles.resultatСontainer,{transform: [{ scale: viewZoom }],width: viewWidth} ]}>
      <Text style={styles.MessageResultat}>Поздравляем с получением звания:</Text>
      <Text style={styles.rang}>{rang}</Text>
        <Image style={styles.icons} source={imgRang}/>
    </Animated.View>
  );
}