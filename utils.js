


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

export function soldiersPc() {
  let soldiers = [];
  for (let grade = 1; grade <= 10; grade++) {
    let soldier = { type: "soldier", grade: grade };
    soldiers.push(soldier);
  }
  return soldiers;
}

export function soldiersInBoard(board, soldiers) {
  let row = 0;

  for (let i = 0; i < 9; i++) {
    board[row][i] = soldiers[i] 
  }

  return board;
}

export function createFlag() {
  return { type:'flag' };
}
export function flagInBoard(flag, board, row, col) {
  board[row][col] = flag;
  return board;
}

export function createPlayer(name,row,col) {
  return { type: 'player' ,name :name,row:row,col:col

  };
}

export function playerInBoard(player, board) {
  board[player.row][player.col] = player;
  return board;
}




export function soldierInBoard(board,soldier,row,col){
    board[row][col] = soldier


}

export function printBoard(board) {
  let display = board.map(row =>
    row.map(cell => {
      if (!cell) return "."; 
      if (cell.type === "soldier") return "S"; 
      if (cell.type === "flag") return "F";    
      if (cell.type === "player") return "P"; 
      return "?"; 
    }).join(" ")
  ).join("\n");

  console.log(display);
}

export function initGame(name) {
  let board = createBoard(10);
  let soldiers = soldiersPc();
  let boardSoldiers = soldiersInBoard(board, soldiers);
  let puflag = flagInBoard(createFlag(), board, 0, 9);
  let player = createPlayer(name,9,5);
  let putPlayer = playerInBoard(player, board, 9, 5);

  return board
}

let board = initGame('yehouda')
printBoard(board)