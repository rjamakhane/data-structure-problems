/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given a string A of size N consisting of lowercase alphabets.

    You can change at most B characters in the given string to any other lowercase alphabet such that the number of distinct characters in the string is minimized.

    Find the minimum number of distinct characters in the resulting string.

Problem Constraints:
    1 <= N <= 100000
    0 <= B < N

Input Format
    The first argument is a string A.
    The second argument is an integer B.

Output Format
    Return an integer denoting the minimum number of distinct characters in the string.

Example Input
    A = "abcabbccd"
    B = 3

Example Output
    2

Example Explanation
    We can change both 'a' and one 'd' into 'b'.So the new string becomes "bbcbbbccb".
    So the minimum number of distinct character will be 2.    
*/

module.exports = {
    //param A : string
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < A.length; i++) {
            arr[A[i].charCodeAt(0) - 97]++;
        }
        arr.sort((a, b) => a - b);
        let len = arr.length;
        let sum = 0;
        let distingElementCount = 0;
        let i = 0;
        while (B > 0 && i < len) {
            sum += arr[i];
            if (sum <= B) {
                distingElementCount = len - i - 1;
            }
            i++;
        }
        if (!B) {
            return A.length;
        } else if (B && distingElementCount === 0) {
            distingElementCount = 26;
        }
        return distingElementCount;
    }
};
