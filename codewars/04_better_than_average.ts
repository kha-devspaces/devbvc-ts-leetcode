// ref: https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript

// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!
// Return True if you're better, else False!

// condition
// 1. find avg from given array -> sum/array.length
// 2. compate avg with your points
// 3. return true if better, else false

// expectation
// [2, 3], 5 => true

export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
    const sum: number = classPoints.reduce( (a,b) => {return a+b},0 )
    const avg: number = sum/classPoints.length
    if (yourPoints > avg) return true
    else return false
  }