/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given a string A, you are asked to reverse the string and return the reversed string.

Problem Constraints:
    1 <= |A| <= 10^5

String A consist only of lowercase characters.

Input Format
    First and only argument is a string A.

Output Format
    Return a string denoting the reversed string.

Example Input
    Input 1:
    A = "scaler"

    Input 2:
    A = "academy"

Example Output
    Output 1:
    "relacs"

    Output 2:
    "ymedaca"

Example Explanation
    Explanation 1:
    Reverse the given string.
*/

module.exports = {
    //param A : string
    //return a strings
    solve: function (A) {
        A = A.split("");
        let i = 0;
        let n = A.length;
        let j = n;
        while (i < j) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            i++;
            j--;
        }
        return A.join("")
    }
};

