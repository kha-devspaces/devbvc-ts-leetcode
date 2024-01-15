// ref: https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript

// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// condition
// digit below 5 => '0'
// digit 5 or above => '1'

// expectation
// '453855' => '010111'

// 1. split string
// 2. convert string to num arr
// 3. map condition x < 5 ? 0:1
// 4. join array

export const fakeBin = (x:string):string => {
    const num_arr = x.split('').map(Number)
    const bin_arr = num_arr.map( x => x < 5 ? 0:1)
    return bin_arr.join('')
  };