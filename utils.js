


function createBoard(rows, initialValue = null) {
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
  for (let i = 1; i < 10; i++) {
    let soldier = { [i]: "X" };
    soldiers.push(soldier);
  }
  return soldiers;
}

export function soldiersInBoard(board, soldiers) {
  let row = 0;

  for (let i = 0; i < 9; i++) {
    board[row][i] = soldiers[i]  //[Object.keys(soldiers[i])[0]]
  }

  return board;
}

export function createFlag() {
  return { flag: "X" };
}
export function flagInBoard(flag, board, row, col) {
  board[row][col] = flag;
  return board;
}

export function createPlayer(name) {
  return { player: name };
}

export function playerInBoard(player, board, row, col) {
  board[row][col] = player;
  return board;
}

export function initGame() {
  let board = createBoard(10);
  let soldiers = soldiersPc();
  let boardSoldiers = soldiersInBoard(board, soldiers);
  let puflag = flagInBoard(createFlag(), board, 0, 9);
  let player = createPlayer("Yehouda");
  let putPlayer = playerInBoard(player, board, 9, 5);

  return board
}

export function printBoard(board){
    console.log(JSON.stringify(board).replaceAll(',[', '\n[').replace('[[', '[\n[').replace(']]', ']\n]'));

}
let board = initGame()
printBoard(board)


export function soldierInBoard(board,soldier,row,col){
    board[row][col] = soldier


}

