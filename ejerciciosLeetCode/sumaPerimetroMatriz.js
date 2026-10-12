/**
 * @param {number[][]} grid
 * @return {number}
 * 
grid = [[0,1,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [1,1,0,0]]

 */
var islandPerimeter = function (grid) {

    let perimetro = 0;
    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && grid[i][j] === 1) {
                perimetro++;
            }
            if (i === grid.length - 1 && grid[i][j] === 1){
                perimetro++;
            }
            if ((grid[i][j] === 1 && grid[i][j + 1] === 0) || (grid[i][j] === 0 && grid[i][j + 1] === 1)) {
                perimetro++;
            }
            if (j === 0  && grid[i][j] === 1) {
                perimetro++;
            }
            if (j === grid[i].length - 1 && grid[i][j] === 1) {
                perimetro++;
            }
            if (i > 0 && ((grid[i][j] === 1 && grid[i - 1][j] === 0) || (grid[i][j] === 0 && grid[i - 1][j] === 1))) {
                perimetro++;
            }
        }
    }
    return perimetro;
};

console.log(islandPerimeter([[1, 0]]));