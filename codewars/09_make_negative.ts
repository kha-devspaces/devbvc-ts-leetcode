// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/typescript

// condition
// positive num => negative num
// negative num => negative num
// 0 => 0

// expectation
// 1 => -1
// -5 => -5
// 0 => 0

export const makeNegative = (num: number): number => {
    return num > 0 ? num * -1 : num * 1
  };