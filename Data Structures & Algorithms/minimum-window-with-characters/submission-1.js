class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return '';

        const seenS = new Map()
        const seenT = new Map()
        let output = []
        

        for (let i= 0; i < t.length; i++){
            seenT.set(t[i], (seenT.get(t[i])||0)+1)      
        }

        let l = 0 
        const required = seenT.size;
        let formed = 0;
        let minLen = Infinity;
let minStart = 0

        for (let r = 0; r < s.length; r++){
            seenS.set(s[r], (seenS.get(s[r])||0)+1)
            if (seenT.has(s[r]) && seenS.get(s[r]) === seenT.get(s[r])) {
            formed++;
            }
            while (formed === required) {
                const windowLen = r - l + 1;
                    if (windowLen < minLen) {
                        minLen = windowLen;
                        minStart = l;
                    }

                const leftChar = s[l];
                seenS.set(leftChar, seenS.get(leftChar) - 1);
                    if (seenT.has(leftChar) && seenS.get(leftChar) < seenT.get(leftChar)) {
                    formed--;
                        }
                        l++;
            }
        }

        if (minLen === Infinity) return '';
return s.slice(minStart, minStart + minLen); 
    }
}

