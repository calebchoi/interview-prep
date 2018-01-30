var isPalindrome = function(head) {
  let curr = head;
  let size = 0;
  while (curr !== null) {
    size++;
    curr = curr.next;
  }
  
  let midNode = head;
  for (let i = 0; i < Math.floor(size/2); i++) {
    midNode = midNode.next;
  }
  
  let right;
  if (size % 2 === 0) {
    right = midNode;
  } else {
    right = midNode.next;
  }
  
  let left = head;
  let palindrome = true;
  
  const checkPal = (right) => {
    if (right === null) {
      return;
    }
    checkPal(right.next);
    if (right.val !== left.val) {
      palindrome = false;
    }
    left = left.next;
  }
  
  checkPal(right);
  
  return palindrome;
};

// Input: linked list
// const list = [1, 2, 3, 2, 1];

// Output
// const output = true;

// Constraints
// O(n) time and O(1) space

// Strategy
// Find the midpoint of the list, use recursive calls to backtrack while advancing the left pointer to compare values

// Time: O(n), Space: O(1)

// Transformative Steps
// list = [1, 2, 3, 2, 1]

// find midpoint
//       mid
// [1, 2, 3, 2, 1]

// set left and right pointers
// l            r
// [1, 2, 3, 2, 1]

// advance left and backtrack right
//     l     r
// [1, 2, 3, 2, 1]
// return true

// Pseudo

// set curr to head
// set size to 0
// while curr is not null
  // increment size
  // set curr to curr.next

// set midNode to head
// for each number up to half of size
  // set midNode to midNode's next

// if size is even
  // set right to midNode
// else
  // set right to midNode's next

// set left to head
// initialize palindrome to true

// checkPal(right)
// if right is null
  // return
// recursively call checkPal(right.next)
// if right.val is not equal to left.val
  // set palindrome to false
// advance left pointer

// make first call to checkPal
// return palindrome
