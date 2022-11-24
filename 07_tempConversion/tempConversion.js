const ftoc = function(fahrenheitTemp) {
  return ((fahrenheitTemp-32) * 5/9)//.toFixed(1);


};

const ctof = function(celciusTemp) {
  return ((celciusTemp * 9/5) + 32)//.toFixed(1);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
