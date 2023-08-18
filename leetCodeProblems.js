// function twoSum(nums, target) {
//     let numDict = {};
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (numDict.hasOwnProperty(complement)) {
//             return [numDict[complement], i];
//         }
        
//         numDict[nums[i]] = i;
//         console.log(complement, numDict.hasOwnProperty(complement), i, numDict)
        
//     }
//     return []; // This line is optional, as the problem states there will always be a solution.
// }

// // Test
// let nums = [2, 45, 11, 7, 20, 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
// let target = 10;
// console.log(twoSum(nums, target)); // Expected output: [0, 1]

// Problem:

// Given an array of integers nums and an integer k, determine if there are two distinct indices i 
// and j in the array such that nums[i] - nums[j] equals k and i is not equal to j.

// Return a boolean value, True if such pair exists and False otherwise.

// Example:

// python
// Copy code
//  nums = [1, 5, 3, 8, 8, 2]
//  k = 4
// The output should be True because nums[1] - nums[2] = 5 - 1 = 4.

// Remember, the solution will involve using dictionaries to achieve efficient lookups, and the core idea is to store information from the array 
// in a way that makes it quick to determine if the required condition is met for any given value. Good luck!

function findDifference(nums, k) {
    let numDict = {};
    for (let i = 0; i < nums.length; i++) {
        numDict[nums[i]] = i;
        console.log(nums[i], i, numDict)
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = nums[i] - k;
        if (numDict.hasOwnProperty(complement) && numDict[complement] !== i) {
            return true;
        }
    }
    return false;
}


console.log(findDifference(nums, k)); // Expected output: True