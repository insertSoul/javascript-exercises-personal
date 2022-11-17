const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return "ERROR";
    } 
    let theRepeatedString = "";
    for (let i=0 ; i < repeats ; i++) {
        theRepeatedString += string;
    }
    return theRepeatedString;
}


// Old method below did not use a loop
/*
const repeatString = function(string, number) {
    if (number >= 0) {
        return string.repeat(number);
    } else {
        return ("ERROR");
    }
};
number = Math.floor(Math.random() * 1000);
repeatString('', number);
*/
// Do not edit below this line
module.exports = repeatString;
