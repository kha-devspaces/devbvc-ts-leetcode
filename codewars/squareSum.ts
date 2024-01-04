export function squareSum(numbers: number[]): number {
  //     squareSum([1,2]), 5);
  // squareSum([0, 3, 4, 5]), 50);
  // squareSum([]), 0);

  const result = numbers.reduce((sum, x) => {
    const squaredValue = x ** 2;
    const newSum = sum + squaredValue;
    // console.log(x: ${x}, x^2: ${squaredValue}, sum: ${newSum});

    return newSum;
  }, 0);

  return result;
}

console.log("got ->", squareSum([1, 2]));
console.log("got ->", squareSum([0, 3, 4, 5]));
console.log("got ->", squareSum([]));
