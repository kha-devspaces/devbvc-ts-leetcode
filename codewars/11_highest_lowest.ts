// https://www.codewars.com/kata/554b4ac871d6813a03000035/typescript

// you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// expectation
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

export function highAndLow(numbers: string): string {
    const numArray: number[] = numbers.split(' ').map(Number)
    const max: number = Math.max(...numArray)
    const min: number = Math.min(...numArray)
    return max + ' ' + min    
}
