/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Problem Constraints:
    1 <= length(S) <= 1e6
S can have special characters

Input Format
    Only argument given is string S.

Output Format
    Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

Example Input
    Input:
    ABEC

Example Output
    Output
    6

Example Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
*/

module.exports = {
    //param A : string
    //return an integer
    solve: function (A) {
        let n = A.length;
        let ans = 0;

        for (let i = 0; i < n; i++) {
            if (A[i] == "A" || A[i] == "a" || A[i] == "E" || A[i] == "e" || A[i] == "I" || A[i] == "i" || A[i] == "O" || A[i] == "o" || A[i] == "U" || A[i] == "u") {
                ans += n - i
            }
        }
        return ans % 10003;
    }
};

