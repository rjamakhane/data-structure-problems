/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given a function isalpha() consisting of a character array A.
    Return 1 if all the characters of a character array are alphanumeric (a-z, A-Z, and 0-9) else, return 0.

Problem Constraints:
    1 <= |A| <= 10^5

Input Format
    Only argument is a character array A.

Output Format
    Return 1 if all the characters of the character array are alphanumeric (a-z, A-Z and 0-9), else return 0.

Example Input
    Input 1:
    A = ['S', 'c', 'a', 'l', 'e', 'r', 'A', 'c', 'a', 'd', 'e', 'm', 'y', '2', '0', '2', '0']

    Input 2:
    A = ['S', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0']

Example Output
    Output 1:
    1

    Output 2:
    0

Example Explanation
    Explanation 1:
    All the characters are alphanumeric.

    Explanation 2:
    All the characters are NOT alphabets i.e ('#').
*/


module.exports = {
    //param A : array of characters
    //return an integer
    solve: function (A) {
        let n = A.length;

        for (let i = 0; i < n; i++) {
            let code = A[i].charCodeAt(0);

            if (!((code >= 97 && code <= 123) || (code >= 65 && code <= 91) || (code >= 48 && code <= 57))) {
                return 0
            }

        }
        return 1
    }
};
