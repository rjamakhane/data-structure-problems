/**
*
********** << PROBLEM DESCRIPTION >> **********
    Find the number of occurrences of bob in string A consisting of lowercase English alphabets.

Problem Constraints:
    1 <= |A| <= 1000

Input Format
    The first and only argument contains the string A, consisting of lowercase English alphabets.

Output Format
    Return an integer containing the answer.

Example Input
    Input 1:
    "abobc"

    Input 2:
    "bobob"

Example Output
    Output 1:
    1
    
    Output 2:
    2

Example Explanation
    Explanation 1:
    The only occurrence is at second position.

    Explanation 2:
    Bob occures at first and third position.
*/

module.exports = {
    //param A : string
    //return an integer
    solve: function (A) {
        let n = A.length;

        let i = 0;
        let count = 0
        while (i < n - 2) {
            let subStr = A.substr(i, 3);
            if (subStr === 'bob') {
                count++;
            }
            i++;
        }
        return count;
    }
};

