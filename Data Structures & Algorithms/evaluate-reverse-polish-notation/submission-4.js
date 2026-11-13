class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const map ={
            '+': 'plus',
            '-': 'minus',
            '/': 'divide', 
            '*': 'multiply' 
        }
        let array = [];
        let equation = [];
        let operators = Object.keys(map)

        for(let i = 0; i < tokens.length; i++){
            if (!operators.includes(tokens[i])){
                array.push(tokens[i])
                
            } else {
                let n1 = Number(array.pop())
                let n2 = Number(array.pop())
                
                if (tokens[i] === '+'){
                    array.push(n1 + n2)
                } else if (tokens[i] === '-'){
                    array.push(n2 - n1)
                } else if (tokens[i]=== '/'){
                    let result = Math.trunc(n2 / n1)
                    array.push(result)
                } else if (tokens[i]==='*'){
                    array.push(n1*n2)
                } 

            }
        }
        return array[array.length-1]
    }
}
