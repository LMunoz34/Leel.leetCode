// FUNCTION TWOSUM(NUMS, TARGET) {
//     LET NUMDICT = {};
//     FOR (LET I = 0; I < NUMS.LENGTH; I++) {
//         LET COMPLEMENT = TARGET - NUMS[I];
//         IF (NUMDICT.HASOWNPROPERTY(COMPLEMENT)) {
//             RETURN [NUMDICT[COMPLEMENT], I];
//         }
        
//         NUMDICT[NUMS[I]] = I;
//         CONSOLE.LOG(COMPLEMENT, NUMDICT.HASOWNPROPERTY(COMPLEMENT), I, NUMDICT)
        
//     }
//     RETURN []; // THIS LINE IS OPTIONAL, AS THE PROBLEM STATES THERE WILL ALWAYS BE A SOLUTION.
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

// function findDifference(nums, k) {
//     let numDict = {};
//     for (let i = 0; i < nums.length; i++) {
//         numDict[nums[i]] = i;
//         console.log(nums[i], i, numDict)
//     }
//     for (let i = 0; i < nums.length; i++) {
//         let complement = nums[i] - k;
//         if (numDict.hasOwnProperty(complement) && numDict[complement] !== i) {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(findDifference(nums, k)); // Expected output: True

/**
 * //@param {string[]} strs
 * // @return {string[][]}
 */

// strs = ["eat","tea","tan","ate","nat","bat"]
// k = 4

// var groupAnagrams = function(strs) {
    // let anagrams = {};

    // for (let word of strs) {
    //     // Sort the word and use it as a key
    //     const sortedWord = word.split('').sort().join('');
    //     // If this key doesn't exist in the anagrams object, initialize it with an empty array
    //     if (!anagrams[sortedWord]) {
    //         anagrams[sortedWord] = [];
    //     }
    //     // Push the original word to the array associated with this key
    //     anagrams[sortedWord].push(word);
    // }

    // // Return all the arrays (groups of anagrams) from the object
    // return Object.values(anagrams);


    // if (strs.length === 0){
    //     return [];
    // }
    // let wordSet = {};
    // // srtArray = [];
    // // index = 0;

    // for (let i = 0; i<strs.length; i++){       
    //     let sortedLetters = strs[i].split('').sort().join('');
    //     if (!wordSet[sortedLetters]) {
    //         wordSet[sortedLetters] = [];
    //     }
    //     wordSet[sortedLetters].push(strs[i]);
    // };
    // srtArray.sort();
    // let pairs = srtArray.map((value, index) => [value, strs[index]]);
    
    // pairs.sort((a,b)=> a[0] - b[0]);
    // let sortedSecondary = pairs.map(pair=> pair[1]);
    // console.log(sortedSecondary, 'sortedSecondary');
    // // strs.sort();
    // //srtArray.sort();
    // console.log(srtArray, 'srtArray');
    // console.log(strs, 'strs');

    // let mySet = new Set();
    // mySet.add(1);
    // mySet.add(2);
    // mySet.add(3);

    // console.log(mySet);
    // console.log(wordSet);
    // //console.log(wordSet, 'wordSet');

    // // while (index < strs.length) {
    // //     wordArray.push(strs[index]);
    // //         while(srtArray[index] === srtArray[index+1]  && index <= strs.length){    
    // //                 console.log(srtArray[index] ,srtArray[index+1], index, 'i');  
    // //                 index++;            
    // //                 wordArray.push(strs[index]);                 
    // //         };
    // //     arryArray.push(wordArray);
    // //     console.log(wordArray, index, 'o');
    // //     index++;
    // //     wordArray = [];
    // // };
//     return Object.values(wordSet);
// };

// console.log(groupAnagrams(strs));

// let AddNumbersArrowFunction = (a,b) => {
//     return a + b;
// }

// console.log(AddNumbersArrowFunction(1,2));

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */


// var topKFrequent = function(nums, k) {
    // let numSet = {};
    // for (let num of nums) {
    //     if (!numSet[num]) {
    //         numSet[num] = 1;
    //     } else {
    //         numSet[num]++;
    //     }
    // }
    // nums.forEach(num => {
    //     if (!numSet[num]) {
    //         numSet[num] = 1;
    //     } else {
    //         numSet[num]++;
    //     }
    // });
    
        // Convert numSet into an array of [num, frequency] pairs
        // let sortedArray = Object.entries(numSet).sort((a, b) => b[1] - a[1]);
        //return sortedArray;
        // Return the first k entries, but only the numbers (not the counts)
        // return sortedArray.slice(0, k).map(entry => Number(entry[0]));
    // let numSet = {};
    // for (let num of nums) {
    //     if (!numSet[num]) {
    //         numSet[num] = 0;
    //     }
    //     let count = numSet[num]
    //     numSet[num] = count + 1;
    // }
    // return numSet;
    
//};


// console.log(topKFrequent([1,1,1,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3], 3));


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     let outputArray = []
//     nums.forEach((num) => {
//         let product = 1;
//         nums.forEach((num2) => {
//             if (num2 !== num) {
//                 product *= num2;
//             }
//         });
//         outputArray.push(product);
//     });
//     return outputArray;
// }

var productExceptSelf = function(nums) {
    const n = nums.length;
    let output = new Array(n).fill(1);

    // Compute prefix products
    let prefixProduct = 1;
    for (let i = 1; i < n; i++) {
        prefixProduct *= nums[i - 1];
        output[i] *= prefixProduct;
    }

    // Compute suffix products
    let suffixProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffixProduct *= nums[i + 1];
        output[i] *= suffixProduct;
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
