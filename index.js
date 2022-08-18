// Code your solution in this file!
const returnFirstTwoDrivers = function( arrayDrivers){
    return (arrayDrivers.slice(0,2))
    }
    const returnLastTwoDrivers= function (arrayDrivers){
        return (arrayDrivers.slice(-2))
    }
    const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

    function createFareMultiplier(y){
        return function(fare=5) {
            return fare * y;
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare) {
  return  createFareMultiplier(3)(fare);
}
    
function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
} 
