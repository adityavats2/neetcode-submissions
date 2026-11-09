class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const seen = new Set(nums);
        let result = 0;


        for(const num of nums){
            let start = num - 1
            if (seen.has(start)) {
                continue;
            };

            let currentNum = num;
            let currentStreak = 1;

            while (seen.has(currentNum + 1)){
                currentNum++
                currentStreak++;
            }
            result = Math.max(result, currentStreak)
        }
        
        return result
    }
}
