class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let res = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            // Move j until we find the '#' separating length from content
            while (str[j] !== '#') {
                j++;
            }
            // Parse the exact length number
            let length = parseInt(str.substring(i, j));
            
            // Move i past the '#'
            i = j + 1;
            // Set j to the end of the current word
            j = i + length;
            
            // Extract the original string and push it to results
            res.push(str.substring(i, j));
            
            // Move pointer i to the start of the next length prefix
            i = j;
        }
        
        return res;
    }
}