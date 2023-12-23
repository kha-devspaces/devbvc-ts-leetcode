// ref: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/typescript

// Write a function to convert a name into initials.
// The output should be two capital letters with a dot separating them.

// condition
// Firstname => Get 1st letter & capital
// Lastname => Get 1st letter & capital
// Separate by '.'

// expectation
// Sam Harris => S.H
// patrick feeney => P.F

export function abbrevName(name: string): string {
    const fName: string = name.split(' ')[0].substring(0,1).toUpperCase()
    const lName: string = name.split(' ')[1].substring(0,1).toUpperCase()
    return fName + '.' + lName;
}