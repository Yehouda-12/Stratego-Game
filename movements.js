function error() {
  console.log("Sorry, Can't go there");
}

function checkTile(board, row, col) {
    return board[row][col]

function move(board, player, row, col) {
    let beforeMove = [player.row, player.col]
    if (checkTile(board, row, col) === null) {
        [player.row, player.col] = [row, col]
        board[row][col] = player
        board[beforeMove[0]][beforeMove[1]] = null
    } else {
        battle(board, player, row, col)
    }
}
function getPossibleMoves(board, player) {
    const possibleMoves = {};


    const directions = {
        up: { r: -1, c: 0 },
        down: { r: 1, c: 0 },
        left: { r: 0, c: -1 },
        right: { r: 0, c: 1 }
    };

    for (const [dir, delta] of Object.entries(directions)) {
        const newRow = player.row + delta.r;
        const newCol = player.col + delta.c;

        if (newRow >= 0 &&
            newRow < board.length &&
            newCol >= 0 &&
            newCol < board[0].length) {
            possibleMoves [dir] = delta;
        }
    }

    return possibleMoves;
}
export function updatePosition(possiblesMoves, player, dir) {
  const delta = possiblesMoves[dir];
  const update = []
  
  
  if (delta) {
    const newRow = player.row + delta.r;
    
    update.push(newRow)
    
    const newCol = player.col + delta.c;
    
    update.push(newCol)
    
  }
  return update
}


export function battle(board, player, fromRow, fromCol) {
  let tile = board[fromRow][fromCol];

  if (tile.type.includes("flag")) {
    console.log(`${player.type} found the flag!`);
  } else if (tile.type.includes("soldier")) {
    if (tile.rank > player.rank) {
      console.log(
        `${player.type} lost the battle against grade ${tile.rank} soldier!`
      );
      board[player.row][player.col] = null;
    } else if (tile.rank === player.rank) {
      console.log("two lose");
      board[player.row][player.col] = null;
      board[fromRow][fromCol] = null;
    } else {
      console.log(
        `${player.type} won the battle against grade ${tile.rank} soldier!`
      );
      board[fromRow][fromCol] = player;
      board[player.row][player.col] = null;
    }
  }
}
