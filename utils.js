export function createBoard(rows, initialValue = null) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < rows; j++) {
      row.push(initialValue);
    }
    board.push(row);
  }
  return board;
}

export function soldiers(array,type,grade,num) {
  
  for (let i = 1; i <= num ; i++) {
    let soldier = { type: type, grade: grade };
    array.push(soldier);
  }
  
}

export function createSoldiers(type){
  let soldiersArray =[]
  soldiers(soldiersArray,type,1,1);
  soldiers(soldiersArray,type,2,8)
  soldiers(soldiersArray,type,3,5)
  soldiers(soldiersArray,type,4,4);
  soldiers(soldiersArray,type,5,4);
  soldiers(soldiersArray,type,6,4);
  soldiers(soldiersArray,type,7,5);
  soldiers(soldiersArray,type,8,4);
  soldiers(soldiersArray,type,9,3);
  soldiers(soldiersArray,type,10,1)
  
  

  return soldiersArray

  

}

export function soldiersInBoard(board, soldiers, startRow) {
  const rows = board.length;
  const cols = board[0].length;

  
  let rowCounts = Array(rows).fill(0);

  for (let i = 0; i < soldiers.length; i++) {
    let placed = false;
    while (!placed) {
      let row = Math.floor(Math.random() * 4) + startRow; 
      let col = Math.floor(Math.random() * cols);        

      
      if (board[row][col] === null && rowCounts[row] < 10) {
        board[row][col] = soldiers[i];
        rowCounts[row]++; 
        placed = true;
      }
    }
  }
  return board;
}


export function createFlag(array,type) {
  array.push({type: type })
  
}
// export function flagInBoard(flag, board, row, col) {
//   board[row][col] = flag;
//   return board;
// }

// export function createPlayer(name, row, col) {
//   return { type: "player", name: name, row: row, col: col };
// }

// export function playerInBoard(board, player) {
//   board[player.row][player.col] = player;
//   return board;
// }

// export function soldierInBoard(board, soldier, row, col) {
//   board[row][col] = soldier;
// }

export function printBoard(board) {
  let display = board
    .map((row) =>
      row
        .map((cell) => {
          if (!cell) return ".";
          if (cell.type === "soldierPc" || cell.type === 'flagPc') return "X";
          // if (cell.type === "flag") return "F";
          if (cell.type === "soldierPlayer" || cell.type === 'flagPlayer') return "O";
          
        })
        .join(" ")
    )
    .join("\n");

  console.log(display);
}
function getPossibleMoves(matrix, player) {
  const moves = [];

  const directions = {
    up: { r: -1, c: 0 },
    down: { r: 1, c: 0 },
    left: { r: 0, c: -1 },
    right: { r: 0, c: 1 },
  };

  for (const [dir, delta] of Object.entries(directions)) {
    const newRow = player.row + delta.r;
    const newCol = player.col + delta.c;

    if (
      newRow >= 0 &&
      newRow < matrix.length &&
      newCol >= 0 &&
      newCol < matrix[0].length
    ) {
      moves.push(dir);
    }
  }

  return moves;
}
export function movePlayer(board, player, dir) {
  const directions = {
    up: { r: -1, c: 0 },
    down: { r: 1, c: 0 },
    left: { r: 0, c: -1 },
    right: { r: 0, c: 1 },
  };
  if (directions[dir]) {
    board[player.row][player.col] = null;
    player.row += directions[dir].r;
    player.col += directions[dir].c;
  }

  return playerInBoard(board, player);
}

export function initGame(name) {
  let board = createBoard(10);
  let soldiers = soldiersPc();
  let boardSoldiers = soldiersInBoard(board, soldiers);
  let puflag = flagInBoard(createFlag(), board, 0, 9);

  return board;
}



export function checkCase(board, row, col) {
  return board[row][col];
}


export function battle(board, player) {
  let location = checkCase(board, player.row, player.col);
  if (location !== null) {
    if (location.type === "flag") {
      console.log(`${player.name} found the flag!`);
    } else if (location.type === "soldier") {
      if (location.grade > 1 && location.grade < 9) {
        console.log(
          `${player.name} lost the battle against grade ${location.grade} soldier!`
        );
      } else {
        console.log(
          `${player.name} won the battle against grade ${location.grade} soldier!`
        );
        board[player.row][player.col] = player;
      }
    }
  }
}



let soldiersPC =  createSoldiers('soldierPc')
let soldierPlayer = createSoldiers('soldierPlayer')
createFlag(soldiersPC,'flagPc')
createFlag(soldierPlayer,'flagPlayer')


let board = createBoard(10)
board = soldiersInBoard(board,soldierPlayer,0)
board = soldiersInBoard(board,soldiersPC,6)
console.log(board);
printBoard(board)




