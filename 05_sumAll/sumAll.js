const sumAll = function(int1, int2) {
    if (int2 < int1) {
        [int2, int1] = [int1, int2]
    }
    if (Math.sign(int1) == 1 && Number.isInteger(int1) && Number.isInteger(int2)) {
        let totalSum = 0;
        for (let i = int1; i <= int2; i++) {
            totalSum += i;
        }
        return totalSum;
    } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;

// take 2 integers
// loop increasing
//start at int1, stop at (and include) int2
// on each loop add the values together
// return final addition

// return errors for negative or non 0 answers

//Improvements:
// int1 and int 2 arnt the best names, min and max would have been better!
//Math.sign might be less readable (and multiple things happening on one line)
// if (min < 0 || max < 0) return "ERROR"; would be better (and checks both!)