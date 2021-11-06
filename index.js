// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0,2);
 }

 const returnLastTwoDrivers = function(drivers) {
     return drivers.slice(2,4);
 }

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 let createFareMultiplier = fareMultiplier => {
     return function(rate) {
        return rate * fareMultiplier; 
     }
    }

const fareDoubler = createFareMultiplier(2)        

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
    


    
