
function isValid(sudoku, r, c, k) {
    for (let i = 0; i < 9; i++) {
        if (sudoku[r][i] === k) { return false; }
    }
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][c] === k) { return false; }
    }


    let r_grid = Math.floor(r/3);
    let c_grid = Math.floor(c/3);

    for (let i = r_grid * 3; i < (r_grid * 3) + 3;  i++) {
        for (let j = c_grid * 3; j < (c_grid * 3) + 3; j++) {
            if (sudoku[i][j] === k) { return false; }
        }
    }

    return true; 

}

export function solve(sudoku, r, c) {
    if (r === 9) {
        return true; 
    }
    else if (c === 9 ) {
        return solve(sudoku, r+1, 0)
    } else if (sudoku[r][c] !== 0) {return solve(sudoku, r, c+1)}
    else {
        for (let k = 1; k <= 10; k++) {
            if (isValid(sudoku, r, c, k)) {
                sudoku[r][c] = k;
                if (solve(sudoku, r, c + 1)) {return true}
                sudoku[r][c] = 0
            }
        }
        return false
    }
}

export function check(sudoku_solution, sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku_solution[i][j] !== sudoku[i][j]) {
                return false;
            } 
        }
    }
    return true;
}