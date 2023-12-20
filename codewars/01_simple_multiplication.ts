// ref: https://www.codewars.com/kata/583710ccaa6717322c000105/train/typescript

// This kata is about multiplying a given number by eight if it is an even number 
// and by nine otherwise.

// condition
// even number => multiply by eight
// otherwise => multiply by nine

// expectation
// 2 => 2*8 (=16)
// 3 =? 3*9 (=27)

export function simpleMultiplication(num: number): number{
    if (num % 2 == 0) return num*8
    else return num*9
}