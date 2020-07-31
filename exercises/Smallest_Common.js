function isPrime(n){
    
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

function nextPrime(param){
    let nextP = param;
    do {
        nextP++;
    }
    while (!isPrime(nextP));
    return nextP
}

function smallestMultiple(num) {
    let multipArr = [];
    let i = 2;
    let temNum = num;
    while(temNum !==1){
        if(temNum % i === 0){
            temNum = temNum/i;
            multipArr.push(i);
        } else{
            i = nextPrime(i) 
        }
    }
    // console.log(multipArr);
    return multipArr;
}


// smallestMultiple(10)

function smallestCommons(arr) {
    let allCommons = [];
    let smallestCom =[] ;
    let maxElement = Math.max(arr[0], arr[1]);
    let minElement = Math.min(arr[0], arr[1]);
    for(let j = minElement; j <= maxElement; j++){
        allCommons.push(smallestMultiple(j));
    }
    
    for (let i =0; i<allCommons.length-1; i++){{
        for (let k = i+1; k < allCommons.length; k++){
            for (let j = 0; j< allCommons[i].length; j++){
                if(allCommons[k].indexOf(allCommons[i][j]) !==-1){
                    let deleteIndex = allCommons[k].indexOf(allCommons[i][j])
                    allCommons[k].splice(deleteIndex, 1);
                }
            }
        }
        // smallestCom.push(allCommons[i]);
    }
}
let flatCommons = allCommons.flat();
let common = flatCommons.reduce((a,b) => a * b)
console.log(common);
}

// smallestCommons([1, 5]);
// smallestCommons([2, 10]);
smallestCommons([5, 1]);