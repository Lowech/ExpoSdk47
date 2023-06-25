import * as React from 'react';
import {useState,useEffect} from 'react';
import { StyleSheet,View,ActivityIndicator} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {incrementByAmount,intermediateResultChange} from '../../../../../redux/counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {useIsFocused,StackActions} from '@react-navigation/native';
//import { getDatabase, ref, set,onValue,get,child,update } from "firebase/database";
//import {getFirestore,updateDoc,doc,onSnapshot } from "firebase/firestore"; 
//import  {firebaseConfig}  from '../../../../../firebaseConfig';
//import { initializeApp } from 'firebase/app';
//import {getAuth} from 'firebase/auth';



/*initializeApp(firebaseConfig);
const auth = getAuth();
const dbF = getFirestore();
const db = getDatabase();
let sumPointer;*/
export default  function Scoring(props) {
  let n = 0;
  let v = 0;
  let r = 0;
  let s = 0;
  let lw = 0;
  let ls = 0;
  let mf = 0;
  let mb = 0;
// Получения результата
const dispatch = useDispatch();
const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
const rezultGame = useSelector(state => state.counter.stateRezultat);
const [timbonUp, setTimbonUp] = useState(0);
const [getTimbonUp, setGetTimbonUp] = useState(0);
const [userValueUp, setUserValueUp] = useState(null);
//номер уровня
const numberLevel = useSelector(state => state.counter.numberLevel);
//промежуточные очки во время уровня
const intermediateResult = useSelector(state => state.counter.intermediateResult);
//Начисления результата
const nGame = useSelector(state => state.counter.nameGame);
/*const docUsers = doc(dbF, "users", auth.currentUser.uid);
const [usersVictory, setUsersVictory] = useState( ()=>{
    onSnapshot(doc(dbF, "users", auth.currentUser.uid),  (doc) => {
     
       setUsersVictory(doc.data());
    });
  }
);*/

async function usersFinishRaundPlus(n,v,r,s,lw,ls,mf,mb)  {
  try {
    const value = await AsyncStorage.getItem('@userValue');
    
   console.log(userValueUp)
    if(userValueUp === null){
      const userValue = {
        numberGames: JSON.parse(value).numberGames + n,
        victory: JSON.parse(value).victory + v,
        remembering: JSON.parse(value).remembering + r,
        smartest: JSON.parse(value).smartest + s,
        logickWordPart: JSON.parse(value).logickWordPart + lw,
        logickSortingPart: JSON.parse(value).logickSortingPart + ls, 
        memoryFiguresPart: JSON.parse(value).memoryFiguresPart + mf,
        memoryBallsPart: JSON.parse(value).memoryBallsPart + mb, 
        name: JSON.parse(value).name,
        rangTrue: JSON.parse(value).rangTrue,
      }
      setUserValueUpdate(JSON.stringify(userValue))
      
    }else{
      const userValueUpd = {
        numberGames: JSON.parse(userValueUp).numberGames + n,
        victory: JSON.parse(userValueUp).victory + v,
        remembering: JSON.parse(userValueUp).remembering + r,
        smartest: JSON.parse(userValueUp).smartest + s,
        logickWordPart: JSON.parse(userValueUp).logickWordPart + lw,
        logickSortingPart: JSON.parse(userValueUp).logickSortingPart + ls, 
        memoryFiguresPart: JSON.parse(userValueUp).memoryFiguresPart + mf,
        memoryBallsPart: JSON.parse(userValueUp).memoryBallsPart + mb, 
        name: JSON.parse(value).name,
        rangTrue: JSON.parse(value).rangTrue,
      }
      setUserValueUpdate(JSON.stringify(userValueUpd))
    }
  }
  catch(e) {
    console.log(e)
  } 
};
async function usersFinishRaundMinus(n,v,r,s,lw,ls,mf,mb)  {
  try {
    const value = await AsyncStorage.getItem('@userValue');
    if(userValueUp === null){
      const userValue = {
        numberGames: JSON.parse(value).numberGames + n,
        victory: JSON.parse(value).victory - v,
        remembering: JSON.parse(value).remembering - r,
        smartest: JSON.parse(value).smartest - s,
        logickWordPart:  lw,
        logickSortingPart: ls, 
        memoryFiguresPart: mf,
        memoryBallsPart: mb,   
        name: JSON.parse(value).name,
        rangTrue: JSON.parse(value).rangTrue,
      }
      
      setUserValueUpdate(JSON.stringify(userValue))
    }else{
      const userValueUpd = {
        numberGames: JSON.parse(userValueUp).numberGames + n,
        victory: JSON.parse(userValueUp).victory - v,
        remembering: JSON.parse(userValueUp).remembering - r,
        smartest: JSON.parse(userValueUp).smartest - s,
        name: JSON.parse(value).name,
        rangTrue: JSON.parse(value).rangTrue,
        logickWordPart:  lw,
        logickSortingPart: ls, 
        memoryFiguresPart: mf,
        memoryBallsPart: mb, 
      }
      //console.log(v)
      //console.log(userValueUp)
      setUserValueUpdate(JSON.stringify(userValueUpd))
    }
  }
  catch(e) {
    console.log(e)
  } 
};
// активность компонента
const [componActive, setComponActive] = useState("none");
//отправка результатов уровня на проверку

useEffect(()=>{
  
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
//установка timbon по результатом уровня
const setStringValue = async (t) => {
  try {
    await AsyncStorage.setItem('@timbonUp', t)
  } catch(e) {
    console.log(e)
  }
} 
// чтение данных из кэша
const getTimbonUpd = async () => {
  try {
    const value = await AsyncStorage.getItem('@timbonUp');
     setGetTimbonUp(Number(value));
  } catch(e) {
    console.log(e)
  }  
}
//получения timbon установленных ранее
  const getMyStringValue = async () => {
    try {
      const value = await AsyncStorage.getItem('@timbon');
       setTimbonUp(value);
    } catch(e) {
      console.log(e)
    } 
  }
//установка значений по результатом уровня
  const setUserValueUpdate = async (u) => {
    try {
      await AsyncStorage.setItem('@userValueUpdate', u)
    } catch(e) {
      console.log(e)
    }
  }    
//установка значений по результатом уровня 
  async function getUserValueUpdate() {
    try {
      const value = await AsyncStorage.getItem('@userValueUpdate');
      setUserValueUp(value);
    }
    catch(e) {
      console.log(e)
    } 
  }
useEffect(()=>{
  getMyStringValue();
  getTimbonUpd();
  getUserValueUpdate();
    if( rezultGame === 'true' || rezultGame === 'false'){
      props.navig.navigate("MessageGameResultat");
      setComponActive("none");
        async function updateUsersDoc(){
          if(rezultGame === 'true' ){
//обновления значений игрока  
            if(numberLevel < 5){
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) + 1 : getTimbonUp + 1;
              console.log(rezult)
              console.log(getTimbonUp)
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult + 1));
              //console.log(rezult)
             // await update(starCountRef, {timbon: sumPointer + 1});
             }
             if(numberLevel >= 5 && numberLevel < 8){
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) + 2 : getTimbonUp + 2;
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult + 2));
             // await update(starCountRef, {timbon: sumPointer + 1});
             } 
             if(numberLevel >= 8){
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) + 3 : getTimbonUp + 3;
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult + 3));
             // await update(starCountRef, {timbon: sumPointer + 1});
             }        
//обновления значений игрока  
            n =  1;
            v =  1;
            /*await  updateDoc(docUsers, {
              numberGames: usersVictory.numberGames + 1,
              victory: usersVictory.victory + 1, 
            }); */
            if(nGame === 'ball' || nGame === 'figures'){
              r =  1;
             /* await  updateDoc(docUsers, {
                remembering: usersVictory.remembering + 1,
              });  */
            }
            if(nGame === 'figures' && numberLevel === 10){
              mf =  1;
             /* await  updateDoc(docUsers, {
                memoryFiguresPart: usersVictory.memoryFiguresPart + 1,
              });  */
            }
            if(nGame === 'ball' && numberLevel === 10){
              mb =  1;
             /* await  updateDoc(docUsers, {
                memoryBallsPart: usersVictory.memoryBallsPart + 1,
              });  */
            }
            if(nGame === 'wordMission' || nGame === 'sortingMission'){
              s =  1;
             /* await  updateDoc(docUsers, {
                smartest: usersVictory.smartest + 1,
              });  */
            }
              if(nGame === 'wordMission' && numberLevel === 10){
                lw =  1;
               /* await  updateDoc(docUsers, {
                  logickWordPart: usersVictory.logickWordPart + 1,
                });  */
              }
              if(nGame === 'sortingMission' && numberLevel === 10){
                ls =  1;
                /*await  updateDoc(docUsers, {
                  logickSortingPart: usersVictory.logickSortingPart + 1,
                });  */
              }
              usersFinishRaundPlus(n,v,r,s,lw,ls,mf,mb);
          }
          else{
//обновления значений игрока  
            if(numberLevel < 5){
              
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) - 1 : getTimbonUp - 1;
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult - 1));
             // await  update(starCountRef, {timbon: sumPointer - 1});
            }
            if(numberLevel >= 5 && numberLevel < 8){
              if (Number(JSON.parse(timbonUp).timbon) === 0) return;
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) - 2 : getTimbonUp - 2;
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult - 2));
             // await update(starCountRef, {timbon: sumPointer - 2});
            } 
            if(numberLevel >= 8){
              if (Number(JSON.parse(timbonUp).timbon) === 0) return;
              let rezult =  getTimbonUp === 0 ? Number(JSON.parse(timbonUp).timbon) - 3 : getTimbonUp - 3;
              setStringValue(String(rezult));
              dispatch(intermediateResultChange(intermediateResult - 3));
             // await  update(starCountRef, {timbon: sumPointer - 3});
            }  
//обновления значений игрока  

            n =  1;
            v =  1;
            /*await updateDoc(docUsers, {
              numberGames: usersVictory.numberGames + 1,
              victory: usersVictory.victory - 1,
            });*/
            if(nGame === 'figures' || nGame === 'ball'){
              r =  1;
              /*await  updateDoc(docUsers, {
                remembering: usersVictory.remembering - 1,
              });*/
            }
            if(nGame === 'wordMission' || nGame === 'sortingMission'){
              s =  1;
              /*await  updateDoc(docUsers, {
                smartest: usersVictory.smartest - 1,
              });*/
            }
            usersFinishRaundMinus(n,v,r,s,lw,ls,mf,mb);
          }
        }
      updateUsersDoc(); 
    }
},[rezultGame])
//

    const styles = StyleSheet.create({
        containerRezult:{
          display: 'none',
          position: 'absolute',
          zIndex: 99999,
          width: '100%',
          height: '100%',
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

   