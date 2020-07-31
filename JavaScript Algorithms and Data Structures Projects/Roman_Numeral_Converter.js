function convertToRoman(num) {
    let arrNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        arrRomanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'], 
        finalRomanNum = [];

    i = 0;
    while(num > 0){
      if(num - arrNum[i]>=0){
          finalRomanNum.push(arrRomanNum[i]);
          num -= arrNum[i];
      } else{
          i++;
      }
    }

    // console.log(finalRomanNum.join(''));
    
    return finalRomanNum.join('');
   }
   
   convertToRoman(1983);

   //MCMLXXXIII