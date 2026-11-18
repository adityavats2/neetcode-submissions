class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        nums.sort((a,b)=> a-b);
        let n = nums.length;
        let left = 0;
        let right = n-1;
        let min = 0; 

        while (left <= right){
            let mid = Math.floor(left + (right-left)/2)

            if (min < mid){
                right = mid - 1
            } else if (min > mid){
                left = mid + 1
            } else {
                right = mid -1 
            }
        }
        return nums[left]
    }
}
