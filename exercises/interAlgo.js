//============= Seek and Destroy ===========//
function destroyer(arr) {
  let arrArguments = []
  for(let i = 1; i<arguments.length; i++){
    arrArguments.push(arguments[i])
  }
  
  let arrFilter = arr.filter(item => !arrArguments.includes(item))
  
  return arrFilter;
}


function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  let arrFilter = arr.filter(item => !args.includes(item))
  return arrFilter;
}
destroyer([1, 2, 3, 1, 2, 3, ], 2, 3); 



//============== USING KEY TO COMPARE TWO OBJECTS======//
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
  for (let object of collection){
    let found = 0;
    for (let key in source){
      if(object.hasOwnProperty(key) && object[key] === source[key]){
        found++;
      }
    }
    if (found === Object.keys(source).length){
      arr.push(object);
    }
  }
  // Only change code above this line
  console.log(arr);
}


//================STRING TO SPINAL CASE==================//
function spinalCase(str) {
  //find uc next to lc and add space before
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  //replace underscore
  str = str.replace(/_/g, " ");
  
  //replace space with hyphen
  str = str.replace(/\s/g, "-" );
  
  //remove comma
  str = str.replace(/,/g, "" );
  
  str = str.toLowerCase();
  
  return str;
}

spinalCase('This Is Spinal Tap');

//============================Pig Latin==============================//
function translatePigLatin(str) {
  const startsWithVowel = /^([aeiou])(.*)/;
  const startsWithConsonant = /^([^aeiou]+)(.*)/;
  
  return str.replace(startsWithConsonant,(...args) =>`${args[2]}${args[1]}ay`).replace(startsWithVowel, (...args) => `${args[1]}${args[2]}way`);;
}

translatePigLatin("consonant");

//=============================Search and Replace==================//

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)){
    let upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, upperAfter);
  } else {
    return str.replace(before, after);
  };
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//========================Object create==============//
// **My version**
const basePairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
}
function pairElement(str) {
  let mainArr = []
  for (let char of str) {
    mainArr.push([char , basePairs[char]]);
  }
  console.log(mainArr)
}
// **freecodecamp version**
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
pairElement("GCG");

//=====================Intermediate Algorithm Scripting: Missing letters==============//
function fearNotLetter(str) {
  for(let i = 0; i<str.length-1; i++){
    if(str.charCodeAt(i+1) - str.charCodeAt(i)>1){
      let missingLetter = str.charCodeAt(i+1) - 1
      console.log(String.fromCharCode(missingLetter));
    }
  }
  return undefined;
}

fearNotLetter("abcdefghjklmno")

//==========SORT UNIQUE VALUES===========//

function uniteUnique(arr) {
  //flatten arguments array
  const flattened = [].concat.apply([], arguments)
  // use filter's callback to check uniqueness
  var unique = flattened.filter( (value, index, array) => {
    return array.indexOf(value) === index;
  }); 
  console.log(unique);
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//==============Fibonaci Num============//
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  
  return result;
}


sumFibs(4); 
//5

//Intermediate Algorithm Scripting: Sum All Primes

function primeNum(n){
  
  if (n === 2){
    return true
  }
  if (n % 2 === 0){
    return false
  }
  for (let i = 3; i < n; i+=2){
    if (n % i === 0){
      return false;
    }
  } 
  
  return true
  
}

function sumPrimes(num){
  let sum =  0;
  for (let i = 2; i <= num; i ++){
    if(primeNum(i)){
      sum+=i;
    }
  }
  return sum;
}
sumPrimes(977);

//=====================================Drop it=========================//
// my solution
function dropElements(arr, func) {
  let foundElements; 
  for(let i = 0; i<arr.length; i++){
    if(func(arr[i])){
      let elementIndex = arr.indexOf(arr[i]);
      foundElements = arr.slice(elementIndex);
      break;
    } 
  }
  if (foundElements === undefined){
    foundElements = []
  }
  console.log(foundElements);
  
}
// freecodecamp solution
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})

//====================================== from Binary to String========================//
function fromBinary(str){
  let binaryToString = str.split(' ').map(i => String.fromCharCode(parseInt(i, 2))).join('');
  
  console.log(typeof stringToArray);
}

//=======================Check true of False===================//
// Sariyya's solution
function truthCheck(collection, pre) {
  let counter = 0;
  if(collection.every(i => i.hasOwnProperty(pre))){
    for (let obj of collection){
      if(obj[pre]){
        counter++;
      } else {
        return false
      }
    }
  } else {
    return false
  }
  if (counter === collection.length){
    return true
  }
}

// Nurlan's solution//
function truthCheck(collection, pre) {
  return collection.every(i => i.hasOwnProperty(pre) && i[pre])
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//=============================Functional programming Curried function==============//

function addTogether() {
  if (arguments.length > 1){
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])){
      return undefined
    } 
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
      return arguments[0]+arguments[1];
    }
  }

  if (arguments.length === 1) {
    if (!Number.isInteger(arguments[0])){
      return undefined
    } 
    
    let a = arguments[0]
    return function(b){
      return a+b;
    };

  }
}

let k = addTogether(2)(5);
console.log(k);