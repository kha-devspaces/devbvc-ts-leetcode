// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// 1. converte to string
// 2. slice digits and put variable into phone number format

// expectation
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) -> "(123) 456-7890"
//createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) -> "(111) 111-1111"

export function createPhoneNumber(numbers: number[]): string {
    const strNum: string[] = numbers.map(num => num.toString());
  
    const areaCode = strNum.slice(0, 3).join('');
    const firstPart = strNum.slice(3, 6).join('');
    const secondPart = strNum.slice(6).join('');
  
    const phoneNum: string = `(${areaCode}) ${firstPart}-${secondPart}`;
    return phoneNum;
  }