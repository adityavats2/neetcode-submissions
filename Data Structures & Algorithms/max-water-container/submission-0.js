class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let length = heights.length
        let j = length - 1
        let maxArea = 0;
        
        while (i < j){
            let width = j - i
            let heightI = heights[i]
            let heightJ = heights[j]
            let minHeight = Math.min(heightI,heightJ)

            let area = (minHeight * width)
            if (maxArea < area){
                maxArea = area
            }

            if (heightI <= heightJ) {
                i++;
            } else {
               j--;
            }

        }
        return maxArea
    }
}

