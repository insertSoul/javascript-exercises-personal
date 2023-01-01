const caesar = function(string, shiftValue) {
    if (shiftValue < 0) {
        shiftValue = 26 + (shiftValue % 26)
    }
    shiftedStringArray =[];
    for (let i = 0; i <= string.length -1; i++){
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 ) {  //if lowercase
            let shiftedCharacter = ((string.charCodeAt(i) -97) + (shiftValue % 26)) % 26 ; 
            shiftedCharacter += 97
            shiftedCharacter = String.fromCharCode(shiftedCharacter);
            shiftedStringArray.push(shiftedCharacter);
        } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ) { //if uppercase
            let shiftedCharacter =  ((string.charCodeAt(i) -65) + (shiftValue %26)) % 26; 
            shiftedCharacter += 65
            shiftedCharacter = String.fromCharCode(shiftedCharacter);
            shiftedStringArray.push(shiftedCharacter);
        } else {
            shiftedStringArray.push(string[i])
        }
    }
    return shiftedStringArray.join('');
};

//// ##############PSEUDO CODE ########### /////////

//unicode for a-z is 97-122, A-Z 65-90
//use charCodeat() to convert to unicode
// use fromCharCode() to convert back!
// function to take a string and a shiftValue as parameters

// limit to 26 or use %26 to keep in range
// needs to deal with negatives shiftValues
    // if negative 26 + (shiftValue % 26)
// needs to deal with wrapping round alphabet (z + 1 => a) && (a -1 => z)
// use the reminder (%) to loop

//shift values
    // -1 = +25 , -2 = +24 , -3= + 23

//for lower case need to - 97 off uniocde to bring down to 1-26 range
//for upper case need to - 65 off uniocde to bring down to 1-26 range

// check if shift value is negative
    //if it is turn it into corresponding positive shift
//create blank array to fill
//turn string into array
//loop through string
    // if lowercase:
        // do shift and place in in new string
    // if uppercase:
        // do shift and place in in new string
    // else place charecter in final (spaces and punctuation)
//convert array back to string
//return string


// Do not edit below this line
module.exports = caesar;

