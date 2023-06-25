import { createSlice } from '@reduxjs/toolkit';

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
//уровень сложности
    numberLevel: 3,
//названия игры
    nameGame: '',
//промежуточный результат между экранами
    intermediateResultMemory: '',
//промежуточный результат во время уровня
    intermediateResult: 0,
//управления появлением AlertTextMission в уровнях
    numberGame: 1,
//наличия звука 
    audioClick: true,
    audioGame: true,
    audioGameState: true,
    audioLevel: true,
//Данные пользователя получены 
    userTrue: null,
//Видимость меню 
    menuCenterVisible: true,
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
            state.stateRezultat = "false";
          }else{
            state.stateRezultat = "true"; 
          }
 
      },
    positionStatusRelative: state => {
      state.positionStatus = "none";
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
    audioGameСhange: (state, action) =>  {
      state.audioGame = action.payload;
    },
    audioGameStateСhange: (state, action) =>  {
      state.audioGameState = action.payload;
    },
    audioClickСhange: (state, action) =>  {
      state.audioClick = action.payload;
    },
    audioLevelСhange: (state, action) =>  {
      state.audioLevel = action.payload;
    },
    userTrueСhange: (state, action) =>  {
      state.userTrue = action.payload;
    },
    menuCenterVisibleСhange: (state, action) =>  {
      state.menuCenterVisible = action.payload;
    },
    intermediateResultChange: (state, action) =>  {
      state.intermediateResult = action.payload;
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
  incrementByAmount,
  numberLevelChangePlus,
  numberLevelChangeMinus,
  numberGameСhange,
  stateRezultatZero,
  intermediateResultMemoryPush,
  nameGameСhange,
  audioGameСhange,
  audioClickСhange,
  audioLevelСhange,
  audioGameStateСhange,
  userTrueСhange,
  menuCenterVisibleСhange,
  intermediateResultChange
   } = counterSlice.actions

export default counterSlice.reducer