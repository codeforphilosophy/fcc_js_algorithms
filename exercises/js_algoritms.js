// function bouncer(arr) {
//     let truthyArr = [];
//     for (var i=0; i<arr.length; i++){
//     console.log(!!arr[i])
//       if(!!arr[i]){
//         truthyArr.push(arr[i])
//       }
//     }
//     return truthyArr
//   }

//   bouncer([7, "ate", "", false, 9]);

// function getIndexToIns(arr, num) {
//     let arrSorted = arr.sort(function(a, b){return a-b});
//     if(arrSorted.length === 0){
//       return 0
//     }
//     if(arrSorted[arrSorted.length-1]<num){
//        return arrSorted.length;
//     }
//     for(let i = 0; i<arrSorted.length; i++){
//       if(num<=arrSorted[i]){
//         return i;
//       }    
//     }  
//   }
   
//   getIndexToIns([5, 3, 20, 3], 5) 
// //    should return . 



// function mutation(arr) {
//     let str = arr[0];
//     let strSub = arr[1]
//     let result = strSub.test(str)
//     return result ;
//   }
  
//   mutation(["hello", "Hello"]);


//   function chunkArrayInGroups(arr, size) {
//     let finalArr=[];
//     let maxNum  = arr.length;
//     let k = Math.floor(arr.length/size)
//     for (let i=0; i<k; i++){
//         if (maxNum>size){
//         let j= arr.splice(0,size)
//         finalArr.push(j)
//         }
//     }
//     if (!arr.length % size === 0){
//         finalArr.push(arr)
//     }
//     return finalArr;
//   }

//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)


// The global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add (bookArr, bookName) {
//   let bookListAdd = [...bookArr];
//   bookListAdd.push(bookName);
//   return bookListAdd;
  
//   // Change code above this line
// }

// // Change code below this line
// function remove (bookArr, bookName) {
//   let bookListRemove= [...bookArr];
//   var bookIndex = bookListRemove.indexOf(bookName);
//   if (bookIndex >= 0) {
//     bookListRemove.splice(bookIndex, 1);
//     return bookListRemove;

//     // Change code above this line
//     }
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

// // MAP FUNCTION IMITATION
// // The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   // Only change code below this line
//     this.forEach(item => newArray.push(item))
//   // Only change code above this line
//   return newArray;

// };

// var new_s = s.myMap(function(item){
//   return item * 2;
// });
// //FILTER FUNCTION IMITATION
// // The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback){
//   // Only change code below this line
//   var newArray = [];
//   this.forEach(function (e){
//     if(callback(e) == true){
//       newArray.push(e)
//     }
//   })
//   // Only change code above this line
//   return newArray;

// };

// var new_s = s.myFilter(function(item){
//   return item % 2 === 1;
// });



// /////////////////////////////////
// const squareList = (arr) => {
    // Only change code below this line
//     return arr.filter(num => {
//        if (num > 0 && Number. isInteger(num)){
//          return num
//        }
//     }).map(val=>{
//       return Math.pow(val, 2)
//     });
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);



////////////////////////////
function alphabeticalOrder(arr) {
    // Only change code below this line
  
  console.log(arr.sort((a,b) => {return b-a} ))
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);