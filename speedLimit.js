function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return
  }
  
   const points = Math.floor((speed - speedLimit) / 5);
   if (points >= 12) 
    console.log("license suspended!");
   else 
    console.log(points + " Points");
  
}
checkSpeed(70);
 