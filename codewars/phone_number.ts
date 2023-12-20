export function createPhoneNumber(numbers: number[]): string {
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  // createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  if (numbers.length !== 10) {
    return "E R R O R";
  }
  const fotmatnumber = `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
  return fotmatnumber;
}
console.log("Myphon ", createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Myphon", createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log("Myphon", createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log("Myphon", createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2]));
