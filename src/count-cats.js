const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  k = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === '^^') {
        k = k + 1;
      }
    }
  }
  if (k > 0) {
    return k;
  } else {
    return 0;
  }
};
