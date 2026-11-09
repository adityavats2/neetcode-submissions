class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board.length; c++) {
                const val = board[r][c];
                
                
                if (val === '.') continue;

    
                const rowKey = `row${r}_${val}`;
                const colKey = `col${c}_${val}`;
                const boxKey = `box${Math.floor(r / 3)}_${Math.floor(c / 3)}_${val}`;


                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }

        return true;
    }
}