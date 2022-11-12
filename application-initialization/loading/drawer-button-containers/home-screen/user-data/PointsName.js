import React from 'react';
import { useState, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import  {firebaseConfig}  from '../../../../../firebaseConfig';
import { getDatabase, ref, onValue} from "firebase/database";

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getDatabase();
  const borderColorRight = 'red';
  
export default function PointsName() {
  
  const [count, setCount] = useState(borderColorRight);
  const [username, setUsername] = useState();
  const [timbon, setTimbon] = useState();
 
    onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      const starCountRef =  ref(db, `users/${auth.currentUser.uid}`);

     onValue(starCountRef, (snapshot) => {
      let data = Object(snapshot.val());

    setUsername(data.username);
    setTimbon(data.timbon);

   });   
    } else {
      console.log('error')
    }
  }); 
  
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
    borderRadius: 10,
    borderColor: '#9ACD32',
    borderWidth: 2, 
    width: 30,
    height: 25,
    position : 'absolute',
    zIndex: 1,
    top: 13,
    left: 5,
    
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
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  borderColor: '#696969',
  fontFamily: 'sans-serif-light',
  textShadowColor: 'black',
  textShadowRadius: 10,
  textShadowOffset:  { width: 2, height: 2 },
  
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
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#696969',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset:  { width: 1, height: 1 },
} 
});
        
        function colorСhangesBorderRight(){
          if(count=='red' ){
            setCount('green')
          }
          if(count=='green' ){ 
            setCount('red')
          }
         }
         
  return (
    <View style={styles.LoginRegister}>
      <Text style={styles.username}>{username}</Text>
        <Image style={styles.icons} source={require('./icons.png')}/>
          <Text style={styles.timbon}>{timbon}t</Text>
    </View>
  );
}    