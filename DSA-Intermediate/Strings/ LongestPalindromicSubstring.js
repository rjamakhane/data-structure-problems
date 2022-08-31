/**
*
********** << PROBLEM DESCRIPTION >> **********
    Given a string A of size N, find and return the longest palindromic substring in A.
    Substring of string A is A[i...j] where 0 <= i <= j < len(A)

    Palindrome string:
    A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

    Incase of conflict, return the substring which occurs first ( with the least starting index).

Problem Constraints:
    1 <= N <= 6000

Input Format
    First and only argument is a string A.

Output Format
    Return a string denoting the longest palindromic substring of string A.

Example Input
    A = "aaaabaaa"

Example Output
    "aaabaaa"

Example Explanation
    We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".    
*/

module.exports = {
    //param A : string
    //return a strings
    longestPalindrome: function (A) {
        let n = A.length;
        if (n < 2)
            return A;

        let maxLength = 1, start = 0;
        let low, high;
        for (let i = 0; i < n; i++) {
            low = i - 1;
            high = i + 1;
            while (high < n && A[high] == A[i])
                high++;

            while (low >= 0 && A[low] == A[i])
                low--;

            while (low >= 0 && high < n && A[low] == A[high]) {
                low--;
                high++;
            }

            let length = high - low - 1;
            if (maxLength < length) {
                maxLength = length;
                start = low + 1;
            }
        }
        return A.substring(start, maxLength + start);
    }
};
