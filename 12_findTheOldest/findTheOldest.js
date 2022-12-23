function totalYearsLived(maxAge,yearOfBirth) {
    if (!maxAge) {
        maxAge = new Date().getFullYear();
    }
    return maxAge - yearOfBirth;
};

const findTheOldest = function(array) {
   return array.reduce((oldest, currentPerson) => {
       const oldestAge = totalYearsLived(oldest.yearOfDeath, oldest.yearOfBirth);
       const currentPersonAge = totalYearsLived(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
       return oldestAge > currentPersonAge ? oldest : currentPerson ;
});
};

// Do not edit below this line
module.exports = findTheOldest;
