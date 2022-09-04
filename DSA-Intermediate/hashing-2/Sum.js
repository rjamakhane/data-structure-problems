/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given an array of integers, find two numbers such that they add up to a specific target number.
    The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. Please note that your returned answers (both index1 and index2 ) are not zero-based. Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). Note that, if no pair exists, return empty list.
    If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

Problem Constraints:
    

Input Format
    

Output Format
    

Example Input
    Input: [2, 7, 11, 15], target=9

Example Output
    Output: index1 = 1, index2 = 2

Example Explanation
    
*/


module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of integers
    twoSum: function (A, B) {
        let n = A.length;
        let mapA = new Map();

        for (let i = 0; i < n; i++) {
            let b = B - A[i];
            if (mapA.has(b)) {
                return [mapA.get(b) + 1, i + 1]
            } else if (!mapA.has(A[i])) {
                mapA.set(A[i], i)
            }
        }
        return []
    }
};
