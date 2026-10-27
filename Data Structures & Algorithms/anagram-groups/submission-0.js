class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        for (const word of strs){
            const signature = word.split('').sort().join('')

            if(!groups.has(signature)){
                groups.set(signature, [])
            }
            groups.get(signature).push(word)
        }
        return [...groups.values()]
    }
}

