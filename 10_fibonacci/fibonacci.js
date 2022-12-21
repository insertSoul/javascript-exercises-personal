const fibonacci = function(input) {
    if (input < 0) return "OOPS";
    if (input < 2) return 1;
    fibonacciArray = [1, 1];
    for (i = 2; i <= input -1; i++) {
        let nextFibonacciNumber = fibonacciArray[(fibonacciArray.length -1)] + fibonacciArray[(fibonacciArray.length -2)]
        fibonacciArray.push(nextFibonacciNumber)
    }
    return fibonacciArray[fibonacciArray.length -1]
};


// start with an array [1, 1]
//if input < 0 return opps.
//if input < 2 return 1;
//if input > 2 :
    // create loop that stops at input number
        // Push the addition of last 2 elements onto the array
    // return the final input
   

// Do not edit below this line
module.exports = fibonacci;
