import React from 'react';
import { useState} from 'react';
import { StyleSheet, Text, View, Pressable,Switch,ScrollView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { initializeApp } from 'firebase/app';
import {getAuth, updateEmail, deleteUser ,signInWithEmailAndPassword,updatePassword } from 'firebase/auth';
import {getFirestore , collection, doc, updateDoc,getDocs , query,orderBy,deleteDoc, waitForPendingWrites  } from "firebase/firestore"; 
import { getDatabase, ref,remove,update } from "firebase/database";
import  {firebaseConfig}  from '../../../../firebaseConfig';



export default function Correspondence() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const dbF = getFirestore();
  const db = getDatabase();
  const collectionUsers = collection(dbF, "users");
  const docUsers = doc(dbF, "users", auth.currentUser.uid);
  const filterItemsGetFirestore = query(collectionUsers, orderBy("gender"));

  const [hiddenInfoBlock, setHiddenInfoBlock] = useState('none');
  const [colorText, setColorText] = useState("yellow");

  const [deleteUserPassword, setDeleteUserPassword] = useState("");
  const [deleteUserEmail, setDeleteUserEmail] = useState("");
  const [deleteUserBorderErrorPassword, setDeleteUserBorderErrorPassword] = useState({borderBottomColor: 'rgb(128, 128, 128)'});
  const [deleteUserborderErrorEmail, setDeleteUserBorderErrorEmail] = useState({borderBottomColor: 'rgb(128, 128, 128)'});


// Открытия письма 
function openMessage(){
    setHiddenInfoBlock('flex');
    setColorText('rgba(	0, 0, 0,0.5)');
}
///
function closeMessage(){
  setHiddenInfoBlock('none');
  
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
      backgroundColor: '#8FBC8F', 
    },
    scrollViewContainer:{
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderRadius: 10,
      backgroundColor: 'rgba(0, 0, 255, 0.2)', 
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
    containerText:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 15,
      width: 600,
      height: 40,
         
    },
    titleText:{
      textTransform: 'uppercase',
      fontSize: 18,
      fontWeight: 'bold',
      color: colorText,
      textShadowRadius: 2,
      textShadowColor: '#696969',
      textShadowOffset: { width: 1, height: 1 },
      width: "auto",
      height: "auto",
       
    },
    infoContainerText:{
        display: hiddenInfoBlock,
        position: 'absolute',
        top: '10%',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: 700,
        height: 300,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 128, 128, 0.8)',
            
      },
    infoText:{
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DEB887',
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 1 },
        marginLeft: 20,
        marginRight: 15,
        width: "auto",
        height: "auto",
         
      },
    infoTextTimer:{
      
        fontSize: 16,
        fontWeight: '400',
        color: '#8B0000',
        textShadowRadius: 2,
        textShadowColor: '#696969',
        textShadowOffset: { width: 1, height: 1 },
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
       <ImageBackground source={require('../../../../assets/img/Correspondence.png')} resizeMode="cover" style={styles.settingСontainer}>
         <ScrollView persistentScrollbar={true} style={styles.scrollViewContainer}>
        <Pressable  style={styles.containerText} onPress={()=>openMessage()}>
            <Text style={styles.titleText}>открыть письмо</Text>
                
        </Pressable >
        
        </ScrollView>
          <Pressable style={styles.infoContainerText} onPress={()=>closeMessage()}>
            <Text style={styles.infoText}>Здравствуйте мистер, Переменная! Для вас есть задание, если возьметесь?! (текст задания в переменной) </Text>
            <Text style={styles.infoTextTimer}>Этот текс самоуничтожится через... (таймер) </Text>
          </Pressable>
        </ImageBackground>
    );
  }