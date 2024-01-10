export function isValid(sudoku, r, c, k) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[r][i] === k) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][c] === k) {
      return false;
    }
  }

  let r_grid = Math.floor(r / 3);
  let c_grid = Math.floor(c / 3);

  for (let i = r_grid * 3; i < r_grid * 3 + 3; i++) {
    for (let j = c_grid * 3; j < c_grid * 3 + 3; j++) {
      if (sudoku[i][j] === k) {
        return false;
      }
    }
  }

  return true;
}

export function flattenSudoku(s) {
  let flat = [];
  for (let i = 0; i < 9; i++) {
    flat.push(new Array(9));
  }
  console.log(s);
  s.forEach((t) => {
    t.forEach((u) => {
      u.forEach((v) => {
        v.forEach((w) => {
          flat[w.r][w.c] = w.value;
        });
      });
    });
  });
  return flat;
}

export function copyIntoSudoku(flat, s_prime) {
  let s = s_prime;
  s.forEach((t) => {
    t.forEach((u) => {
      u.forEach((v) => {
        v.forEach((w) => {
          w.value = flat[w.r][w.c];
        });
      });
    });
  });
  return s;
}
