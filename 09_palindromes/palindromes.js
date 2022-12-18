const palindromes = function (startingString) {
    newString = startingString.toLowerCase()
    newString = newString.replace(/\W/g, ''); //Remove non-alphanumerics
    newArray = newString.split('');
    midpoint = ((newArray.length -1)/2) + 1
    for(let i = 0 ; i < midpoint ; i++) {
        if (newArray[i] == newArray[(newArray.length -i -1 )]) {
        } else {
            return false;
        }
    } return true;
};


// Do not edit below this line
module.exports = palindromes;
