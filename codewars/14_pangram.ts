// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

// 1. create array of alphabet
// 2. convert phrase to lowercase
// 3. check if every letter of alphabet include in phrase

//Expectation
//isPangram("The quick brown fox jumps over the lazy dog.") -> true
//isPangram("This is not a pangram.") -> false

export const isPangram = (phrase: string): boolean => {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowerCasePhrase = phrase.toLowerCase();
    return alphabet.every(letter => lowerCasePhrase.includes(letter));
  };