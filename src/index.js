
module.exports = function towelSort(matrix) {
    let res = [];
    if (!Array.isArray(matrix)) return [];
    if (matrix.length === 0) return [];
    for (let i = 0; i < matrix.length; i++) {
       if (i % 2 === 0) {
            res = res.concat(matrix[i]);
       } else {
            res = res.concat(matrix[i].reverse());
       }
    }
   return  res
};
