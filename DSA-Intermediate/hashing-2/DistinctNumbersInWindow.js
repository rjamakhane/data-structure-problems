/**
*
********** << PROBLEM DESCRIPTION >> **********
    You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.
    Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.
    NOTE: if B > N, return an empty array.

Problem Constraints:
    
Input Format
    First argument is an integer array A
    Second argument is an integer B.

Output Format
    Return an integer array.

Example Input
    Input 1:
    A = [1, 2, 1, 3, 4, 3]
    B = 3

    Input 2:
    A = [1, 1, 2, 2]
    B = 1

Example Output
    Output 1:
    [2, 3, 3, 2]

    Output 2:
    [1, 1, 1, 1]


Example Explanation
    Explanation 1:
    A=[1, 2, 1, 3, 4, 3] and B = 3
    All windows of size B are
    [1, 2, 1]
    [2, 1, 3]
    [1, 3, 4]
    [3, 4, 3]
    So, we return an array [2, 3, 3, 2].

    Explanation 2:
    Window size is 1, so the output array is [1, 1, 1, 1].
*/

module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of integers
    dNums: function (A, B) {
        let mapA = new Map();
        let n = A.length;
        let output = [];
        if (B > n) {
            return output;
        }

        for (let k = 0; k < B; k++) {
            mapA.set(A[k], mapA.get(A[k]) + 1 || 1);
        }
        output.push(mapA.size);

        for (let i = 1; i <= n - B; i++) {
            let lastItemIndex = i - 1;
            mapA.set(A[lastItemIndex], mapA.get(A[lastItemIndex]) - 1)
            if (mapA.get(A[lastItemIndex]) === 0) {
                mapA.delete(A[lastItemIndex])
            }
            let newItemIndex = i + B - 1
            mapA.set(A[newItemIndex], mapA.get(A[newItemIndex]) + 1 || 1);
            output.push(mapA.size);
        }

        return output;
    }
};
