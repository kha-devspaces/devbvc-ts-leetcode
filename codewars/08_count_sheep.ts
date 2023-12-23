// ref: https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript

// counts the number of sheep present in the array (true means present).

// condition
// true => +1
// false, null, undefined => +0

// expectation
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// The correct answer would be 17.


export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {4
    return arrayOfSheep.filter( e => e == true).length
  }