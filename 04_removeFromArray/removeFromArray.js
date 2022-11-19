
let discardValue = []
const removeFromArray = function( array, ...itemsToRemove) {
    for (const arg of itemsToRemove) {
        for (let i = 0 ; i <= array.length -1 ; i++) {
            if (array[i] === arg) {
            discardValue = array.splice(i, 1);
            }
        }
    }
   console.log(array);
   return array;
};





// Do not edit below this line
module.exports = removeFromArray;


// Loop through the array
// check if items are equal
// if equal remove at givin index

// Change funtion to accept multiple arguments