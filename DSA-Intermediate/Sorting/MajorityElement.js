/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.

Problem Constraints:
    1 <= |A| <= 2*105
    1 <= A[i] <= 10^7

Input Format
    First and only argument is an integer array A.

Output Format
    Return 1 if any such integer p is present else, return -1.

Example Input
    Input 1:
    A = [3, 2, 1, 3]

    Input 2:
    A = [1, 1, 3, 3]

Example Output
    Output 1:
    1
    
    Output 2:
    -1

Example Explanation
    Explanation 1:
    For integer 2, there are 2 greater elements in the array..

    Explanation 2:
    There exist no integer satisfying the required conditions.
*/

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        A = A.sort((a, b) => b - a);
        let n = A.length;
        let ans = 0;
        let count = 0;
        if (A[0] === 0) {
            ans++;
        }
        for (let i = 1; i < n; i++) {
            if (A[i] != A[i - 1]) {
                count = i
            }
            if (count > 0 && A[i] === count) {
                count = 0;
                ans++;
            }
        }
        if (ans) {
            return ans
        }
        return -1
    }
};

