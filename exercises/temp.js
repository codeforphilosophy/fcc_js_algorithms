function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  console.log(arr.map(function(i){
    let numOrbitalPeriod = Math.round(Math.sqrt(Math.pow(( i.avgAlt + earthRadius), 3)/GM)*2*Math.PI)
    return{
      name: i.name,
      orbitalPeriod:numOrbitalPeriod
    }
  })) 
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])