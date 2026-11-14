class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let n = temperatures.length
        let index = [];

        for (let i = 0; i < n; i++) {
            while (index.length > 0 && temperatures[i] > temperatures[index[index.length - 1]]) 
            {
                let pastIndex = index.pop();
                result[pastIndex] = i - pastIndex;
            }
            index.push(i);
        }

        return result;
    }
}