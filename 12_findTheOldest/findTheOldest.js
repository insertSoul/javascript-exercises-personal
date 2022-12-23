const findTheOldest = function(array) {
   return array.reduce((oldest, currentPerson) => {
       const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
       const currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
       return oldestAge > currentPersonAge ? oldest : currentPerson ;
});
};

/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
*/
// Do not edit below this line
module.exports = findTheOldest;
