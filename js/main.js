'use strict'
// sprint 1 MinesWeeper

const EMPTY = ''
const MINE = '💣'
const FLAG = '🏴‍☠️'

//////////////////////////////////////
var gBoard = []

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
var gLevel = {
    size: 4,
    mines: 2
}

//////////////////////////////////////

function inItGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    setMinesNegsCount(gBoard)
    console.log('gBoard', gBoard);
    renderBoard(gBoard)
    console.log('gBoard', gBoard);
}


function buildBoard() {
    var board = []

    for (var i = 0; i < gLevel.size; i++) {
        board.push([])
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = {
                idI: i,
                idJ: j,
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }
        }
    }

    board[0][2].isMine = true
    board[1][3].isMine = true
    return board
}

function renderBoard(board) {
    var strHTML = '<tbody class="board">'

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n '
        for (var j = 0; j < board[0].length; j++) {
            if ( board[i][j].isMine) {
                var cell = MINE
            } else {
                cell =board[i][j].minesAroundCount
            }

            var className = `cell cell-${i}-${j}`

            strHTML += `\t<td class="${className}" onclick="cellClicked(this,${i},${j})">${cell}</td>\n`

        }
        strHTML += '\n</tr>\n'
    }
    strHTML += '</tbody>'
    var elBoard = document.querySelector('.board-cuntainer')
    elBoard.innerHTML = strHTML
}


function setMinesNegsCount(board) {

    for (var i = 0; i < board.length; i++) {

        for (var j = 0; j < board[i].length; j++) {
            board[i][j].minesAroundCount = countNeighbors(i, j, board)
        }
    }

    // return board
}





function cellClicked(elCell, i, j) {
    console.log(elCell, i, j);
}


function cellMarked(elCell) { }
function checkGameOver() { }
function expandShown(board, elCell, i, j) { }