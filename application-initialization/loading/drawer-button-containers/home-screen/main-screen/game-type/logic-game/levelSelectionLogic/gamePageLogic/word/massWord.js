import React from 'react';
import { StyleSheet, View, Button,Text,Dimensions } from 'react-native';
import {useState,useEffect,useMemo} from 'react';
import {useIsFocused } from '@react-navigation/native';
import LogickWord from './logickWord';
import Svg, { Circle, Rect ,Line, Polyline,Path,Ellipse } from "react-native-svg"

//массив рандомных элементов 
const massRandom = [];
//

function MassWord(props) {
//массивы элементов
const graphicShapes = ['Октаэдр','Двуклиноид','Икосаэдр','Тетраэдр','Бипирамида','Призма','Гиробифастигиум','Куб','Параллелепипед','Ромбододекаэдр',
'Ромбоэдр','Ехиднаэдр','Додекаэдр','Ромбоикосододекаэдр','Икосододекаэдр','Ромбогексаэдр','Додекододекаэдр','Тетрагемигексаэдр','Кубооктаэдр','Антипризма','Пентеракт','Тессеракт',
'Декеракт','Эннеракт','Октеракт','Гептеракт','Гексеракт','Точка','Отрезок','Прямоугольник','Пирамида','Клин',
'Купол','Соты','Гексеконтаэдр','Икоситетраэдр','Скутоид','Трапецоэдр','Тринадцатигранник','Осоэдр','Сфера','Многогранник',
'Апофема','Бикупол','Девятигранник','Диаграмма','Диэдр','Дуопризма','Зоноэдр','Пятиячейник','Шестигранники','Холиэдр','Полуикосаэдр',
'Политоп','Фасета','Симплекс','Шар','Цилиндр','Треугольник','Звезда(геометрия)','Конус','Бливет','Полиэдр','Полноторие','Полусфера',
'Ось','Круг','Ломаная линия','Луч(геометрия)','Кривая','Параболоид','Полукруг','Прямой угол','Трикветр','Четырёхугольник','Салинон','Квадрат','Угол(геометрия)','Окружность',
'Зигзаг','Трёхгранный угол','Кольцо(геометрия)','Трапеция','Спираль','Квадратриса','Кохлеоида','Трактриса','Трохоида','Эпициклоида',
'Эннеаграмма','Пятиугольник','Параллелогон','Октаграмма','Зоногон','Парабола','Эллипс'];
const animalHerbivores = ['Бобр','Бегемот','Сухо-ная черепаха','Морская свинка','Жираф','Мышь','Хомяк','Крыса','Ящерица',
'Хамелеон','Ёжь','Кролик','Слепыш','Утка','Капибара','Геккон','Улитка','Шиншилла','Игуана','Пищуха',
'Лемур','Сумчатая летяга','Цокор','Як','Тушканчик','Свинья','Олень','Полёвка','Овца','Осёл','Лошадь','Коза','Козёл','Корова','Ишак',
'Верблюд','Бантенг','Баран','Буйвол','Страус','Альпака','Мул','Лама','Лемминг','Слепушонка','Пеструшка','Песчанка','Бурундук','Суслики','Сурок','Лесная соня',
'Белозубка','Путорак','Кутора','Крот','Выхухоль','Морская свинья','Косуля','Лось','Кабарга','Бизон','Зубр','Дзерен','Сайга','Амурский горал','Овцебык','Джейран',
'Кабан','Слон','Носорог','Кенгуру','Лощадь','Конь','Вомбат','Утконос','Макака','Павиан анубис','Мартышка','Горилла','Карликовый лори','Восточный потто','Галаго','Крошечная игрунка',
'Мармозетка','Тамарин Грэлла','Белолобый капуцин','Капуцин-фавн','Голоухий саймири','Мирикина Спикса','Озёрный прыгун','Белоногий саки','Западный какажао','Бурый ревун',
'Перуанская коата','Рыжеватая обезьяна','Мартышка мона','Мартышка-гусар','Хохлатый павиан','Тонкский макак','Мандрил','Танский мангабей','Хохлатый тонкотел',
'Красный лангур','Носач','Гиббон Мюллера','Западный хулок','Шимпанзе','Орангутан','Зебра','Ленивец',];
const animalsPredatory  = ['Собака','Кошка','Змея','Краб','Питон','Осьминог','Хорек','Вепрь','Манул','Подковонос','Усатая ночница','Широкоушка','Бурый ушан','Рыжая вечерница',
'Нетопырь-карлик','Поздний кожан','Трубконос','Длиннокрыл','Летучая мышь','Рысь','Леопард','Тигр','Ирбис','Пантера',
'Каракал','Полосатая гиена','Корсак','Лисица','Шакал','Волк','Тюлень','Морж','Морской лев','Морской заяц','Соболь','Лесная куница','Ласка',
'Горностай','Колонок','Европейская норка','Перевязка','Лесной хорёк','Росомаха','Барсук','Енот-полоскун','Медведь','Речная выдра','Бурозубка','Пресно-ная черепаха','Нарвал','Клюворыл','Тасманский дьявол','Пума','Сурикат','Скунс','Снежный барс','Ягуар','Песец','Панда',
'Фосса','Мунго Грандидье','Гепард','Красная панда','Губач','Байкальская нерпа','Калан','Сивуч','Морской слон','Хохлач','Барибал','Собака Динго','Фенек',
'Водяной мангуст','Ласка','Генетта','Циветта','Солонгой','Какомицли','Коати','Кинкажу','Линзанга','Фаналука','Оцелот','Крокодил','Майконг','Маргай','Медоед','Мангуст-крабоед',
'Онцилла','Ягуарунди','Кугуар','Сервал','Кульпео','Зорро Азара','Койот','Носуха','Медведь Гризли','Мусанг','Лахтак','Ехидна','Барракуда','Мурена'];
const englishAlphabet = ['Q','W','E(eng)','R','T(eng)','Y','U','I','O(eng)','P(eng)','A(eng)','S','D','F','G','H(eng)','J','K(eng)','L','Z','X(eng)','C(eng)','V','B(eng)','N','M(eng)'];
const russianAlphabet = ['Ё','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю'];
const romanNumerals = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX'];
const massObj = [englishAlphabet,animalHerbivores,graphicShapes,russianAlphabet,animalsPredatory,romanNumerals];
//

//массивы выбранных элементов рандомно
const  massRandomElemTrue = [];
const  massRandomElemFalse = [];
const  massRandomPosition = [];
const [fullMassElem, setNumberInMass] = useState([]);
const [massElemFalse, setMassElemFalse] = useState([]);
const [sortRandomElem, setSortRandomElem] = useState();
//
const isFocused = useIsFocused();

//Определяет размер экрана и тем саммым колличество элементов на экране
let widthWind=  Dimensions.get('window');
const [colBlock, setColBlock] = useState(21);
useEffect(()=>{
  if(widthWind.width > 760){
    return setColBlock( 21);
  }else{
   return  setColBlock( 10);
  }
},[widthWind]);
//

//Циклы заполнения массивов элементами
  let stepTrue = 0;
  let stepFalse = 0; 
  let numMassTrue ;
  let numMassFalse ; 
  
  useEffect(()=>{
    
    numMassTrue = Math.floor(Math.random().toString()*massObj.length);
    for(;stepTrue<props.colElemTrue;stepTrue++){
      massRandomElemTrue.push(massObj[numMassTrue][Math.floor(Math.random().toString()*massObj[numMassTrue].length)]);
      
    }
    numMassFalse = Math.floor(Math.random().toString()*massObj.length);
    if(numMassFalse === numMassTrue){
      if(numMassTrue>0){
        numMassFalse = Math.floor(Math.random().toString()*massObj.length)-1;
      }else{
        numMassFalse = Math.floor(Math.random().toString()*massObj.length)+1;
      } 
    }
    for(;stepFalse<props.colElemFalse;stepFalse++){
      massRandomElemFalse.push(massObj[numMassFalse][Math.floor(Math.random().toString()*massObj[numMassFalse].length)]);
      
    }

    const massRezult = [];
    setNumberInMass(massRezult.concat(massRandomElemTrue,massRandomElemFalse).sort(() => Math.random() - 0.4));
    setMassElemFalse(massRandomElemFalse);

//вычасления и наполнения массова рандомными позициями    
    let stepNull =0;
    for(; stepNull < colBlock; stepNull++){
      massRandomPosition.push(stepNull)
    }

    function stepRandomFunct(){
      let stepRandom =0;
      for(; stepRandom < massRandomElemTrue.length + massRandomElemFalse.length; stepRandom++){
        massRandom.push(Math.floor(Math.random().toString()*massRandomPosition.length));
      }

      massRandom.forEach((element,index,array) => {
        if(array.includes(element) && array.indexOf(element) !== index){
          stepRandomFunct();
        }else{
          setSortRandomElem(array);
        }
      });
      
    }
    
    stepRandomFunct();
    
  },[props.colElemTrue])
//

  return (
    <LogickWord massRandomElemTrue={fullMassElem} massRandomElemFalse={massElemFalse} sortRandomElem={sortRandomElem} colElem={colBlock}/>
  )
}
export default MassWord;
