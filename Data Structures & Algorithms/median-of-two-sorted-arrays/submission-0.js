class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums =[]
        

        for (const num of nums1){
            nums.push(num)
        }
        for(const num of nums2){
            nums.push(num)
        }

        nums.sort((a,b)=> a-b)
        let n = nums.length
        let answer = 0
        let l = 0
        let r = n -1
        let mid = l + Math.floor((r - l)/2)
        if (nums.length %2 !==0){
            answer = nums[mid]
        }
        else {
            answer = (nums[mid] + nums[mid+1])/2
        }
       
        return answer
    }
}
