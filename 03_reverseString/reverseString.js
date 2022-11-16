const reverseString = function(string) {
    let stringArray = string.split("");
    stringArray = stringArray.reverse();
    let reverseString = stringArray.join("");
    return reverseString;
};

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
