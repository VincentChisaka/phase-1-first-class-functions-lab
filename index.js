//Code your solution in this file!
function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return [
        drivers[0],
        drivers[1]
    ]
}
function returnLastTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return [drivers[2], drivers[3]]
}
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
function createFareMultiplier(){
      return fareQuintupler
}
  
function fareQuintupler(num) {
    return num * num
}
  
function fareDoubler(fare){
    return fare * 2;
  
}
  
function fareTripler(fare){
    return fare * 3;
  
}
  
  
function selectDifferentDrivers(drivers, func){
    return func(drivers)
}
