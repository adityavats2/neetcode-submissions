class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const signatureS = s.split('').sort().join()
        const signatureT = t.split('').sort().join()

        if (signatureS !== signatureT) return false;
        return true 
    }
}
