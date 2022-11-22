/*
const leapYears = function(theYear) {
    if (theYear % 400 == 0) return true;
    if (theYear % 4 == 0 && theYear % 100 != 0) {
        return true;
    } else return false;

};
*/

// refactor into one line
const leapYears = function(theYear) {
    if (theYear % 400 == 0 || (theYear % 4 == 0 && theYear % 100 != 0)) {
        return true;
    } else return false;

};

// Do not edit below this line
module.exports = leapYears;


// if divisible by 4 and not divisiable by 100 it is a leap year 
// unless divisable by 400!