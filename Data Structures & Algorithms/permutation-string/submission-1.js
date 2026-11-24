class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const seen1 = new Map();
        const seen2 = new Map();
        
        for (const s of s1){
            seen1.set(s, (seen1.get(s)||0)+1)
        }

        let l = 0
        for (let r = 0; r < s2.length; r++){
            seen2.set(s2[r], (seen2.get(s2[r])||0)+1)
            
            while (r - l + 1 > s1.length){
                const count = seen2.get(s2[l]) -1
                if (count ===0) seen2.delete(s2[l]);
                else seen2.set(s2[l], count)
                l++
            }

            if (seen1.size === seen2.size){
                let matches = true;
                for (const [key,val] of seen1){
                    if (seen2.get(key)!== val){
                        matches = false;
                        break;
                }
                
            }
            if (matches) return true;
            } 
        
    }
    return false;
}

}
