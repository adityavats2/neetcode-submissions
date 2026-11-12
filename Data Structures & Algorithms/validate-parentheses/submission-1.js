class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [];
        const map = {
            ')': '(',
            '}':'{',
            ']':'['
        }
        for (let i = 0; i < s.length; i++){
            if (Object.values(map).includes(s[i])){
                array.push(s[i]);
            }
            else if (Object.keys(map).includes(s[i])) {
                
                if (array[array.length - 1] !== map[s[i]]) {
                    return false;
                }
                array.pop();
            }
        }
        if (array.length !== 0)return false;
        else return true;
        
        
    }
}
