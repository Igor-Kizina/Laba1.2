var value1 = 'aa';
var value2 = 'bb';
function concatenateStrings(value1, value2) {
    var value3 = value1 + value2;
    return value3;
}
var rez = concatenateStrings(value1, value2)
console.log(`${rez}`);

var str = 'dasrSFasf';
function getStringLength(str) {
    var Rez = str.length;
    return Rez
}
var a =  getStringLength(str);
console.log(`${a}`);

var firstName = `Привет`;
var lastName = `Джон Доу`;
function getStringFromTemplate(firstName, lastName) {
    var strPi = firstName + ' ' + lastName + '!';
    return strPi;
}
var Rez = getStringFromTemplate(firstName, lastName);
console.log(`${Rez}`);

var strP = `Привет Джон Доу!`;
function extractNameFromTemplate(value){
	var a = value.length - 1;
	var w = value.slice(7, a);
	return W;
}
var Rez = extractNameFromTemplate(strP);
console.log(`${Rez}`);

var strP = `John Doe`;
console.log(strP.charAt(0));

var strP = `\tJohn Doe `;
console.log(strP.trim());

var strP = 'A';
var n = 5;
console.log(strP.repeat(n));

var strP = 'ABABAB';
var n = 'AB';
console.log(strP.replace(n));

var strP = '<ABABAB>';
var sq = strP.replace('<', '');
var rez = sq.replace('>', '')
console.log(rez);

var strP = 'asdsfdgr';
console.log(strP.toUpperCase());


var a = 5.10;
var b = 5.5;
function getRectangleArea(a,b){
	var S = a * b;
	return S;
}

let S = getRectangleArea(a, b);
console.log(`S = ${S}`);

var a = 5.10;
function getRectangleArea(a){
	var S = 2 * a * Math.PI;
	return S;
}

let Res = getRectangleArea(a);
console.log(`S = ${Res}`);

var a = 5;
var b = 5;
function getRectangleArea(a, b){
	var S = (a + b) /2;
	return S;
}

let Res = getRectangleArea(a, b);
console.log(`${Res}`);

var x1 = -5;
var y1 = 0;
var x2 = 10;
var y2 = -10;
function getDistanceBetweenPoints(x1, y1, x2, y2){
	var temp = (Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	var Result = Math.sqrt(temp);
	return Result;
}
	
let Result = getDistanceBetweenPoints(x1, y1, x2, y2);
console.log(`${Result}`);

var value = 37;

function getLastDigit(value){
	var Result = value % 10;
	return Result;
}
	
let Result = getLastDigit(value);
console.log(`${Result}`);

var value ='370';

function parseNumberFromString(value){
	var Result = parseFloat(value);
	return Result;
}
	
let Result = parseNumberFromString(value);
console.log(`${Result}`);

var a = 1;
var b = 1;
var c = 1;

function getParallelipidedDiagonal(a,b,c){
	var temp = (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
	Result = Math.sqrt(temp);	
	return Result;
}
	
let Result = getParallelipidedDiagonal(a,b,c);
console.log(`${Result}`);



var arr = [1, 2, 3, 4];
var n = 2;

function findElement(arr, n){
	var S = arr.indexOf(n);
	return S;
}

let Res = findElement(arr, n);
console.log(`${Res}`);

function generateOdds(len) {
	return new Array(len).fill(0).map((_, i) => 2 * i + 1);
}

console.info(generateOdds(5));

var arr = [1, 3, 4, 5,];
var item = 2;
var index = 1;
function insertItem(arr, item, index)  {
	return arr.splice(index, 0, item);
}

console.log(insertItem(arr, item, index));

var arr = [1, 2, 3, 4];
var n = 2;

function findElement(arr, n){
	var S = arr.slice(0, n);
	return S;
}

let Res = findElement(arr, n);
console.log(`${Res}`);

var arr = [1, 2, 3, 4];
var n = 2;

function toArrayOfSquares(arr) {
		
	return S = arr.map(item => item * item);
}

let Res = toArrayOfSquares(arr);
console.log(`${Res}`); 

var arr = [1, 2, 3, 4];

function  getSecondItems(arr) {
		
	return S = arr.filter((item, index) => index %2);
}

let Res =  getSecondItems(arr);
console.log(`${Res}`); 

var arr = ['nine','one'];

function  sortDigitNamesByNumericOrder(arr) {
		
	return S = arr.sort();
}

let Res =  sortDigitNamesByNumericOrder(arr);
console.log(`${Res}`); 

var arr = [1, 2, 3, 4, 5, 6];
var res = arr.reduce(function(sum, elem) {return sum + elem}, 0);
console.log(res);



var n = 5;
function getFactorial(n)   {
	var res = 1;
	for(var i = 1; i < n; i++)
	res += res * i;
	 return  res;
	
}

console.log(getFactorial(n));

var nMin = 5;
var nMax = 10;
function getSumBetweenNumbers(nMin, nMax) {
	var res = 0;
	for(var i = nMin; i <= nMax; i++)
	res += i;
	 return  res;
	
}

console.log(getSumBetweenNumbers(nMin, nMax));

var a = 10;
var b = 10;
var c = 10;

function Triangle(a, b, c) {
	var res;
	if ((a < b + c) && (b < c + a) && (c < b + a))
		return res = 'true';
	else
		return res = 'false';
}

let Res =  Triangle(a, b, c);
console.log(`${Res}`); 

var circle = 10;
var pointX = 6;
var pointY = 5

function  isInsideCircle(circle, pointX, pointY) {
	var res;
	if (circle > pointX && circle > pointY)
		return res = 'true';
	else
		return res = 'false';
}

let Res =   isInsideCircle(circle, pointX, pointY);
console.log(`${Res}`); 

var str = 'abacabca';

function  findFirstSingleChar(str) {
	var res, temp, i = 0, a, temres;
	var n = str.length;
		for(var i = 0; n; i++) {
		temp = str[i];
		a = 0;
		if(i == n - 1) {
			temres = 'Null';
			break;
		}
		for(var j = 0; j < n; j++) {
			if(temp == str[j]) {
				++a;
			}
		}
		if(a == 1) {
			temres = str[i];
			break;
		}		
	}
		return res = temres;
}

let Res =   findFirstSingleChar(str);
console.log(`${Res}`); 

var str = 'noon';

function   reverseString(str) {
	for(var i = str.length; i >= 0; i--) {
		var str2 = str2 + str[i]
	}
		return res = str2;
}

let Res =    reverseString(str);
console.log(`${Res}`); 

var num = 1234;

function reverseInteger(num) {
		var Res = 0;
		while(num) {
			Res = Res * 10 + num % 10;
			num = Math.floor(num / 10);
		}
		return Res;
}

let Res = reverseInteger(num);
console.log(`${Res}`); 

var num = 12345;

function getDigitalRoot(num) {
		var Res = 0, sum = 0, sum2 = 0, tmp;
		
		while (num){
			tmp = num % 10;
			num = (num - tmp) / 10;
			sum += tmp;
		}
		tmp = sum % 10;
		sum = (sum - tmp) / 10;
		sum += tmp;
		return Res = sum;
	}
	
let Res = getDigitalRoot(num);
console.log(`${Res}`); 
