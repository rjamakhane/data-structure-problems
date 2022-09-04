/**
*
********** << PROBLEM DESCRIPTION >> **********
    Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx

    The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

    Note:

    A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
    Return 0 / 1 ( 0 for false, 1 for true ) for this problem

Problem Constraints:
    

Input Format
    The input corresponding to the above configuration :

    ["53..7....", "6..195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"]
    A partially filled sudoku which is valid.

Output Format
    Return 0 / 1 ( 0 for false, 1 for true ) for this problem

Example Input
    

Example Output
    

Example Explanation
    ref : https://www.youtube.com/watch?v=Pl7mMcBm2b8
    
*/

module.exports = {
    //param A : array of strings
    //return an integer
    isValidSudoku: function (A) {
        let setA = new Set();
        let n = A.length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (A[i][j] !== '.') {
                    let curItem = A[i][j];

                    if (setA.has(curItem + "_row_" + i) || setA.has(curItem + "_column_" + j) || setA.has(curItem + "_box_" + parseInt(i / 3) + "_" + parseInt(j / 3))) {
                        return 0;
                    }
                    setA.add(curItem + "_row_" + i);
                    setA.add(curItem + "_column_" + j);
                    setA.add(curItem + "_box_" + parseInt(i / 3) + "_" + parseInt(j / 3));
                }
            }
        }
        return 1;
    }
};

