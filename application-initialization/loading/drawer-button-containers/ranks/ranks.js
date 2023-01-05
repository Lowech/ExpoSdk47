import * as React from 'react';
import {useState,useEffect} from 'react';
import { StyleSheet, View,Dimensions,ImageBackground, ActivityIndicator,Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../../../../firebaseConfig';
import {getFirestore , collection, addDoc,getDocs ,doc, query, where, orderBy, updateDoc } from "firebase/firestore"; 
import { getDatabase, ref, onValue} from "firebase/database";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

initializeApp(firebaseConfig);
const dbF = getFirestore();
const auth = getAuth();
const db = getDatabase();
const collectionUsers = collection(dbF, "users");

export default  function Rang(props) {
//назачльные значения 
    const [rang, setRang] = useState();
    const [username, setUsername] = useState();
    const [logickSort, setLogickSort] = useState();
    const [logickWord, setLogickWord] = useState();
    const [memoryFigures, setMemoryFigures] = useState();
    const [memoryBalls, setMemoryBalls] = useState();
//Определяет размер экрана и тем саммым колличество элементов на экране
let widthWind =  Dimensions.get('window');
const [fontSizeText, setFontSizeText] = useState(16);
useEffect(()=>{
  if(widthWind.width > 760){
    return setFontSizeText( 16);
  }else{
   return  setFontSizeText( 12);
  }
},[widthWind]);
//    
//получаем текущего пользователя для сравнения между базами
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
    },[])
//       
// проводит цикл по всем пользователем сравнивает ник и выводит количество побед и других данных
async function getDocUser(){
    
        const querySnapshotoo = await getDocs(collectionUsers);
  
    querySnapshotoo.forEach((doc) => {
      let  userData = doc.data()
      
      if(userData.name === username ){

//установка значений из базы данных
        setLogickSort(userData.logickSortingPart);
        setLogickWord(userData.logickWordPart);
        setMemoryFigures(userData.memoryFiguresPart);
        setMemoryBalls(userData.memoryBallsPart);
        console.log(logickSort)
//сраниваем достижения и выводим титул        
        switch (true) {
            case userData.logickSortingPart < 10 && userData.logickWordPart < 10 && userData.memoryFiguresPart < 10 && userData.memoryBallsPart < 10:
                setRang( 'Новичок' );
              break;
            case userData.logickSortingPart >= 10 && userData.logickWordPart >= 10 && userData.memoryFiguresPart >=  10 && userData.memoryBallsPart >= 10:
                setRang( 'Упорный');
              break;
            case userData.logickSortingPart >= 30 && userData.logickWordPart >= 30 && userData.memoryFiguresPart >=  30 && userData.memoryBallsPart >= 30:
                setRang( 'Вундеркинд' );
              break;
            case userData.logickSortingPart >= 50 && userData.logickWordPart >= 50 && userData.memoryFiguresPart >=  50 && userData.memoryBallsPart >= 50:
                setRang( 'Гибкий ум' );
              break;
            case userData.logickSortingPart >= 100 && userData.logickWordPart >= 100 && userData.memoryFiguresPart >=  100 && userData.memoryBallsPart >= 100:
                setRang( 'Эрудит' );
              break;
            case userData.logickSortingPart >= 150 && userData.logickWordPart >= 150 && userData.memoryFiguresPart >=  150 && userData.memoryBallsPart >= 150:
                setRang( 'Менталист' );
              break;
            case userData.logickSortingPart >= 200 && userData.logickWordPart >= 200 && userData.memoryFiguresPart >=  200 && userData.memoryBallsPart >= 200:
                setRang( 'Виртуоз' );
              break;
            case userData.logickSortingPart >= 300 && userData.logickWordPart >= 300 && userData.memoryFiguresPart >=  300 && userData.memoryBallsPart >= 300:
                setRang( 'Создатель' );
            break;  
        }  
     } 
    });  
}
//
 //запуск функции и обновления состояния  
    useEffect(()=>{
        getDocUser();
    },[username])

    return (
        <ImageBackground source={require('../../../../assets/img/rang.png')} resizeMode="cover" style={styles.containerImg}> 
            <View style={styles.container}>
                <View style={styles.textBlockTitle}> 
                    <Text style={styles.textTitle}>Ваше звание : </Text>
                    {username ? <Text style={styles.textRang}>{rang}</Text> : <ActivityIndicator  size="large" color="#00BFFF"/>}
                </View>
                <View style={styles.textBlockStatistics}> 
                <View style={styles.textBlockVictory}>
                    <Text style={styles.textVictory}>logick sort</Text>
                    {logickSort >= 0 ? <Text style={styles.victory}>{logickSort}</Text> : <ActivityIndicator  size="large" color="#00BFFF"/>}   
                </View>
                <View style={styles.textBlockVictory}>
                    <Text style={styles.textVictory}>logick word</Text>
                    {logickWord >= 0 ? <Text style={styles.victory}>{logickWord}</Text> : <ActivityIndicator  size="large" color="#00BFFF"/>}   
                </View>
                <View style={styles.textBlockVictory}>
                    <Text style={styles.textVictory}>memory figures</Text>
                    {memoryFigures >= 0 ? <Text style={styles.victory}>{memoryFigures}</Text> : <ActivityIndicator  size="large" color="#00BFFF"/>}   
                </View>
                <View style={styles.textBlockVictory}>
                    <Text style={styles.textVictory}>memory balls</Text>
                    {memoryBalls >= 0 ? <Text style={styles.victory}>{memoryBalls}</Text> : <ActivityIndicator  size="large" color="#00BFFF"/>}   
                </View>
                </View>
                <View style={styles.textBlock}> 
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#008080',backgroundColor: 'rgba(255, 255, 255,0.5)'}]}>Чтобы получить звание, нужно завершить несколько этапов в играх. Один этап это 8 уровней пройденных подряд в одной игре.</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#FF0000'}]}>Создатель - имеет 300 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#FFFF00'}]}>Виртуоз   - имеет 200 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#00FF00'}]}>Менталист - имеет 150 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#00FFFF'}]}>Эрудит    - имеет 100 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#FFFFFF'}]}>Гибкий ум - имеет 50 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#C0C0C0'}]}>Вундеркинг - имеет 30 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#8B4513'}]}>Упорный - имеет 10 и более завершенных этапов в каждой игре</Text>
                    <Text style={[styles.text, {fontSize: fontSizeText,color: '#000000'}]}>Новичок   - имеет до 10-ти завершенных этапов в каждой игре</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    containerImg:{
      width: '100%',
      height: '100%',
      display: "flex",
      backgroundColor: 'yellow', 
    },
    container: {   
      display: 'flex', 
      width: "100%",
      height: "100%",
      backgroundColor: 'transparent',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textBlockTitle:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 400,
      height: 'auto',
      backgroundColor: 'rgba(105, 105, 105,0.8)', 
      borderRadius: 5
    },
    textTitle:{
      display: 'flex',
      width: 'auto',
      height: 'auto', 
      color: 'green',
      fontSize: 20,
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset:  { width: 1, height: 1 },
    },
    textRang:{
      width: 'auto',
      height: 'auto',
      color: 'yellow',
      fontSize: 25,
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset:  { width: 1, height: 1 },
    },
    textBlockStatistics:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90%',
      height: 'auto',
      
    },
    textBlockVictory:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      backgroundColor: 'rgba(105, 105, 105,0.8)', 
      borderRadius: 5,
      paddingLeft: 10,
      paddingRight: 10
    },
    textVictory:{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 'auto',
      height: 'auto',
      color: 'green',
      fontSize: 18,
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset:  { width: 1, height: 1 },
    },
    victory:{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 'auto',
      height: 'auto',
      color: 'yellow',
      fontSize: 20,
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset:  { width: 1, height: 1 },
    },
    textBlock:{
      width: '90%',
      height: 'auto',
      backgroundColor: 'rgba(105, 105, 105,0.8)', 
      padding: 10,
      borderRadius: 10
    },
    text:{
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
      borderRadius: 5
  }
})