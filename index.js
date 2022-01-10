// Code your solution in this file!
const returnFirstTwoDrivers = function(driver) {
    let firstTwoDrivers = [];
    firstTwoDrivers.push(driver[0]);
    firstTwoDrivers.push(driver[1]);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(driver) {
    let lastTwoDrivers = [];
    lastTwoDrivers.push(driver[driver.length-2]);
    lastTwoDrivers.push(driver[driver.length-1]);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
        return function () {
            return fare * fare;
        }
}

function fareDoubler (fare) {
    return fare * 2;
}

function fareTripler (fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, lastTwoDrivers) {
    return lastTwoDrivers(drivers);
}