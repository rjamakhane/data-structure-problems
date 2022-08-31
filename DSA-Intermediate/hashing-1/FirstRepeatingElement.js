/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given an integer array A of size N, find the first repeating element in it.
We need to find the element that occurs more than once and whose index of the first occurrence is the smallest.
If there is no repeating element, return -1.

Problem Constraints:
    1 <= N <= 10^5
    1 <= A[i] <= 10^9

Input Format
    The first and only argument is an integer array A of size N.

Output Format
    Return an integer denoting the first repeating element.

Example Input
    Input 1:
    A = [10, 5, 3, 4, 3, 5, 6]

    Input 2:
    A = [6, 10, 5, 4, 9, 120]

Example Output
    Output 1:
    5

    Output 2:
    -1

Example Explanation
    Explanation 1:

    5 is the first element that repeats
    Explanation 2:

    There is no repeating element, output -1    
*/

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let n = A.length;
        let mapA = new Map();
        for (let i = 0; i < n; i++) {
            mapA.set(A[i], mapA.get(A[i]) + 1 || 1)
        }
        for (let j = 0; j < n; j++) {
            if (mapA.get(A[j]) > 1) {
                return A[j]
            }
        }
        return -1;
    }
};
