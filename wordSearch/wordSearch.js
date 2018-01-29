var exist = function(board, word) {
    if (word.length === 0) {
        return true;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && toggleAndRecurse(board, word, i, j)) {
                return true;
            }
        }
    }
    return false;
};

var checkPaths = function(board, word, row, col) {
    if (word.length === 0) {
        return true;
    }
    
    if (
        row > 0
        && board[row - 1][col] === word[0]
        && toggleAndRecurse(board, word, row - 1, col)
    ) {
        return true;
    }
    
    if (
        col < board[row].length - 1
        && board[row][col + 1] === word[0]
        && toggleAndRecurse(board, word, row, col + 1)
    ) {
        return true;
    }
    
    if (
        row < board.length - 1
        && board[row + 1][col] === word[0]
        && toggleAndRecurse(board, word, row + 1, col)
    ) {
        return true;
    }
    
    if (
        col > 0
        && board[row][col - 1] === word[0]
        && toggleAndRecurse(board, word, row, col - 1)
    ) {
        return true;
    }
    
    return false;
};

var toggleAndRecurse = function(board, word, row, col) {
    let letter = board[row][col];
    board[row][col] = null;
    if (checkPaths(board, word.substr(1), row, col))
        return true;
    board[row][col] = letter;
}

// Input: 2D Board
// const board = 
//       [
//           ['H', 'I'],
//           ['E', 'M']
//       ];
// const word = 'HIM';

// Output: Boolean whether the word is in 2D board
// const output = true;

// Constraints: None

// Strategy: Check each element in the board for the first letter of word. Then, check in all directions for the next letter in word until all letters are found. (DFS)

// Big O:
    // Time: O(n^2) where n is number of letters in board
    // Space: O(1) extra space

// Example Steps
// ['H', 'I']   'HIM'
// ['E', 'M']

// [null, 'I']  'IM'
// ['E', 'M']

// [null, null] 'M'
// ['E', 'M']

// [null, null] '' => true
// ['E', null]

// Pseudocode
// for each row
    // for each column
        // if letter equals the first letter of word
            // set value to letter
            // toggle letter to null
            // if checkPaths is true
                // return true
            // toggle letter to value
// return false

// checkPaths
// if word is empty
    // return true
// if top letter is equal to first letter of word
    // set value to letter
    // toggle letter to null
    // if checkPaths
        // return true
    // toggle letter to value
// if right letter is equal to first letter of word
    // set value to letter
    // toggle letter to null
    // if checkPaths
        // return true
    // toggle letter to value
// if bottom letter is equal to first letter of word
    // set value to letter
    // toggle letter to null
    // if checkPaths
        // return true
    // toggle letter to value
// if left letter is equal to first letter of word
    // set value to letter
    // toggle letter to null
    // if checkPaths
        // return true
    // toggle letter to value
// return false