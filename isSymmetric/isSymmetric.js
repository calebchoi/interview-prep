var isSymmetric = function(root) {
    let currLevel = [root];
    while (currLevel.length > 0) {
        let values = [];
        let nextLevel = [];
        for (let i = 0; i < currLevel.length; i++) {
            if (currLevel[i]) {
                values.push(currLevel[i].val);
                nextLevel.push(currLevel[i].left);
                nextLevel.push(currLevel[i].right);
            } else {
                values.push(null);
            }
        }
        if (!isPalindrome(values)) {
            return false;
        }
        currLevel = nextLevel;
    }
    return true;
};

var isPalindrome = function(values) {
    for (let i = 0; i < Math.floor(values.length/2); i++) {
        if (values[i] !== values[values.length-i-1]) {
            return false;
        }
    }
    return true;
}

// Input: tree
// const tree = { val: 1, left: { val: 3, left: null, right: null }, right: { val: 3, left: null, right: null }}

// Output: boolean
// const output = true;

// Constraints: N/A

// Strategy: Store each level into an array and check if the array is palidromic

// tree => [1, 2, 2, 3, 4, 4, 3]
// [1] => true
// [2, 2] => true
// [3, 4, 4, 3] => true

// Pseudocode
// initialize currLevel
// store root node into currLevel
// while currLevel length is greater than 0
    // initialize valArray
    // initialize nextLevel
    // for each node in currLevel
        // if not null
            // push it's value in valArray
            // push left and right child into nextLevel
        // else
            // push null in valArray
    // if valArray isn't palidromic
        // return false
    // set currLevel to nextLevel
// return true