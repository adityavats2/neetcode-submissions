class TimeMap {
    constructor() {
        this.keyStore = new Map();
        
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
       if (!this.keyStore.has(key)){
        this.keyStore.set(key,[])
       }
       this.keyStore.get(key).push([value, timestamp])
        
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const entries = this.keyStore.get(key)
        if (entries === undefined) return ''
        let left = 0;
        let right = entries.length - 1; 
        let result = '';
        while (left <= right){
            let mid = left + Math.floor((right-left)/2)

            if (entries[mid][1]<= timestamp){
                result = entries[mid][0]
                left = mid + 1
            } else {
                right = mid -1
            }
        }
        return result
    }
}
