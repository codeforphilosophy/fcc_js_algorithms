function telephoneCheck(str) {
    // let numRegex = /^1?\s?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/im


    let numRegex = /^(1(?=\s))?([(][0-9]{3}[)]|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/im
    console.log(numRegex.test(str));
    
    return numRegex.test(str) ;
  }
  
//   telephoneCheck("1 555)555-5555")
  telephoneCheck("(555)555-5555")