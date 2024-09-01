
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  let sortedArray = [];

  matrix.forEach((row, index) => {
      if (index % 2 === 0) {
          sortedArray = sortedArray.concat(row);
      } else {
          sortedArray = sortedArray.concat(row.reverse());
      }
  });

  return sortedArray;
}
