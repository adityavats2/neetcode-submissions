class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let length = nums.length
        let output = new Array()
        let i = 0

        while (i < length){
            if (i > 0 && nums[i] === nums[i - 1]) {
                i++;
                continue;
            }
            let j = i + 1
            let k = length - 1

            while (j < k){
                let target = -nums[i]

                if (nums[j]+nums[k]<target){
                    j++
                } else if (nums[j]+nums[k]>target){
                    k--
                } else {
                    output.push([nums[i], nums[j], nums[k]]);
                     j++;
                     k--;
                     while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                }  
            }

        i++
        }
    
    return output
    }
}
