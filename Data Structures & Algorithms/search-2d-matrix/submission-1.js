class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;       // # of rows 
        let n = matrix[0].length;    // # of columns 

        let left = 0;                // starting index always 0
        let right = (m * n) - 1;     // this is the index of last element 

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            //(11-0/2) = Math.floor(5.5) = left + 5 = 0+5 = 5 becomes mid for when there are 3 rows with 4 columns in each row 
    
    
            let r = Math.floor(mid / n); // 5/4 = 1
            let c = mid % n; // 5%4 = 1
    
            let currentVal = matrix[r][c]; // so mid point becomes matrix[1][1]
    
   
    if (currentVal === target) return true; // if the midpoint is target, return true
    if (currentVal < target) { left = mid + 1; } 
    // if current val is less than target, left = mid +1 so it becomes 5+1
    else { right = mid - 1; }
    
}

return false;
        
    }
}
