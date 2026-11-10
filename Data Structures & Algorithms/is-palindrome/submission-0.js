class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLowerCase()

        let length = cleanedString.length;
        let passOne = [];
        let passTwo = [];


        for(let i=0; i < length; i++){
            passOne.push(cleanedString[i])
        }
        for (let j=length - 1; j >= 0; j--){
                passTwo.push(cleanedString[j])
            }

        let joinPassOne = passOne.join('')
        let joinPassTwo = passTwo.join('')
        console.log(joinPassOne, joinPassTwo)
        
        if (joinPassOne !== joinPassTwo){
            return false
        } else{return true}
    }
}
