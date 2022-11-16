const repeatString = function(string, number) {
    if (number >= 0) {
        return string.repeat(number);
    } else {
        return ("ERROR");
    }
};
number = Math.floor(Math.random() * 1000);
repeatString('', number);

// Do not edit below this line
module.exports = repeatString;
