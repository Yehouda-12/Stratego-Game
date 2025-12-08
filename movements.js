function getBoarders(board, player) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let option = "input"
            if (i == 0 && j == 0) {
                if (option === "left" || option === "forword") {
                    error()
                }
            } else if (i === 0 && j < board.length - 1) {
                if (option === "forword") {
                    error()
                }
            } else if (i === 0 && j === board.length - 1) {
                if (option === "forword" || option === "right") {
                    error()
                }
            } else if (i < board.length - 1 && j === 0) {
                if (option === "left") {
                    error()
                }
            } else if (i < board.length - 1 && j === board.length - 1) {
                if (option === "right") {
                    error()
                }
            } else if (i === board.length - 1 && j === 0) {
                if (option === "left" || option === "down") {
                    error()
                }
            } else if (i === board.length - 1 && j < board.length - 1) {
                if (option === "down") {
                    error()
                }
            } else if (i === board.length - 1 && j === board.length - 1) {
                if (option === "down" || option === "right") {
                    error()
                }
            }
        }
    }
}
function error() {
    console.log("Sorry, Can't go there")
}
function move(board, player, location1, location2) {
    player.location = board[location1][location2]
}
