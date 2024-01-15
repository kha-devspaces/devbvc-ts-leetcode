// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed 

// 1. split string to array
// 2. condition if words.length >= 5 -> reverse words
// 3. join string

// expectation
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
    const arr: string[] = words.split(' ');
    const spinArr: string[] = arr.map(word => (word.length >= 5 ? word.split('').reverse().join('') : word));
    const spinWord: string = spinArr.join(' ');
    return spinWord;
  }