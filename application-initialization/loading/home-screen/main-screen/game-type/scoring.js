import * as React from 'react';
import {useState,useEffect} from 'react';
import { StyleSheet,View,ActivityIndicator} from 'react-native';
import {getFirestore,updateDoc,doc,onSnapshot } from "firebase/firestore"; 
import  {firebaseConfig}  from '../../../../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import {incrementByAmount} from '../../../../../redux/counterSlice';

initializeApp(firebaseConfig);
const auth = getAuth();
const dbF = getFirestore();

export default  function Scoring(props) {
   
// Получения результата
const dispatch = useDispatch();
const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
const rezultGame = useSelector(state => state.counter.stateRezultat);
//номер уровня
const numberLevel = useSelector(state => state.counter.numberLevel);
//Начисления результата
const nGame = useSelector(state => state.counter.nameGame);
const docUsers = doc(dbF, "users", auth.currentUser.uid);
const [usersVictory, setUsersVictory] = useState( ()=>{
    onSnapshot(doc(dbF, "users", auth.currentUser.uid),  (doc) => {
     
       setUsersVictory(doc.data());
    });
  }
);
// активность компонента
const [componActive, setComponActive] = useState("none");
//отправка результатов уровня на проверку
useEffect(()=>{
  
  //console.log(props.selectionResult)
  if(isTrueFalse === true){
    if(props.selectionResult.length > 1){
      if(props.selectionResult[1].length > 0){
          setComponActive("flex");
          dispatch(incrementByAmount(props.selectionResult));
      }   
    }
  } 
},[isTrueFalse])
//
//начисления очков
useEffect(()=>{
  
    if( rezultGame === 'true' || rezultGame === 'false'){
      //console.log(numberLevel)
        props.navig.navigate("MessageGameResultat");
        setComponActive("none");
      
        async function updateUsersDoc(){
     
          if(rezultGame === 'true' ){
          
            await  updateDoc(docUsers, {
              numberGames: usersVictory.numberGames + 1,
              victory: usersVictory.victory + 1, 
            }); 
            if(nGame === 'ball' || nGame === 'figures'){
              await  updateDoc(docUsers, {
                remembering: usersVictory.remembering + 1,
              });  
            }
            if(nGame === 'figures' && numberLevel === 10){
              await  updateDoc(docUsers, {
                memoryFiguresPart: usersVictory.memoryFiguresPart + 1,
              });  
            }
            if(nGame === 'ball' && numberLevel === 10){
              await  updateDoc(docUsers, {
                memoryBallsPart: usersVictory.memoryBallsPart + 1,
              });  
            }
            if(nGame === 'wordMission' || nGame === 'sortingMission'){
              await  updateDoc(docUsers, {
                smartest: usersVictory.smartest + 1,
              });  
            }
              if(nGame === 'wordMission' && numberLevel === 10){
                await  updateDoc(docUsers, {
                  logickWordPart: usersVictory.logickWordPart + 1,
                });  
              }
              if(nGame === 'sortingMission' && numberLevel === 10){
                await  updateDoc(docUsers, {
                  logickSortingPart: usersVictory.logickSortingPart + 1,
                });  
              }
          }
          else{
            await updateDoc(docUsers, {
              numberGames: usersVictory.numberGames + 1,
              victory: usersVictory.victory - 1,
              
            });
            if(nGame === 'figures' || nGame === 'ball'){
              await  updateDoc(docUsers, {
                remembering: usersVictory.remembering - 1,
              });
            }
            if(nGame === 'wordMission' || nGame === 'sortingMission'){
              await  updateDoc(docUsers, {
                smartest: usersVictory.smartest - 1,
              });
            }
          }
        }
      updateUsersDoc(); 
    }
},[rezultGame])
//
    const styles = StyleSheet.create({
        containerRezult:{
          position: "absolute",
          zIndex: 99999,
          width: '100%',
          height: '100%',
          display: componActive,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(123, 104, 238,0.5)',
        }
      });

    return (
        <View style={styles.containerRezult}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View> 
      );
    }

   