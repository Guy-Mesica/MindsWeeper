'use strict'
// sprint 1 MinesWeeper

const EMPTY = ''
const MINE = '💣'
const FLAG = '🏴‍☠️'


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

function buildBoard() {
    var board = []

    for (var i = 0; i < gLevel.size; i++) {
        board.push([])
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }

        }
    }
    board[2][3].isMine = true
    board[0][2].isMine = true
    return board
}

function renderBoard(board) {
    var strHTML = '<tbody class="board">'

    for (var i = 0; i < board.length; i++) {
        strHTML += '<td '
        
    }





    strHTML += '</tbody>'
}




function initGame() { }
function setMinesNegsCount(board) { }
function cellClicked(elCell, i, j) { }
function cellMarked(elCell) { }
function checkGameOver() { }
function expandShown(board, elCell, i, j) { }