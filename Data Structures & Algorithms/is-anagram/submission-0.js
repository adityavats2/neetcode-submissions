class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t){
    if(s.length !== t.length) return false;
    const seenS = new Map();
    const seenT = new Map();

    for(const char of s){
        seenS.set(char,(seenS.get(char) ?? 0) + 1);
    }
    for(const char of t){
        seenT.set(char,(seenT.get(char) ?? 0) + 1)
    }   
    for (const[char, count] of seenS){
        if (seenT.get(char) !== count) return false;    
    }
    return true;
    }
    
}
