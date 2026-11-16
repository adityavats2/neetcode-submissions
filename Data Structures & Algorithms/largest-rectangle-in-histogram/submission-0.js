class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {

            let currentHeight = (i === heights.length) ? 0 : heights[i];

            if (stack.length === 0) {
                stack.push(i);
            } else {

                while (stack.length > 0 && heights[stack[stack.length - 1]] > currentHeight) {
                    let left = stack.pop(); 
                    let right = i;
                    

                    let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
                    
                    let area = heights[left] * width;
                    maxArea = Math.max(maxArea, area);
                }
                stack.push(i);
            }
        }
        return maxArea;
    }
}