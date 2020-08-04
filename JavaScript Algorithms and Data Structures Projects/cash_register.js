const currancyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]

function checkCashRegister(price, cash, cid) {
    let cashID = []
    cid.forEach(element => {
       cashID.push(element.slice()) 
    });

    let j = cash - price
    let changeDue = +j.toFixed(2)
    let finalChange = [];
    let i = cid.length - 1;
    let currancyUnitCounter = 0
    let closedStatus = 0;
    
    do {
        if (changeDue - currancyUnit[i][1]>=0 && cid[i][1] !== 0) {
            let t = changeDue - currancyUnit[i][1];
            changeDue = +t.toFixed(2);
            currancyUnitCounter += currancyUnit[i][1];
            cid[i][1] -= currancyUnit[i][1];
        } else{ 
            if (currancyUnitCounter > 0) {
                finalChange.push([currancyUnit[i][0], currancyUnitCounter]);
                currancyUnitCounter = 0
            }
            i--
        }  
    } while (i !==-1 && (changeDue >0 || currancyUnitCounter!==0));

    // console.log(cid);
    
    cid.map(function(e){
        if(e[1]> 0){
           console.log(closedStatus++);
           ;
        }
    }); 

    console.log(closedStatus === 0? {status: "CLOSED", change: cashID}
    :   { status: "OPEN", change: finalChange});
    
  

    return  changeDue > 0? { status: "INSUFFICIENT_FUNDS", change: []}
    :   closedStatus === 0? {status: "CLOSED", change: cashID}
    :   { status: "OPEN", change: finalChange}
}

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])