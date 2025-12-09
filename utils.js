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

export function soldiers(array,type,rank,num) {
  
  for (let i = 1; i <= num ; i++) {
    let soldier = { type: type, rank: rank };
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
        placed = true
        soldiers[i].row = row
        soldiers[i].col = col;
      }
    }
  }
  return board;
}


export function createFlag(array,type) {
  array.push({type: type })
  
}





export function printBoard(board) {
  let display = board
    .map((row) =>
      row
        .map((cell) => {
          if (!cell) return ".";
          if (cell.type === "soldierPc" || cell.type === 'flagPc') return "X";
          
          if (cell.type === "soldierPlayer" || cell.type === 'flagPlayer') return "O";
          
        })
        .join(" ")
    )
    .join("\n");

  console.log(display);
}

