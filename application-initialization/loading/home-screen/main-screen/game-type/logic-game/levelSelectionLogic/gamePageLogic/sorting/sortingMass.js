import * as React from 'react';
import {useState,useEffect,useMemo} from 'react';
import {useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, Button,ImageBackground, Dimensions,Text,Pressable } from 'react-native';
import LogickSorting from './logickSorting';

import { useSelector, useDispatch } from 'react-redux';
import { nameGameСhange,numberLevelChangePlus,numberLevelChangeMinus } from '../../../../../../../../../redux/counterSlice';



export default  function SortingMass(props) {
  const isFocused = useIsFocused();
  const isTrueFalse = useSelector(state => state.counter.timeGameEnd);
//массивы элементов
const englishAlphabetMass = ['A(en)','B(en)','C(en)','D','E(en)','F','G','H(en)','I(en)','J','K(en)','L','M(en)','N','O(en)','P(en)','Q','R','S','T(en)','U','V(en)','W','X(en)','Y','Z'];
const russianAlphabetMass = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
const romanNumeralsMass = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX'];
const horoscopeMass = ['Овен','Телец','Близнецы','Рак(г)','Лев(г)','Дева','Весы(г)','Скорпион(г)','Стрелец','Козерог','Водолей','Рыбы(г)'];
const chineseHoroscopeMass = ['Крыса(г)','Бык(г)','Тигр(г)','Кролик(г)','Дракон(г)','Змея(г)','Лошадь(г)','Коза(г)','Обезьяна(г)','Петух(г)','Собака(г)','Свинья(г)'];
const floorsMass = ['Подвал','Цоколь','1 Этаж','2 Этаж','3 Этаж','4 Этаж','5 Этаж','6 Этаж','7 Этаж','8 Этаж','9 Этаж','10 Этаж','11 Этаж','12 Этаж','Мансарда'];
const wagonsMass = ['Головной вагон','1 Вагон','2 Вагон','3 Вагон','4 Вагон','5 Вагон','6 Вагон','7 Вагон','8 Вагон','9 Вагон','10 Вагон','11 Вагон','12 Вагон','13 Вагон',];
const monthsMass = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const cardsMass = ['Тус','Двойка','Тройка','Четверка','Пятерка','Шестерка','Семёрка','Восьмерка','Девятка','Десятка','Валет','Дама','Король'];
const ranksArmyMass = ['Рядовой','Ефрейтор','мл.Сержант','Сержант','ст.Сержант','Старшина','Прапорщик','ст.Прапорщик',
'мл.Лейтенант','Лейтенант','ст.Лейтенант','Капитан','Майор','Подполковник','Ген-майор','Ген-лейтенант','Ген-полковник','Ген. армии','Маршал РФ'];
const numberMass = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
'20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41',
'42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63',
'64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85',
'86','87','88','89','90','91','92','93','94','95','96','97','98','99'];
const TimerIntervalMass =['00:00','00:01','00:02','00:03','00:04','00:05','00:06','00:07','00:08','00:09','00:10',
'00:11','00:12','00:13','00:14','00:15','00:16','00:17','00:18','00:19','00:20','00:21','00:22','00:23','00:24',
'00:25','00:26','00:27','00:28','00:29','00:30','00:31','00:32','00:33','00:34','00:35','00:36','00:37','00:38',
'00:39','00:40','00:41','00:42','00:43','00:44','00:45','00:46','00:47','00:48','00:49','00:50','00:51','00:52','00:53','00:54',
'00:55','00:56','00:57','00:58','00:59','01:00','01:01','01:02','01:03','01:04','01:05','01:06','01:07','01:08',
'01:09','01:10','01:11','01:12','01:13','01:14','01:15','01:16','01:17','01:18','01:19','01:20','01:21','01:22',
'01:23','01:24','01:25','01:26','01:27','01:28','01:29','01:30','01:31','01:32','01:33','01:34','01:35','01:36',
'01:37','01:38','01:39','01:40','01:41','01:42','01:43','01:44','01:45','01:46','01:47','01:48','01:49','01:50',
'01:51','01:52','01:53','01:54','01:55','01:56','01:57','01:58','01:59','02:00','02:01','02:02','02:03','02:04',
'02:05','02:06','02:07','02:08','02:09','02:10','02:11','02:12','02:13','02:14','02:15','02:16','02:17','02:18',
'02:19','02:20','02:21','02:22','02:23','02:24','02:25','02:26','02:27','02:28','02:29','02:30','02:31','02:32',
'02:33','02:34','02:35','02:36','02:37','02:38','02:39','02:40','02:41','02:42','02:43','02:44','02:45','02:46',
'02:47','02:48','02:49','02:50','02:51','02:52','02:53','02:54','02:55','02:56','02:57','02:58','02:59','03:00',
'03:01','03:02','03:03','03:04','03:05','03:06','03:07','03:08','03:09','03:10','03:11','03:12','03:13','03:14',
'03:15','03:16','03:17','03:18','03:19','03:20','03:21','03:22','03:23','03:24','03:25','03:26','03:27','03:28',
'03:29','03:30','03:31','03:32','03:33','03:34','03:35','03:36','03:37','03:38','03:39','03:40','03:41','03:42',
'03:43','03:44','03:45','03:46','03:47','03:48','03:49','03:50','03:51','03:52','03:53','03:54','03:55','03:56',
'03:57','03:58','03:59','04:00','04:01','04:02','04:03','04:04','04:05','04:06','04:07','04:08','04:09','04:10','04:11',
'04:12','04:13','04:14','04:15','04:16','04:17','04:18','04:19','04:20','04:21','04:22','04:23','04:24','04:25',
'04:26','04:27','04:28','04:29','04:30','04:31','04:32','04:33','04:34','04:35','04:36','04:37','04:38','04:39',
'04:40','04:41','04:42','04:43','04:44','04:45','04:46','04:47','04:48','04:49','04:50','04:51','04:52','04:53',
'04:54','04:55','04:56','04:57','04:58','04:59','05:00','05:01','05:02','05:03','05:04','05:05','05:06','05:07','05:08','05:09','05:10','05:11',
'05:12','05:13','05:14','05:15','05:16','05:17','05:18','05:19','05:20','05:21','05:22','05:23','05:24','05:25',
'05:26','05:27','05:28','05:29','05:30','05:31','05:32','05:33','05:34','05:35','05:36','05:37','05:38','05:39',
'05:40','05:41','05:42','05:43','05:44','05:45','05:46','05:47','05:48','05:49','05:50','05:51','05:52','05:53',
'05:54','05:55','05:56','05:57','05:58','05:59','06:00','06:01','06:02','06:03','06:04','06:05','06:06','06:07','06:08','06:09','06:10','06:11',
'06:12','06:13','06:14','06:15','06:16','06:17','06:18','06:19','06:20','06:21','06:22',
'06:23','06:24','06:25','06:26','06:27','06:28','06:29','06:30','06:31','06:32','06:33',
'06:34','06:35','06:36','06:37','06:38','06:39','06:40','06:41','06:42','06:43','06:44',
'06:45','06:46','06:47','06:48','06:49','06:50','06:51','06:52','06:53','06:54','06:55',
'06:56','06:57','06:58','06:59','07:00','07:01','07:02','07:03','07:04','07:05','07:06',
'07:07','07:08','07:09','07:10','07:11',
'07:12','07:13','07:14','07:15','07:16','07:17','07:18','07:19','07:20','07:21','07:22',
'07:23','07:24','07:25','07:26','07:27','07:28','07:29','07:30','07:31','07:32','07:33',
'07:34','07:35','07:36','07:37','07:38','07:39','07:40','07:41','07:42','07:43','07:44',
'07:45','07:46','07:47','07:48','07:49','07:50','07:51','07:52','07:53','07:54','07:55',
'07:56','07:57','07:58','07:59','08:00','08:01','08:02','08:03','08:04','08:05','08:06',
'08:07','08:08','08:09','08:10','08:11',
'08:12','08:13','08:14','08:15','08:16','08:17','08:18','08:19','08:20','08:21','08:22',
'08:23','08:24','08:25','08:26','08:27','08:28','08:29','08:30','08:31','08:32','08:33',
'08:34','08:35','08:36','08:37','08:38','08:39','08:40','08:41','08:42','08:43','08:44',
'08:45','08:46','08:47','08:48','08:49','08:50','08:51','08:52','08:53','08:54','08:55',
'08:56','08:57','08:58','08:59','09:00','09:01','09:02','09:03','09:04','09:05','09:06',
'09:07','09:08','09:09','09:10','09:11',
'09:12','09:13','09:14','09:15','09:16','09:17','09:18','09:19','09:20','09:21','09:22',
'09:23','09:24','09:25','09:26','09:27','09:28','09:29','09:30','09:31','09:32','09:33',
'09:34','09:35','09:36','09:37','09:38','09:39','09:40','09:41','09:42','09:43','09:44',
'09:45','09:46','09:47','09:48','09:49','09:50','09:51','09:52','09:53','09:54','09:55',
'09:56','09:57','09:58','09:59','10:00','10:01','10:02','10:03','10:04','10:05','10:06','10:07','10:08','10:09','10:10','10:11',
'10:12','10:13','10:14','10:15','10:16','10:17','10:18','10:19','10:20','10:21','10:22',
'10:23','10:24','10:25','10:26','10:27','10:28','10:29','10:30','10:31','10:32','10:33',
'10:34','10:35','10:36','10:37','10:38','10:39','10:40','10:41','10:42','10:43','10:44',
'10:45','10:46','10:47','10:48','10:49','10:50','10:51','10:52','10:53','10:54','10:55',
'10:56','10:57','10:58','10:59','11:00','11:01','11:02','11:03','11:04','11:05','11:06','11:07','11:08','11:09','11:10','11:11',
'11:12','11:13','11:14','11:15','11:16','11:17','11:18','11:19','11:20','11:21','11:22',
'11:23','11:24','11:25','11:26','11:27','11:28','11:29','11:30','11:31','11:32','11:33',
'11:34','11:35','11:36','11:37','11:38','11:39','11:40','11:41','11:42','11:43','11:44',
'11:45','11:46','11:47','11:48','11:49','11:50','11:51','11:52','11:53','11:54','11:55',
'11:56','11:57','11:58','11:59','12:00','12:01','12:02','12:03','12:04','12:05','12:06','12:07','12:08','12:09','12:10','12:11',
'12:12','12:13','12:14','12:15','12:16','12:17','12:18','12:19','12:20','12:21','12:22',
'12:23','12:24','12:25','12:26','12:27','12:28','12:29','12:30','12:31','12:32','12:33',
'12:34','12:35','12:36','12:37','12:38','12:39','12:40','12:41','12:42','12:43','12:44',
'12:45','12:46','12:47','12:48','12:49','12:50','12:51','12:52','12:53','12:54','12:55',
'12:56','12:57','12:58','12:59','13:00','13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55',
'14:00','14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50',
'14:55','15:00','15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45',
'15:50','15:55','16:00','16:05','16:10','16:15','16:20','16:25','16:30','16:35','16:40',
'16:45','16:50','16:55','17:00','17:05','17:10','17:15','17:20','17:25','17:30','17:35',
'17:40','17:45','17:50','17:55',
'18:00','18:05','18:10','18:15','18:20','18:25','18:30','18:35','18:40','18:45','18:50',
'18:55','19:00','19:05','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45',
'19:50','19:55','20:00','20:05','20:10','20:15','20:20','20:25','20:30','20:35','20:40',
'20:45','20:50','20:55','21:00','21:05','21:10','21:15','21:20','21:25','21:30','21:35',
'21:40','21:45','21:50','21:55','22:00','22:05','22:10','22:15','22:20','22:25','22:30','22:35','22:40','22:45','22:50','22:55',
'23:00','23:05','23:10','23:15','23:20','23:25','23:30','23:35','23:40','23:45','23:50',
'23:55','23:56','23:57','23:58','23:59']
const dateCalendarMass = ['1 Января','2 Января','3 Января','4 Января','5 Января','6 Января','7 Января','8 Января',
'9 Января','10 Января','11 Января','12 Января','13 Января','14 Января','15 Января',
'16 Января','17 Января','18 Января','19 Января','20 Января','21 Января','22 Января',
'23 Января','24 Января','25 Января','26 Января','27 Января','28 Января','29 Января',
'30 Января','31 Января','1 Февраля','2 Февраля','3 Февраля','4 Февраля','5 Февраля',
'6 Февраля','7 Февраля','8 Февраля','9 Февраля','10 Февраля','11 Февраля','12 Февраля',
'13 Февраля','14 Февраля','15 Февраля','16 Февраля','17 Февраля','18 Февраля','19 Февраля',
'20 Февраля','21 Февраля','22 Февраля','23 Февраля','24 Февраля','25 Февраля','26 Февраля',
'27 Февраля','28 Февраля','29 Февраля','1 Марта','2 Марта','3 Марта','4 Марта','5 Марта',
'6 Марта','7 Марта','8 Марта','9 Марта','10 Марта','11 Марта','12 Марта','13 Марта',
'14 Марта','15 Марта','16 Марта','17 Марта','18 Марта','19 Марта','20 Марта','21 Марта',
'22 Марта','23 Марта','24 Марта','25 Марта','26 Марта','27 Марта','28 Марта','29 Марта',
'30 Марта','31 Марта','1 Апреля','2 Апреля','3 Апреля','4 Апреля','5 Апреля','6 Апреля',
'7 Апреля','8 Апреля','9 Апреля','10 Апреля','11 Апреля','12 Апреля','13 Апреля',
'14 Апреля','15 Апреля','16 Апреля','17 Апреля','18 Апреля','19 Апреля','20 Апреля',
'21 Апреля','22 Апреля','23 Апреля','24 Апреля','25 Апреля','26 Апреля','27 Апреля',
'28 Апреля','29 Апреля','30 Апреля','1 Мая','2 Мая','3 Мая','4 Мая','5 Мая','6 Мая',
'7 Мая','8 Мая','9 Мая','10 Мая','11 Мая','12 Мая','13 Мая','14 Мая','15 Мая','16 Мая',
'17 Мая','18 Мая','19 Мая','20 Мая','21 Мая','22 Мая','23 Мая','24 Мая','25 Мая','26 Мая',
'27 Мая','28 Мая','29 Мая','30 Мая','31 Мая','1 Июня','2 Июня','3 Июня','4 Июня','5 Июня',
'6 Июня','7 Июня','8 Июня','9 Июня','10 Июня','11 Июня','12 Июня','13 Июня','14 Июня',
'15 Июня','16 Июня','17 Июня','18 Июня','19 Июня','20 Июня','21 Июня','22 Июня','23 Июня',
'24 Июня','25 Июня','26 Июня','27 Июня','28 Июня','29 Июня','30 Июня','1 Июля','2 Июля',
'3 Июля','4 Июля','5 Июля','6 Июля','7 Июля','8 Июля','9 Июля','10 Июля','11 Июля',
'12 Июля','13 Июля','14 Июля','15 Июля','16 Июля','17 Июля','18 Июля','19 Июля','20 Июля',
'21 Июля','22 Июля','23 Июля','24 Июля','25 Июля','26 Июля','27 Июля','28 Июля','29 Июля',
'30 Июля','31 Июля','1 Августа','2 Августа','3 Августа','4 Августа','5 Августа',
'6 Августа','7 Августа','8 Августа','9 Августа','10 Августа','11 Августа','12 Августа',
'13 Августа','14 Августа','15 Августа','16 Августа','17 Августа','18 Августа','19 Августа',
'20 Августа','21 Августа','22 Августа','23 Августа','24 Августа','25 Августа','26 Августа',
'27 Августа','28 Августа','29 Августа','30 Августа','31 Августа','1 Сентября','2 Сентября',
'3 Сентября','4 Сентября','5 Сентября','6 Сентября','7 Сентября','8 Сентября','9 Сентября',
'10 Сентября','11 Сентября','12 Сентября','13 Сентября','14 Сентября','15 Сентября',
'16 Сентября','17 Сентября','18 Сентября','19 Сентября','20 Сентября','21 Сентября',
'22 Сентября','23 Сентября','24 Сентября','25 Сентября','26 Сентября','27 Сентября',
'28 Сентября','29 Сентября','30 Сентября','1 Октября','2 Октября','3 Октября',
'4 Октября','5 Октября','6 Октября','7 Октября','8 Октября','9 Октября','10 Октября',
'11 Октября','12 Октября','13 Октября','14 Октября','15 Октября','16 Октября',
'17 Октября','18 Октября','19 Октября','20 Октября','21 Октября','22 Октября',
'23 Октября','24 Октября','25 Октября','26 Октября','27 Октября','28 Октября',
'29 Октября','30 Октября','31 Октября','1 Ноября','2 Ноября','3 Ноября',
'4 Ноября','5 Ноября','6 Ноября','7 Ноября','8 Ноября','9 Ноября','10 Ноября',
'11 Ноября','12 Ноября','13 Ноября','14 Ноября','15 Ноября','16 Ноября',
'17 Ноября','18 Ноября','19 Ноября','20 Ноября','21 Ноября','22 Ноября',
'23 Ноября','24 Ноября','25 Ноября','26 Ноября','27 Ноября','28 Ноября',
'29 Ноября','30 Ноября','1 Декабря','2 Декабря','3 Декабря',
'4 Декабря','5 Декабря','6 Декабря','7 Декабря','8 Декабря','9 Декабря','10 Декабря',
'11 Декабря','12 Декабря','13 Декабря','14 Декабря','15 Декабря','16 Декабря','17 Декабря','18 Декабря','19 Декабря','20 Декабря','21 Декабря','22 Декабря',
'23 Декабря','24 Декабря','25 Декабря','26 Декабря','27 Декабря','28 Декабря',
'29 Декабря','30 Декабря','31 Декабря']
const tableElemMendMass = ['Водород', 'Гелий', 'Литий', 'Бериллий', 'Бор', 'Углерод', 'Азот', 'Кислород', 'Фтор', 'Неон', 'Натрий', 'Магний', 
'Алюминий', 'Кремний', 'Фосфор', 'Сера', 'Хлор', 'Аргон', 'Калий', 'Кальций', 'Скандий', 'Титан', 'Ванадий', 'Хром', 'Марганец', 'Железо', 
'Кобальт', 'Никель', 'Медь', 'Цинк', 'Галлий', 'Германий', 'Мышьяк', 'Селен', 'Бром', 'Криптон', 'Рубидий', 'Стронций', 'Иттрий', 'Цирконий',
 'Ниобий', 'Молибден', 'Технеций', 'Рутений', 'Родий', 'Палладий', 'Серебро', 'Кадмий', 'Индий', 'Олово', 'Сурьма', 'Теллур', 'Иод', 'Ксенон',
  'Цезий', 'Барий', 'Лантан', 'Церий', 'Празеодим', 'Неодим', 'Прометий', 'Самарий', 'Европий', 'Гадолиний', 'Тербий', 'Диспрозий', 'Гольмий', 
  'Эрбий', 'Тулий', 'Иттербий', 'Лютеций', 'Гафний', 'Тантал', 'Вольфрам', 'Рений', 'Осмий', 'Иридий', 'Платина', 'Золото', 'Ртуть', 'Таллий', 
  'Свинец', 'Висмут', 'Полоний', 'Астат', 'Радон', 'Франций', 'Радий', 'Актиний', 'Торий', 'Протактиний', 'Уран', 'Нептуний', 'Плутоний',
   'Америций', 'Кюрий', 'Берклий', 'Калифорний', 'Эйнштейний',"Фермий","Менделевий","Нобелий","Лоуренсий","Резерфордий","Дубний","Сиборгий",
   "Борий","Хассий","Мейтнерий","Дармштадтий","Рентгений","Коперниций","Нихоний","Флеровий","Московий","Ливерморий","Теннессин","Оганесон"]
/*const presidentsMass = ["Джордж Вашингтон", "Джон Адамс", "Томас Джефферсон", "Джеймс Мэдисон", "Джеймс Монро", "Джон Куинси", "Андреас Джексон",
"Мартин Ван Бюрен", "Уильям Гаррисон", "Джон Тилден", "Джеймс К. Полк", "Захария Таунсенд", "Джеймс Буч", "Абрахам Линкольн", "Эндрю Джонсон",
"Уолтер Грант", "Рузвельт Рейган", "Джордж Буш Ст.", "Билл Клинтон", "Джордж Буш Мл.", "Барак Обама", "Дональд Трамп", "Джо Байден"];*/
const layersEarth = ["Внутреннее ядро", "Внешнее ядро", "Мантия","Верхняя мантия", "Земная кора","Тропосфера", "Стратосфера", "Мезосфера", "Термосфера", "Эксосфера"];
const planetMass = ["Солнце", "Меркурий", "Венера","Земля", "Марс","Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"];
 
  let massObj = [englishAlphabetMass,russianAlphabetMass,romanNumeralsMass,TimerIntervalMass,numberMass,horoscopeMass,
  monthsMass,ranksArmyMass,chineseHoroscopeMass,floorsMass,wagonsMass,cardsMass,dateCalendarMass,tableElemMendMass,
  layersEarth,planetMass];
//
//массивы выбранных элементов рандомно
let  nullMass = [];
let  massRandomPosition = [];
let massRandom = [];
const [fullMassElem, setFullMassElem] = useState([]);
const [sortRandomElem, setSortRandomElem] = useState();
//Циклы заполнения массивов элементами
  let numMassTrue= 0;
  useEffect(()=>{
    if(isFocused === true ){
      numMassTrue = Math.floor(Math.random().toString()*massObj.length);

    for(; nullMass.length < props.colElemTrue;){

      let numPosition = massObj[numMassTrue][Math.floor(Math.random().toString()*massObj[numMassTrue].length)]
//проверка на уникальность значения в массиве перед добавлением нового элемента
      if(nullMass.includes(numPosition)){

        nullMass.splice(nullMass.indexOf(numPosition),1,numPosition);
      }else{
        
        nullMass.push(numPosition);
      }  
    }
//

//получаем индексы позиций элементов массива 

    let massBlanckStep = 0;
    let massBlanck = [];
    for(; massBlanckStep < nullMass.length; massBlanckStep++){
      massBlanck.push(massObj[numMassTrue].indexOf(nullMass[massBlanckStep]));
    }

//сортируем их по порядку
massBlanck.sort((a, b) => a - b);
//
// получаем значения индексов массива
    let sortMassStep = 0;
    let sortMass = [];
    for(; sortMassStep < massBlanck.length; sortMassStep++){
      
      sortMass.push(massObj[numMassTrue][massBlanck[sortMassStep]]);
   
    }
    setFullMassElem(sortMass);
//
//вычисления и наполнения массова рандомными позициями    
    let stepNull =0;
    for(; stepNull < props.colBlock; stepNull++){
      massRandomPosition.push(stepNull)
    }

  function stepRandomFunct(){
//цикл выполняеться пока массив не будет полным
    for(; massRandom.length < sortMass.length; ){
//задаем рандомное значение
      let randNum = Math.floor(Math.random().toString()*massRandomPosition.length);
//перед добавлением проверяем массив на повторные элементы если есть удаляем его, если нет добавляем
      if(massRandom.includes(randNum)){

          massRandom.splice(massRandom.indexOf(randNum),1,randNum); 
        }else{
          
          massRandom.push(randNum);
        } 
      }  
//добавляем полный массив уникальных значений в стате
     setSortRandomElem(massRandom);     
  }
//вызываем функцию    
    stepRandomFunct();
}
  },[isFocused])
//
return (
    <LogickSorting sortMass={fullMassElem} sortRandomElem={sortRandomElem} colBlock={props.colBlock} heightElem={props.heightElem} navigation={props.navigation}/>
  );
}