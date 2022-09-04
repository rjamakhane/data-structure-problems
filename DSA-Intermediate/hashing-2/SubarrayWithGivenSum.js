/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.
    If the answer does not exist return an array with a single element "-1".
    First sub-array means the sub-array for which starting index in minimum.

Problem Constraints:
    1 <= length of the array <= 100000
    1 <= A[i] <= 10^9
    1 <= B <= 109

Input Format
    The first argument given is the integer array A.
    The second argument given is integer B.


Output Format
    Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".

Example Input
    Input 1:
    A = [1, 2, 3, 4, 5]
    B = 5

    Input 2:
    A = [5, 10, 20, 100, 105]
    B = 110

Example Output
    Output 1:
    [2, 3]
    
    Output 2:
    -1

Example Explanation
    Explanation 1:
    [2, 3] sums up to 5.

    Explanation 2:
    No subarray sums up to required number.    
*/

module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of integers
    solve: function (A, B) {
        let start = 0;
        let end = -1;
        let currentSum = 0;
        let n = A.length;

        let mapA = new Map();

        for (let i = 0; i < n; i++) {
            currentSum += A[i];

            if (currentSum - B === 0) {
                start = 0;
                end = i
                break;
            }

            if (mapA.has(currentSum - B)) {
                start = mapA.get(currentSum - B) + 1;
                end = i;
                break;
            }

            mapA.set(currentSum, i);
        }

        if (end === -1) {
            return [-1]
        } else {
            return A.slice(start, end + 1);
        }

    }
};
