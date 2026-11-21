class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const tracker = new Set();
        let l = 0
        let maxLength = 0;
        for (let r = 0; r < s.length; r++){
            while(tracker.has(s[r])){
                tracker.delete(s[l])
                l++
            }
            tracker.add(s[r])
            maxLength = Math.max(maxLength, tracker.size);
        }
        return maxLength
    }
}
