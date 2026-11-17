class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=>a-b)
        //range is from 1 to Math.max(...piles)
        let left = 1
        let right = Math.max(...piles)
        

        while (left <= right){
            let mid = Math.floor(left + (right - left) / 2)
            let totalHours = 0;
            
            for (let i = 0; i < piles.length; i++){
                let speed = Math.ceil(piles[i]/mid)
                totalHours +=speed
            }

            if (totalHours > h){
                left = mid + 1
            } else if (totalHours < h){
                right = mid - 1 
            } else if (totalHours === h){
                right = mid -1 
            }

        }

        return left

    }
}