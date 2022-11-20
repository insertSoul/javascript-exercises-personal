const sumAll = function(int1, int2) {
    if (int2 < int1) {
        [int2, int1] = [int1, int2]
    }
    let totalSum = 0
    for (let i = int1; i <= int2; i++) {
        totalSum += i
    }
    return totalSum

};

// Do not edit below this line
module.exports = sumAll;

// take 2 intergers
// loop increaseing
//start at int1, stop at (and include) int2
// on each loop add the values together
// return final addition
