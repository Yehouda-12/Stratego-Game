function error() {
  console.log("Sorry, Can't go there");
}
function move(board, player, location1, location2) {
  player.location = board[location1][location2];
}

// function getBoarders(board, player) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (i === 0 && j === 0) {
//         console.log("You'r available movements are [down, right]");
//         let choice = input("Enter your choice");
//         if (choice === "left" || choice === "up") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i === 0 && j < board.length - 1) {
//         console.log("You'r available movements are [down, right, left]");
//         let choice = input("Enter your choice");
//         if (choice === "up") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i === 0 && j === board.length - 1) {
//         console.log("You'r available movements are [down, left]");
//         let choice = input("Enter your choice");
//         if (choice === "up" || choice === "right") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i < board.length - 1 && j === 0) {
//         console.log("You'r available movements are [down, right, up]");
//         let choice = input("Enter your choice");
//         if (choice === "left") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i < board.length - 1 && j === board.length - 1) {
//         console.log("You'r available movements are [down, up, left]");
//         let choice = input("Enter your choice");
//         if (choice === "right") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i === board.length - 1 && j === 0) {
//         console.log("You'r available movements are [up, right]");
//         let choice = input("Enter your choice");
//         if (choice === "left" || choice === "down") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i === board.length - 1 && j < board.length - 1) {
//         console.log("You'r available movements are [up, right, left]");
//         let choice = input("Enter your choice");
//         if (choice === "down") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       } else if (i === board.length - 1 && j === board.length - 1) {
//         console.log("You'r available movements are [up, left]");
//         let choice = input("Enter your choice");
//         if (choice === "down" || choice === "right") {
//           error();
//         } else {
//           move(board, player, i, j);
//         }
//       }
//     }
//   }
// }
function getPossibleMoves(matrix, player) {
  const moves = [];

  const directions = {
    up:    { r: -1, c:  0 },
    down:  { r:  1, c:  0 },
    left:  { r:  0, c: -1 },
    right: { r:  0, c:  1 }
  };

  for (const [dir, delta] of Object.entries(directions)) {
    const newRow = player.row + delta.r;
    const newCol = player.col + delta.c;

    if (newRow >= 0 &&
        newRow < matrix.length &&
        newCol >= 0 &&
        newCol < matrix[0].length) {
      moves.push(dir);
    }
  }

  return moves;
}
let grid = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

let player = { row: 2, col: 2 };

console.log(getPossibleMoves(grid, player));
// Retour: ["down", "left", "right"]