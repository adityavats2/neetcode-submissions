class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const n = position.length;
        const cars = [];
        for (let i = 0; i < n; i++) {
            cars.push([position[i], speed[i]]);
        }


        cars.sort((a, b) => b[0] - a[0]);


        const stack = [];

        for (const [pos, spd] of cars) {

            const time = (target - pos) / spd;

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }

        }

        return stack.length;
    }
}