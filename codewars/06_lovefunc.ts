// ref: https://www.codewars.com/kata/555086d53eac039a2a000083/train/typescript

//  If one of the flowers has an even number of petals 
// and the other has an odd number of petals it means they are in love.

// condition
// number 1: odd & number 2: even => true
// number 1: even & number 2: odd => true
// else false

// expectation
// 1,2 => true
// 4,5 => true
// 1,3 => false
// 2,4 => false

// 1. split string
// 2. convert string to num arr
// 3. map condition x < 5 ? 0:1
// 4. join array

export function lovefunc(flower1: number, flower2: number): boolean {
    if ((flower1 % 2 == 0 && flower2 % 2 == 1) 
    || (flower1 % 2 == 1 && flower2 % 2 == 0) ) return true
    else return false
}