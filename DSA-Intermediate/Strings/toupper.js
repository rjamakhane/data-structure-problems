/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given a function to_upper() consisting of a character array A.

    Convert each charater of A into Uppercase character if it exists. If the Uppercase of a character does not exist, it remains unmodified.
    The lowercase letters from a to z is converted to uppercase letters from A to Z respectively.

    Return the uppercase version of the given character array.

Problem Constraints:
    1 <= |A| <= 10^5

Input Format
    Only argument is a character array A.

Output Format
    Return the uppercase version of the given character array.

Example Input
    Input 1:
    A = ['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']

    Input 2:
    A = ['S', 'c', 'a', 'L', 'e', 'R', '#', '2', '0', '2', '0']

Example Output
    Output 1:
    ['S', 'C', 'A', 'L', 'E', 'R', 'A', 'C', 'A', 'D', 'E', 'M', 'Y']

    Output 2:
    ['S', 'C', 'A', 'L', 'E', 'R', '#', '2', '0', '2', '0']

Example Explanation
     All the characters in the returned array are in uppercase alphabets.
*/


module.exports = {
    //param A : array of characters
    //return a array of characters
    to_upper: function (A) {
        let inputStr = A.join("");
        let outputStr = "";
        let n = A.length;

        for (let i = 0; i < n; i++) {
            if (A[i] >= 'a' && A[i] <= 'z') {
                outputStr += String.fromCharCode(inputStr.charCodeAt(i) - 32);
            } else {
                outputStr += A[i];
            }
        }

        return outputStr;
    }
};
