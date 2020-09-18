// let board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""]
//   ];

// this takes position of the remaining square
// let available = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function check_equals(a, b, c) {
    return a == b && b == c && a != '';
}
  

function checkwinner(board, available) {
    let winner = null;
  
    // horizontal
    for (let i = 0; i < 3; i++) {
      if (check_equals(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    }
  
    // vertical
    for (let i = 0; i < 3; i++) {
      if (check_equals(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }
  
    // diagonal
    if (check_equals(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (check_equals(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
  
    if (winner == null && available.length == 0) {
      return 'draw';
    } else {
      return winner;
    }
}

// export function for other use
module.exports = { checkwinner }

// a = checkwinner()
// console.log(a)