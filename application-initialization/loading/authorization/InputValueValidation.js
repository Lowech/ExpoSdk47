import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import { useState,useEffect,useRef} from 'react';
import { useSelector } from 'react-redux';


export default function InputValueValidation(props)  {

  const displayValue = useSelector(state => state.counter.value1);

  const [textError, setTextError] = useState('');
  const [leftPosition, setLeftPosition] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(-100)).current;
  
   
  const resetAnimation = () => {Animated.timing( fadeAnim1,{
    toValue: -100,
    duration: 300,
    useNativeDriver: false
  }).start(),
   Animated.timing(fadeAnim,{
    toValue: 0,
    duration: 500,
    useNativeDriver: false
  }).start() 
}
  const blockOffsetVisibility = () => {  Animated.timing( fadeAnim1,{
    toValue: 20,
    duration: 300,
    useNativeDriver: false
  }).start(),
  Animated.timing(fadeAnim,{
    toValue: 1,
    duration: 500,
    useNativeDriver: false
  }).start() 
}

   const styles = StyleSheet.create({
      container:{
         display: 'flex',
         position: "absolute",
         width: 400,
         height: 'auto', 
         left: leftPosition,
         borderRadius: 10,
         padding: 10,
         backgroundColor: "white",
         alignItems: "center",
         zIndex: 1 
      },
      buttonClose: {
         width: 80,
         height: 30,
         paddingTop: 2,
         marginTop: 10,
         marginBottom: 5,
        backgroundColor: "#2196F3",
      },
      modalText: {
        textAlign: "center",
        fontSize: 18
      }
    });
        
    let date = new Date();
    useEffect(()=>{
      switch (props.target) {
        case "дата рождения":
          setTextError(`Не указана дата рождения или указано не корректное значение `);
          blockOffsetVisibility();
          break;
        case "ник":
          setTextError( 'Вы ввели менее 2 символов, либо этот логин занят!' );
          blockOffsetVisibility();
          break;
        case "пароль":
          setTextError('Введите комбинацию из '+'a-z, A-Z, 0-9, # = № ! : ; % ? + ^ -'+' не менее 8 знаков.');
          blockOffsetVisibility();
          break;
        case "почта":
          setTextError('Уже существует такой пользовтель или вы ввели некоретнный email.');
          blockOffsetVisibility();
          break; 
        case  "логин или пароль":
          setTextError('Неверный логин или пароль.');
          blockOffsetVisibility();
          setLeftPosition(200);
          break;
        case  "email правильный":
          setTextError('На вашу почту отправленно письмо, следуйте иструкции в письме для изменения пароля.');
          blockOffsetVisibility();
          setLeftPosition('27%');
          break;
        case  "email неправильный":
          setTextError('Неверный email или такой не существует.');
          blockOffsetVisibility();
          setLeftPosition('27%');
          break;
        case  "пароль сброс":
          setTextError('Введите комбинацию из '+'a-z, A-Z, 0-9, # = № ! : ; % ? + ^ -'+' не менее 8 знаков.');
          blockOffsetVisibility();
          setLeftPosition('10%');
          break;
        case  "ник сброс":
          setTextError( 'Вы ввели менее 2 символов, либо этот логин занят!' );
          blockOffsetVisibility();
          setLeftPosition('25%');
          break;
        case  "ник обновлен удачно":
          setTextError( 'Логин удачно изменен' );
          blockOffsetVisibility();
          setLeftPosition('25%');
          break;
        case  "email существует":
          setTextError('email уже существует или вы ввели некоретнный email.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break; 
        case  "email обновлен удачно":
          setTextError('email удачно обновлен.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break; 
        case  "email или пароль не верны":
          setTextError('текущий email или пароль не существует или введен не верно.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break; 
        case  "не верный пароль настройки":
          setTextError('Введите комбинацию из '+'a-z, A-Z, 0-9, # = № ! : ; % ? + ^ -'+' не менее 8 знаков.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break;
        case  "пароль обновлен удачно":
          setTextError('пароль обновлен удачно.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break;
        case  "аккаунт удален":
          setTextError('Аккаунт удален удачно.');
          blockOffsetVisibility();
          setLeftPosition('25%');
          break;
      }
    },
       [props.target]
    );

    useEffect(()=>{
      resetAnimation()  
    },
       [displayValue],
    );

  return (
    <Animated.View style={[styles.container,{opacity: fadeAnim, top: fadeAnim1}]}>
      <Text style={styles.modalText}>{textError}</Text>
          <TouchableOpacity 
            style={styles.buttonClose}
            onPress={()=>resetAnimation()}>
              <Text style={styles.modalText}>ok</Text>
          </TouchableOpacity>    
    </Animated.View>
  );
};