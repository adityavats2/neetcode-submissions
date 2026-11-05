class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n);

        let leftProduct = 1;
        for (let i = 0; i < n; i ++){
            result[i] = leftProduct;
            leftProduct = leftProduct * nums[i];
            
        }
        let rightProduct = 1
        for (let i = n - 1; i >= 0; i--){
            result[i] = result[i] * rightProduct;
            rightProduct = rightProduct * nums[i]
        }
        return result
    }
}

/**
 * nums = [1,2,3]
 * output = [6,3,2]
 * [6] = [2]*[3]
 */