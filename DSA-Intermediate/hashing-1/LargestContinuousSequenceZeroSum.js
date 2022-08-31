/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given an array A of N integers.
    Find the largest continuous sequence in a array which sums to zero.

Problem Constraints:
    1 <= N <= 10^6
    -107 <= A[i] <= 10^7

Input Format
    Single argument which is an integer array A.

Output Format
    Return an array denoting the longest continuous sequence with total sum of zero.

    NOTE : If there are multiple correct answers, return the sequence which occurs first in the array.

Example Input
    A = [1,2,-2,4,-4]

Example Output
    [2,-2,4,-4]

Example Explanation
    [2,-2,4,-4] is the longest sequence with total sum of zero.
*/


module.exports = {
    //param A : array of integers
    //return a array of integers
    lszero: function (A) {
        let mapA = new Map();
        let n = A.length;

        let pfSum = [];
        let sum = 0;
        for (let k = 0; k < n; k++) {
            pfSum[k] = sum = sum + A[k];
        }

        let output = [];
        for (let i = 0; i < n; i++) {
            let currentIndex = mapA.get(pfSum[i]);
            if (currentIndex >= 0 || pfSum[i] === 0) {
                let arrWithSumZero = A.slice(currentIndex + 1, i + 1);
                if (output.length < arrWithSumZero.length) {
                    output = arrWithSumZero;
                }
            } else {
                mapA.set(pfSum[i], i)
            }
        }

        return output;
    }
};
