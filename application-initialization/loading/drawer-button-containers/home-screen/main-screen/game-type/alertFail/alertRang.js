import React,{ useState,useRef,useEffect } from 'react';
import { StyleSheet, Text, View, Pressable,Image,Animated,Easing } from 'react-native';
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../../../../firebaseConfig';
import {getAuth} from 'firebase/auth';

initializeApp(firebaseConfig);
const dbF = getFirestore();
const collectionUsers = collection(dbF, "users");
const auth = getAuth();

export default function AlertRang() {
    
  const [imgRang, setImgRang] = useState(require('../../../../../../../assets/img/Новичок.png'));
  const [rang, setRang] = useState('Новичок');
  const [displayNone, setDisplayNone] = useState('none');
  const viewZoom = useRef(new Animated.Value(0)).current;
  const docUsers = doc(dbF, "users", auth.currentUser.uid);

async function getDocUser(){
     const querySnapshotoo = await getDocs(collectionUsers);
    
      querySnapshotoo.forEach((doc) => {
        let  userData = doc.data()
//проверка признака чтобы показать сообщения
        if(userData.rangTrue ===  0){
            setDisplayNone('flex');
        };
//
        switch (userData.logickWordPart && userData.logickSortingPart && userData.memoryBallsPart && userData.memoryFiguresPart) {
          case 10:
            setImgRang(require('../../../../../../../assets/img/Упорный.png'));
            setRang( 'Упорный');
//выставления признака что один раз было показано сообщение
             updateDoc(docUsers, {
                rangTrue:  1,
              }); 
//
          break;
          case 30:
             setImgRang(require('../../../../../../../assets/img/Вундеркинд.png'));
             setRang( 'Вундеркинд' );
             updateDoc(docUsers, {
                rangTrue:  1,
              });
          break;
          case 50:
            setImgRang(require('../../../../../../../assets/img/ГибкийУм.png'));
            setRang( 'Гибкий ум' );
            updateDoc(docUsers, {
                rangTrue:  1,
              });
          break;
          case 100:
             setImgRang(require('../../../../../../../assets/img/Эрудит.png'));
             setRang( 'Эрудит' );
             updateDoc(docUsers, {
                rangTrue:  1,
              });
          break;
          case 150:
            setImgRang(require('../../../../../../../assets/img/Менталист.png'));
            setRang( 'Менталист' );
          break;
          case 200:
             setImgRang(require('../../../../../../../assets/img/Виртуоз.png'));
             setRang( 'Виртуоз' );
             updateDoc(docUsers, {
                rangTrue:  1,
              });
          break;
          case 300:
            setImgRang(require('../../../../../../../assets/img/Создатель.png'));
            setRang( 'Создатель' );
            updateDoc(docUsers, {
                rangTrue:  1,
              });
          break;
        }
      }); 
    }
    getDocUser();

//проверка ранга и установка соответствующего иконки
 useEffect(()=>{
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
//   
   },[rang])
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
    <Animated.View style={[styles.resultatСontainer,{transform: [{ scale: viewZoom }]}]}>
      <Text style={styles.MessageResultat}>Поздравляем с получением звания:</Text>
      <Text style={styles.rang}>{rang}</Text>
        <Image style={styles.icons} source={imgRang}/>
    </Animated.View>
  );
}