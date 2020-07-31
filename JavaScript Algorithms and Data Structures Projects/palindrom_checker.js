function palindrome(str) {
    str  = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = str.split("").reverse().join("");
   console.log(str===reversedStr)
    return str===reversedStr;
  }
  
  
  
  palindrome("not a palindrome")
     // remove all non-alphanumeric characters: punctuation, spaces and symbols
  //turn everything into the same case 