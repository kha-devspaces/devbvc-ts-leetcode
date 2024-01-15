// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript

// In this example you have to validate if a user input string is alphanumeric. 
// The string has the following conditions to be alphanumeric:
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// 1. split string into array
// 2. test if every character match alphanumeric condition
// 3. return true/false

// Expectation
// "Mazinkaiser" -> true
// "hello world_" -> false
// "PassW0rd" -> true
// "     " -> false

export function alphanumeric(string: string): boolean {
    return string.length > 0 && string.split('').every(char => /[a-z0-9]/i.test(char));
  }
  