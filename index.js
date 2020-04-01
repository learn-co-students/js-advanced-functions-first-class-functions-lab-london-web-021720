// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(0, 2)

const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers)