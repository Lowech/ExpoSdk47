import React from 'react';
import { useState} from 'react';
import { StyleSheet, Text, View, Pressable,Switch,ScrollView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { initializeApp } from 'firebase/app';
import {getAuth, updateEmail, deleteUser ,signInWithEmailAndPassword,updatePassword } from 'firebase/auth';
import {getFirestore , collection, doc, updateDoc,getDocs , query,orderBy,deleteDoc  } from "firebase/firestore"; 
import { getDatabase, ref,remove,update } from "firebase/database";
import  {firebaseConfig}  from '../../../../firebaseConfig';

import  InputValueValidation  from "../../authorization/InputValueValidation";

export default function Setting() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const dbF = getFirestore();
  const db = getDatabase();
  const collectionUsers = collection(dbF, "users");
  const docUsers = doc(dbF, "users", auth.currentUser.uid);
  const filterItemsGetFirestore = query(collectionUsers, orderBy("gender"));

  const [inputId, setInputId] = useState('');

  const toggleSwitchClick = () => setAudioClick(previousState => !previousState);
  const [audioClick, setAudioClick] = useState(false);

  const toggleSwitchGame = () => setaudioGame(previousState => !previousState);
  const [audioGame, setaudioGame] = useState(false);

  const toggleSwitchLevel = () => setAudioLevel(previousState => !previousState);
  const [audioLevel, setAudioLevel] = useState(false);

  const [currentEmail, setCurrentEmail] = useState("");
  const [borderErrorCurrentEmail, setBorderErrorCurrentEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  const [newEmail, setNewEmail] = useState("");
  const [varificationTrueEmail, setVarificationTrueEmail] = useState("");
  const [borderErrorEmail, setBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});

  const [currentPassword, setCurrentPassword] = useState("");
  const [borderErrorCurrentPassword, setBorderErrorCurrentPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  
  const [login, onChangeLogin] = useState("");
  const [varificationTrueLogin, setVarificationTrueLogin] = useState("");
  const [borderErrorLogin, setBorderErrorLogin] = useState({borderBottomColor: 'rgb(128, 128, 128)'});

  const [upUserPassword, setUpUserPassword] = useState("");
  const [currentUpUserEmail, setCurrentUpUserEmail] = useState("");
  const [currentUpUserPassword, setCurrentUpUserPassword] = useState("");
  const [varificationTruePassword, setVarificationTruePassword] = useState("");
  const [borderErrorUpUserPassword, setBorderErrorUpUserPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  const [borderErrorCurrentUpUserPassword, setBorderErrorCurrentUpUserPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  const [borderErrorCurrentUpUserEmail, setBorderErrorCurrentUpUserEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});

  const [deleteUserPassword, setDeleteUserPassword] = useState("");
  const [deleteUserEmail, setDeleteUserEmail] = useState("");
  const [deleteUserBorderErrorPassword, setDeleteUserBorderErrorPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  const [deleteUserborderErrorEmail, setDeleteUserBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});

// проверка логина
async function nameVerification(nickName){
  
    const allAsyncResults = []
    const querySnapshotoo = await getDocs(filterItemsGetFirestore);
   
     querySnapshotoo.forEach((doc) => {
      let  userData = Object(doc.data())
      allAsyncResults.push(userData.name)
      
    });
   
    if(!allAsyncResults.includes(nickName) && nickName !== ""){
      setBorderErrorLogin({borderBottomColor: 'green'})
      setVarificationTrueLogin(true)
    }else{
      setInputId("ник сброс");
      setBorderErrorLogin({borderBottomColor: 'red'})
      setVarificationTrueLogin(false)
    }
  }
// замена логина  
async function upDateLogin(){
    if(varificationTrueLogin === true){
      setInputId("ник обновлен удачно");
      onChangeLogin("");
      setBorderErrorLogin({borderBottomColor: 'rgb(128, 128, 128)'});

      const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
      update(starCountRef, {username: login});

      await  updateDoc(docUsers, {
        name: login,  
      }); 
    }
  }
//  
/// проверка email  
async function validationEmail(searchEmail){
  
  const allAsyncResults = []
  const querySnapshotoo = await getDocs(filterItemsGetFirestore);
 
   querySnapshotoo.forEach((doc) => {
    let  userData = Object(doc.data())
    allAsyncResults.push(userData.email)
    
  });
  
    if(!allAsyncResults.includes(searchEmail) && searchEmail !== "" && searchEmail.includes("@")){
      setBorderErrorEmail({borderBottomColor: 'green'})
      setVarificationTrueEmail(true)
    }else{
      setInputId("email существует");
      setBorderErrorEmail({borderBottomColor: 'red'})
      setVarificationTrueEmail(false)
    }

 
}
/// обновление email  
async function upDateEmail(){
  if(varificationTrueEmail === true && newEmail !== ""){
    await signInWithEmailAndPassword(auth,currentEmail, currentPassword).then(() => {
      updateEmail(auth.currentUser, newEmail);
      updateDoc(docUsers, {
        email: newEmail,  
      }); 
      setInputId("email обновлен удачно");
      setNewEmail("");
      setCurrentEmail("");
      setCurrentPassword("");
      setBorderErrorEmail({borderBottomColor: 'rgb(128, 128, 128)'}); 
      setBorderErrorCurrentPassword({borderBottomColor: 'rgb(128, 128, 128)'});
      setBorderErrorCurrentEmail({borderBottomColor: 'rgb(128, 128, 128)'}); 
  
    }).catch((error) => {
        setInputId("email или пароль не верны");
        setBorderErrorCurrentPassword({borderBottomColor: 'red'});
        setBorderErrorCurrentEmail({borderBottomColor: 'red'});
        console.log(error)
      });
  }
}
///
// проверка пароля
function complianceСheckPassword(upPassword){
  upPassword.split('').forEach(element => {
    if(  upPassword.length>=8 &&  /[A-Za-z0-9\_\#\=\№\!\:\;\%\+\?\^\-]/g.test(element)  )
  {
    setBorderErrorUpUserPassword({borderBottomColor: 'green'})
    setVarificationTruePassword(true)
  }
  else{
    setInputId("не верный пароль настройки");
    setBorderErrorUpUserPassword({borderBottomColor: 'red'})
    setVarificationTruePassword(false)
  }
}); 
}
// 
/// обновление пароля
async function upDatePassword(){
  if(varificationTruePassword === true && currentUpUserEmail !== "" && currentUpUserPassword !== ""){
    await signInWithEmailAndPassword(auth,currentUpUserEmail, currentUpUserPassword).then(() => {
      updatePassword(auth.currentUser, currentUpUserPassword);
      
      setInputId("пароль обновлен удачно");
      setUpUserPassword("");
      setCurrentUpUserEmail("");
      setCurrentUpUserPassword("");
      setBorderErrorUpUserPassword({borderBottomColor: 'rgb(128, 128, 128)'}); 
      setBorderErrorCurrentUpUserEmail({borderBottomColor: 'rgb(128, 128, 128)'});
      setBorderErrorCurrentUpUserPassword({borderBottomColor: 'rgb(128, 128, 128)'}); 
  
    }).catch((error) => {
        setInputId("email или пароль не верны");
        setBorderErrorCurrentUpUserPassword({borderBottomColor: 'red'});
        setBorderErrorCurrentUpUserEmail({borderBottomColor: 'red'});
        console.log(error)
      });
  }
}
/// удаление аккаунта  
async function deleteUsers(){
    if(deleteUserPassword !== "" && deleteUserEmail !== ""){
      signInWithEmailAndPassword(auth, deleteUserEmail, deleteUserPassword).then(() => {
        deleteDoc(docUsers); 
        const starCountRef = ref(db, `users/${auth.currentUser.uid}`);
        remove(starCountRef);
        setTimeout(()=>{deleteUser(auth.currentUser)},2000);
        setInputId("аккаунт удален");
        setDeleteUserEmail("");
        setDeleteUserPassword("");
        setBorderErrorEmail({borderBottomColor: 'rgb(128, 128, 128)'}); 
        setDeleteUserBorderErrorEmail({borderBottomColor: 'rgb(128, 128, 128)'});
        setDeleteUserBorderErrorPassword({borderBottomColor: 'rgb(128, 128, 128)'}); 
       
      }).catch((error) => {
        setInputId("email или пароль не верны");
        setDeleteUserBorderErrorPassword({borderBottomColor: 'red'});
        setDeleteUserBorderErrorEmail({borderBottomColor: 'red'});
          console.log(error)
        });
    }
}
///
  const styles = StyleSheet.create({
    settingСontainer:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#FFCC66', 
    },
    containerTextAudio:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 15,
      width: 500,
      height: 40,
         
    },
    settingTextAudio:{
      textTransform: 'uppercase',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FAEBD7',
      textShadowRadius: 2,
      textShadowColor: '#696969',
      textShadowOffset: { width: 1, height: 1 },
      width: "auto",
      height: "auto",
       
    },
    scrollViewContainer:{
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderRadius: 10,
      backgroundColor: 'rgba(240, 255, 240, 0.2)', 
      marginTop: '3%',
      marginBottom: '3%',
      borderLeftWidth: 1,
      borderLeftColor: "rgba(255, 255, 255,0.5)",
      borderTopWidth: 1,
      borderTopColor: "rgba(255, 255, 255,0.5)",
      borderRightWidth: 1,
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0, 0, 0,0.3)",
    },
    containerButtonInput:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 15,
      paddingBottom: 20,
      marginTop: 10,
      width: 500,
      height: 60,

    },
    settingTextAutorization:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FAEBD7',
      textShadowRadius: 2,
      textShadowColor: '#696969',
      textShadowOffset: { width: 1, height: 1 },
      width: 180,
      height: 40,
      backgroundColor: '#7B68EE',
      padding: 5,
      textAlign: 'center',
      borderLeftWidth: 1,
      borderLeftColor: "rgba(255, 255, 255,0.5)",
      borderTopWidth: 1,
      borderTopColor: "rgba(255, 255, 255,0.5)",
      borderRightWidth: 1,
      borderRightColor: "rgba(0, 0, 0,0.3)",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0, 0, 0,0.3)", 
            
    },
    containerButtonInputEmail:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
      marginRight: 15,
      paddingBottom: 20,
      width: "auto",
      height: "auto",
      
    },
    buttonInputEmail:{
      height: 60,
    },
    blockEmailPassword:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: "auto",
      height: 160,
    },
    blockDeleteUser:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: "auto",
      height: 100,
    },
    input:{
      color: 'black',
      width: 220,
      height: 40,
      fontSize: 18,
      backgroundColor: 'rgba(128, 128, 128, 0.3)',
      borderBottomColor: 'rgb(128, 128, 128)',
      borderBottomWidth: 2,
      borderStyle: 'solid',
    },
    });
  
    return (
       <ImageBackground source={require('../../../../assets/img/setting.png')} resizeMode="cover" style={styles.settingСontainer}>
         <InputValueValidation target={inputId}/>
         <ScrollView persistentScrollbar={true} style={styles.scrollViewContainer}>
        <View style={styles.containerTextAudio}>
            <Text style={styles.settingTextAudio}>убрать звук нажатия</Text>
            <Switch
        trackColor={{ false: "#767577", true: "white" }}
        thumbColor={audioClick ? "#7B68EE" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchClick}
        value={audioClick}
      />
        </View>
        <View style={styles.containerTextAudio}>
            <Text style={styles.settingTextAudio}>убрать звук в уровнях</Text>
            <Switch
        trackColor={{ false: "#767577", true: "white" }}
        thumbColor={audioLevel ? "#7B68EE" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchLevel}
        value={audioLevel}
      />
        </View>
        <View style={styles.containerTextAudio}>
            <Text style={styles.settingTextAudio}>убрать звук в игре</Text>
            <Switch
        trackColor={{ false: "#767577", true: "white" }}
        thumbColor={audioGame ? "#7B68EE" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchGame}
        value={audioGame}
      />
        </View>
        <View style={styles.containerButtonInput}>
        <Pressable 
        onPress={() => upDateLogin()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 6
              : 0
          }]}>
        <Text style={styles.settingTextAutorization}>сменить логин</Text>
        </Pressable>
        <TextInput 
        style={[styles.input,borderErrorLogin]}
        onChangeText={onChangeLogin}
        value={login}
        onBlur={()=>nameVerification(login)}
        onFocus={()=>setInputId("")}
        placeholder="login"
        maxLength={12}
        textAlign='center'
        autoCorrect={false}
        disableFullscreenUI={false}/>
        </View>
        <View style={styles.containerButtonInputEmail}>
        <Pressable 
        onPress={() => upDateEmail()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 4
              : 0
          },styles.buttonInputEmail]}>
        <Text style={styles.settingTextAutorization}>сменить email</Text>
        </Pressable>
        <View style={styles.blockEmailPassword}>
        <TextInput 
        style={[styles.input,borderErrorEmail]}
        onChangeText={setNewEmail}
        value={newEmail}
        keyboardType="email-address"
        placeholder="new email"
        textAlign='center'
        autoCorrect={false}
        onBlur={()=>validationEmail(newEmail)}
        disableFullscreenUI={false}/>
        <TextInput 
        style={[styles.input,borderErrorCurrentEmail]}
        onChangeText={setCurrentEmail}
        value={currentEmail}
        keyboardType="email-address"
        placeholder="current email"
        textAlign='center'
        autoCorrect={false}
        disableFullscreenUI={false}/>
        <TextInput 
        style={[styles.input,borderErrorCurrentPassword]}
        onChangeText={setCurrentPassword}
        value={currentPassword}
        placeholder="current password"
        maxLength={20}
        textAlign='center'
        disableFullscreenUI={false}/>
        </View>
        </View>
        <View style={styles.containerButtonInputEmail}>
        <Pressable 
        onPress={() =>  upDatePassword()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 4
              : 0
          },styles.buttonInputEmail]}>
        <Text style={styles.settingTextAutorization}>сменить пароль</Text>
        </Pressable>
        <View style={styles.blockEmailPassword}>
        <TextInput
        style={[styles.input,borderErrorUpUserPassword]}
        onChangeText={setUpUserPassword}
        value={upUserPassword}
        placeholder="new password"
        maxLength={20}
        textAlign='center'
        autoCorrect={false}
        onBlur={()=>complianceСheckPassword(upUserPassword)}
        disableFullscreenUI={false}/>
        <TextInput 
        style={[styles.input,borderErrorCurrentUpUserEmail]}
        onChangeText={setCurrentUpUserEmail}
        value={currentUpUserEmail}
        keyboardType="email-address"
        placeholder="current email"
        textAlign='center'
        autoCorrect={false}
        disableFullscreenUI={false}/>
        <TextInput 
        style={[styles.input,borderErrorCurrentUpUserPassword]}
        onChangeText={setCurrentUpUserPassword}
        value={currentUpUserPassword}
        placeholder="current password"
        maxLength={20}
        textAlign='center'
        disableFullscreenUI={false}/>
        </View>
        </View>
        <View style={styles.containerButtonInputEmail}>
        <Pressable 
         onPress={() => deleteUsers()}
        style={({ pressed }) => [
          {paddingTop: pressed
              ? 4
              : 0
          },styles.buttonInputEmail]}>
        <Text style={styles.settingTextAutorization}>удалить аккаунт</Text>
        </Pressable>
        <View style={styles.blockDeleteUser}>
        <TextInput 
        style={[styles.input,deleteUserborderErrorEmail]}
        onChangeText={setDeleteUserEmail}
        value={deleteUserEmail}
        keyboardType="email-address"
        placeholder="current email"
        textAlign='center'
        autoCorrect={false}
        disableFullscreenUI={false}/>
        <TextInput 
        style={[styles.input,deleteUserBorderErrorPassword]}
        onChangeText={setDeleteUserPassword}
        value={deleteUserPassword}
        placeholder="current password"
        maxLength={20}
        textAlign='center'
        disableFullscreenUI={false}/>
        </View>
        </View>
        </ScrollView>
        </ImageBackground>
    );
  }