/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.

    The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

    Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".

Problem Constraints:
    0 <= sum of length of all strings <= 1000000

Input Format
    The only argument given is an array of strings A.

Output Format
    Return the longest common prefix of all strings in A.

Example Input
    Input 1:
    A = ["abcdefgh", "aefghijk", "abcefgh"]

    Input 2
    A = ["abab", "ab", "abcd"];

Example Output
    Output 1:
    "a"

    Output 2:
    "ab"

Example Explanation
    Explanation 1:
    Longest common prefix of all the strings is "a".
    
    Explanation 2:
    Longest common prefix of all the strings is "ab".    
*/

module.exports = {
    //param A : array of strings
    //return a strings
    longestCommonPrefix: function (A) {
        let ans = "";
        let n = A.length;
        let minStr = A[0];
        for (let i = 1; i < n; i++) {
            if (A[i].length < minStr.length) {
                minStr = A[i];
            }
        }

        let j = 0;
        while (j < minStr.length) {
            let ch = minStr[j];
            let k = 0;
            let isQualified = true;
            while (k < n) {
                if (A[k][j] !== ch) {
                    isQualified = false;
                    break;
                }
                k++;
            }

            if (isQualified) {
                ans += ch;
            } else {
                return ans;
            }

            j++;
        }
        return ans;
    }
};

