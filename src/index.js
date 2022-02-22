
module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) return result;
    for (let i = 0; i < matrix.length; i++) {
        console.log(i);
        let subMatr = matrix[i];
        if (i % 2 !== 0) {
            subMatr.reverse();
        }
        subMatr.forEach(element => {
            result.push(element);
        });
    }
    return (result);
}
