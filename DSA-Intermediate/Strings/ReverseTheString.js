/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given a string A of size N.

    Return the string A after reversing the string word by word.

    NOTE:

    A sequence of non-space characters constitutes a word.
    Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
    If there are multiple spaces between words, reduce them to a single space in the reversed string.

Problem Constraints:
    1 <= N <= 3 * 10^5

Input Format
    The only argument given is string A.

Output Format
    Return the string A after reversing the string word by word.

Example Input
    Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib"

Example Output
    Output 1:
    "blue is sky the"

    Output 2:
    "ib is this"

Example Explanation
    Explanation 1:
    We reverse the string word by word so the string becomes "the sky is blue".

    Explanation 2:
    We reverse the string word by word so the string becomes "this is ib".
*/

module.exports = {
    //param A : string
    //return a strings
    solve: function (A) {
        A = A.split("");
        let n = A.length;
        this.reverseString(A, 0, A.length - 1)

        let l = 0;
        let r = 0;
        while (r < n) {
            while (r < n && A[r] !== " ") {
                r++;
            }
            this.reverseString(A, l, r - 1);
            r++;
            l = r;
        }
        return A.join("");
    },

    reverseString(str, start, end) {
        while (start < end) {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
    }
};

