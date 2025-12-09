function error() {
    console.log("Sorry, Can't go there")
}
function checkTile(board, row, col) {
    return board[row][col]
}
function move(board, player, row, col) {
    let beforeMove = [player.row, player.col]
    if (checkTile(board, row, col) === null) {
        [player.row, player.col] = [row, col]
        board[row][col] = player
        board[beforeMove[0]][beforeMove[1]] = null
    } else {
        battel()
    }
    return board

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



let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const player = {
    type: "soldierPC",
    rank: 5,
    row: 1,
    col: 1
}

const direc = getPossibleMoves(board, player)
console.log(move(board, player, direc["up"].r, direc["up"].c))