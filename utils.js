// game stratego
function createMatrix(rows,  initialValue = 0) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < rows; j++) {
      row.push(initialValue);
    }
    matrix.push(row);
  }
  return matrix;
}




export function soldiersPc(){
    let dargot = [1,2,3,4,5,6,7,8,9]
    let soldiers = {}

    for (let darga of dargot) {
        soldiers.darga = 'X'}


}
console.log(soldiersPc());
