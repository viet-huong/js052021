

// // +-календарь

let month = prompt('Введите число от 1 до 12', 0);
if(month >=1 && month <= 3){
alert("Winter");
}else if(month >=4 && month <= 6){
alert("Spring");
}else if(month >=7 && month <= 9){
	alert("Summmer");
}else if(month >=10 && month <= 12){
	alert("Autumn");
}else{
 	alert("Вы ввели неверное число");
}



 //верно\невенорно



let test = prompt('Нажмите "ОК"', );
if( test === true){
	alert('Верно')
}else{
 	alert('Неверно')
}



//узнать на счет кнопки "отмена"
//Секунд в сутках



let day = +prompt('Введите желаемое число суток', 0);


if(day >= 0){
	let hours = day * 24;
	let minutes = hours * 60;
	let seconds = minutes * 60;
alert('В ваших ' + day + ' сутки ' + seconds + ' секунд')
}else{
alert('Введите число')
}




// площадь круга
//узнать как исключать типы данных



let radius = +prompt('Введите радиус круга', 0)
if(radius >= 0){
 	let area = Math.PI * Math.pow( radius, 2);
 	alert(`Площадь вашего круга = ${area}`)
}else{
	alert('Введите корректное число')
}






//***
//узнать про десятичные числа 

let num = prompt('Введите число', 0)
num %= 2;
if(num === 0){
	alert('Вы ввели ЧЕТНОЕ число')
}else{
	alert('Вы ввели НЕЧЕТНОЕ число')
}
