import * as React from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { modalLoginEnd  } from '../../../redux/counterSlice';

export default function LoginVerification()  {

  const count = useSelector(state => state.counter.value3)
  const dispatch = useDispatch()
  
  
   const styles = StyleSheet.create({
      container:{
         display: 'none',
         position: count,
         width: '100%',
         height: '100%',
         
      },
      centeredView: {
        justifyContent: "center",
        alignContent: "center",
        flexWrap: 'wrap',
        flexDirection: 'row'
        
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonClose: {
         width: 80,
         height: 30,
         paddingTop: 2,
         marginTop: 5,
        backgroundColor: "#2196F3",
      },
      modalText: {
        textAlign: "center",
        fontSize: 18
      }
    });    
    
  return (
   <View style={styles.container}>
    <View style={styles.centeredView}>
     
        <View  style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Вы ввели менее 2 символов, либо этот логин занят!</Text>
            <TouchableOpacity 
              style={styles.buttonClose}
              onPress={() => dispatch(modalLoginEnd())}
            >
              <Text style={styles.modalText}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    </View>
  );
};