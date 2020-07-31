// function rot13(str) {
//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let rotString = ''
//     for (let i = 0; i<str.length; i++){
//         if (alphabet.includes(str[i])) {
//             let indexOfLetter = alphabet.indexOf(str[i]),
//             searchIndex = indexOfLetter + 13,
//             plusIndex = indexOfLetter - 13;
            
//             if(searchIndex >= alphabet.length){
//                 rotString+= alphabet[plusIndex];
//             } else{
//                 rotString+= alphabet[searchIndex]
//             } 
//         } else{
//             rotString+= str[i];
//         }
//     }
//     return rotString;
// }

// function rot13(str) {
//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//     let rotString = ''
//     for (let i = 0; i<str.length; i++){
//         if (alphabet.includes(str[i])) {
//             let indexOfLetter = alphabet.indexOf(str[i])
//             rotString+= alphabet[indexOfLetter + 13]
//         } else{
//             rotString+= str[i];
//         }
//     }
//     console.log(rotString);
    
//     return rotString;
// }

function rot13(str) {
    let rotString = ''
    for (let i = 0; i<str.length; i++){
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <78) {
            rotString+= String.fromCharCode(str.charCodeAt(i) + 13);
        } else if (90 >= str.charCodeAt(i) && str.charCodeAt(i)>=78) {
            rotString+= String.fromCharCode(str.charCodeAt(i) - 13);
        }
        else{
            rotString+= str[i];
        }
    }
    console.log(rotString);
    
    return rotString;
}

// rot13("SERR PBQR PNZC");
// rot13("SERR CVMMN!")
// rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")