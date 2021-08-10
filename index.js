// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let arr = []
    arr[0] = array[0]
    arr[1] = array[1]
    return arr
}

const returnLastTwoDrivers = function(array){
    let arr = []
    arr[0] = array[array.length-2]
    arr[1] = array[array.length-1]
    return arr
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function(fare){
        return fare * mult
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, func) {
    return func(drivers)
}