import { createSlice } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import  {firebaseConfig}  from '../firebaseConfig';
import { getDatabase, ref, set,onValue,get,child,update } from "firebase/database";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';


initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
let sumPointer;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
//повления и исчезновение полей регистрации и входа
    value: 'none',
    value1: 'none',
//окончание и начала таймера
    timeGameEnd: false,
//результат уровня
    stateRezultat: '',
//
    positionStatus: "relative",
//уровень сложности
    numberLevel: 3,
//названия игры
    nameGame: '',
//промежуточный результат между экранами
    intermediateResultMemory: '',
//управления появлением AlertTextMission в уровнях
    numberGame: 1
  },
  reducers: {
    hidingOpeningRegistration: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = 'flex',
      state.value1 = 'none'
    },
    hideRevealAuthorization: state => {
      state.value = 'none',
      state.value1 = 'flex'
    },
    hideAuthorizationRegistration: state => {
      state.value = 'none',
      state.value1 = 'none'
    },
    timeGameTrue: state => {
      state.timeGameEnd = true;
    },
    timeGameFalse: state => {
      state.timeGameEnd = false;
    },
//проверка результатов уровня
    incrementByAmount: (state, action) => {
      let resultSecurity=[];
      const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
      onValue(starCountRef, (snapshot) => {
        const data = Object(snapshot.val());
        sumPointer = data.timbon;
      
      }); 
      
      action.payload[0].forEach(element => {
        
        if(action.payload[1].includes(element) === true){
          resultSecurity.push("true");
          //console.log(element + " " + "true")
        }else{
          resultSecurity.push("false");
          //console.log(element + " " + "false")
        } 
      }); 

          if(action.payload[0].length < action.payload[1].length){
            resultSecurity.push("false");
          }

        if(resultSecurity.includes("false")){
          update(starCountRef, {timbon: sumPointer - 1});
          state.stateRezultat = "false";
        }else{
          update(starCountRef, {timbon: sumPointer + 1});
          state.stateRezultat = "true";
        }
        
    },
    positionStatusAbsolute: state => {
      state.positionStatus = "absolute";
    },
    positionStatusRelative: state => {
      state.positionStatus = "relative";
    },
    numberLevelChangePlus: state => {
      state.numberLevel += 1;
    },
    numberLevelChangeMinus: state => {
      state.numberLevel = 3;
    },
    nameGameСhange: (state, action) =>  {
      state.nameGame = action.payload;
    },
    stateRezultatZero:(state)=>{
      state.stateRezultat = '';
    },
    intermediateResultMemoryPush: (state, action) =>  {
      state.intermediateResultMemory = action.payload;
    },
    numberGameСhange: (state, action) =>  {
      state.numberGame = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
  hidingOpeningRegistration,
  hideRevealAuthorization,
  hideAuthorizationRegistration,
  timeGameTrue,
  timeGameFalse,
  positionStatusAbsolute,
  positionStatusRelative,
  incrementByAmount,
  numberLevelChangePlus,
  numberLevelChangeMinus,
  numberGameСhange,
  stateRezultatZero,
  intermediateResultMemoryPush,
  nameGameСhange } = counterSlice.actions

export default counterSlice.reducer