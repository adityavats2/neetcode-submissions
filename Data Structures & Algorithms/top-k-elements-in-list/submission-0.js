class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const seen = new Map(); // creates new map
    const result = []; // empty results array
    
    // loops through each element of nums array and populates map
    for(const num of nums){
        if(!seen.has(num)){
            seen.set(num, (seen.get(num)?? 0) +1)
        } else{seen.set(num, (seen.get(num) ?? 0) + 1);}
    }
    
    const ranked = [...seen.entries()].sort((a, b) => b[1] - a[1]);
    
    for (const [num] of ranked.slice(0, k)) {
        result.push(num);
    }

        return result;
}
}

/**
 * go through each element of nums, add it to map
 * if seen doesn't have that element, add it to map with frequency 1
 * if seen has that element, add frequency +1 
 * 
 * return map.value 
 */
