class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsObj = {};

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i]
            let complement = target - current;

            if (complement in numsObj){
                return ([numsObj[complement], i])
            }

            numsObj[current] = i 
        }
        return 

    }
}
