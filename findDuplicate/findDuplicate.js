var findDuplicate = function(nums) {
    nums = nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            return nums[i];
        }
    }
};

// Input: array of numbers between 1 to n with one duplicate
// const input = [1, 3, 2, 4, 4];

// Output: duplicate number
// const output = 4;

// Constraints: don't modify the array, use constant extra space, time complexity less than O(n^2)

// Strategy: Sort the array, check each number with adjacent number to find duplicate

// Big O: Time - O(n log n), Space - O(1)

// Steps
// input = [1, 3, 2, 4, 4]
// sorted = [1, 2, 3, 4, 4]
// 1, 2
// 2, 3
// 3, 4
// 4, 4 => duplicate is 4

// Pseudocode
// sort nums
// for each number in nums
    // if number and next number are equal
        // return number