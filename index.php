<?php
header('Access-Control-Allow-Origin: *');

$requestText = file_get_contents("php://input");
$jsonDecoder = json_decode($requestText);


function jsonSelect($address){
	
	header('Content-type: application/json');
	$pageParser = file_get_contents("https://".$address);
	$clipping = trim($pageParser," \{\}");
	$separation = str_replace('"',"", $clipping);
	$mass = explode(",", $separation);
	$text = '';

	foreach ($mass as $value) {
	  $text .= "<p class=text>$value</p>";	
	}
	  unset($value);
	  $decoded = json_encode($text);
	echo print_r($decoded) ;	 
}
echo print_r('$decoded') ;
function creatTable($table){
	$strType2 = strtoupper($table[2]);
	$strType4 = strtoupper($table[4]);
	
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		$checkError = $mysqli->query("CREATE TABLE $table[0]($table[1] $strType2, $table[3] $strType4)");
	if($checkError === false){
		echo "<p class=text-error>ошибка!, таблица не создана.</p>";
	}else{
		echo  "<p class=text>Таблица $table[0] столбец $table[1] тип $table[2], столбец $table[3] тип $table[4] успешно созданы</p>";
	}	
	}
	$mysqli->close();
}
function deleteTable($deleteTable){
	
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
	$checkError = $mysqli->query("DROP TABLE $deleteTable[0]");
		if($checkError === false){
			echo "<p class=text-error>ошибка!, данные не удалены.</p>";
		}else{
			echo  "<p class=text>Таблица $deleteTable[0] удалена успешно</p>";
		}	
	}
	$mysqli->close();	
}

function setValueColumnTable($setValueColumnTable){
	
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		$checkError = $mysqli->query("INSERT INTO $setValueColumnTable[0]($setValueColumnTable[1],$setValueColumnTable[2]) VALUES ('$setValueColumnTable[3]','$setValueColumnTable[4]')");
	if($checkError === false){
		echo "<p class=text-error>ошибка!, данные не добавлены.</p>";
	}else{
		echo "<p class=text>Успешно в таблице $setValueColumnTable[0] в столбцы $setValueColumnTable[1],$setValueColumnTable[2] добавленны значения $setValueColumnTable[3], $setValueColumnTable[4] </p>";
	}	
	}
	$mysqli->close();	
}

function getColumnTableInfoInput($getColumnTableInfoInput){
	$val = $getColumnTableInfoInput[0];
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		$getData = $mysqli->query("SELECT $val FROM $getColumnTableInfoInput[1]");
		if($getData === false){
			echo "<p class=text-error>ошибка!, данные не получены.</p>";
		}else{
			foreach ($getData as $elem) {
				$rezult .= "<p class=text>$elem[$val]</p>";
			}
			unset($elem);
			echo $rezult;
		}
	}
	$mysqli->close();	
}
function getColumnTable($getColumnTable){
	
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		$checkError = $mysqli->query("ALTER TABLE $getColumnTable[0] ADD $getColumnTable[1] $getColumnTable[2]");
	if($checkError === false){
		echo "<p class=text-error>ошибка!, данные не добавлены.</p>";
	}else{	
		
		echo "<p class=text>Столбец $getColumnTable[1] с типом $getColumnTable[2] в $getColumnTable[0] успешно добавлен</p>";
	}
	}
	$mysqli->close();	
}

function sortColumnTable($sortColumnTable){
	$val = $sortColumnTable[1];
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		if($sortColumnTable[2] === "ORDER BY"){
			$getData = $mysqli->query("SELECT * FROM $sortColumnTable[0] $sortColumnTable[2] $sortColumnTable[1]");
			if($getData === false){
				echo "<p class=text-error>ошибка!, данные не получены.</p>";
			}else{		
				foreach ($getData as $elem) {
					$rezult .= "<p class=text>$elem[$val]</p>";
			}	
			unset($elem);
			echo $rezult;
			}
		}else{
			$getData = $mysqli->query("SELECT * FROM $sortColumnTable[0] ORDER BY $sortColumnTable[1] DESC");
			if($getData === false){
				echo "<p class=text-error>ошибка!, данные не получены.</p>";
			}else{		
				foreach ($getData as $elem) {
					$rezult .= "<p class=text>$elem[$val]</p>";
			}	
			unset($elem);
			echo $rezult;
		}
	}	
	}
	$mysqli->close();	
}

function deleteColumn($deleteColumn){
	
	$mysqli = new mysqli("localhost", "root", "", "testdb");
	if($mysqli == false){
		echo "ошибка!, нет соединения с базой данных.";
	}else{
		$checkError = $mysqli->query("ALTER TABLE $deleteColumn[0] DROP COLUMN $deleteColumn[1]");
	if($checkError === false){
		echo "<p class=text-error>ошибка!, данные не удалены.</p>";
	}else{
		echo "<p class=text>Успешно столбец $deleteColumn[1] в таблице $deleteColumn[0] удален </p>";
	}
	}
	$mysqli->close();	
}

switch ($jsonDecoder[1][0]) {
    case "parser":
        jsonSelect($jsonDecoder[0][0]);
        break;
    case "createTable":
        creatTable($jsonDecoder[0]);
        break;
    case "deleteTable":
        deleteTable($jsonDecoder[0]);
        break;
	case "getColumnTableInfoInput":
		getColumnTableInfoInput($jsonDecoder[0]);
		break;
	case "getColumnTable":
		getColumnTable($jsonDecoder[0]);
		break;
	case "sortColumnTable":
		sortColumnTable($jsonDecoder[0]);
		break;
	case "setValueColumnTable":
		setValueColumnTable($jsonDecoder[0]);
		break;
	case "deleteColumn":
		deleteColumn($jsonDecoder[0]);
		break;
}
?>