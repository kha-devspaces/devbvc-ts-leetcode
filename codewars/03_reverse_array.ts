// ref: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript

// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order.

// condition
// number => reversed array

// expectation
// 35231 => [1,3,2,5,3]
// 0 => [0]

export const digitize = (n: number): number[] => {
    const reversed_str_arr: string[] = n.toString().split('').reverse()
    const reversed_digit_arr: number[] = reversed_str_arr.map(Number)
    return reversed_digit_arr
  };