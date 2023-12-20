// ref: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/typescript


// condition
// Given an array of integers => a new array with each value doubled

// expectation
// [1, 2, 3] --> [2, 4, 6]
// [2, 3, 4] --> [4, 6, 8]

export function maps(x: number[]): number[]{
    return x.map(value => value * 2);
  }
