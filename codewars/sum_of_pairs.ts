export function sumPairs(ints: number[], s: number): [number, number] | void {
  const seenNumbers: { [key: number]: number } = {};
  const result = ints.reduce<[number, number] | void>(
    (acc, currentNumber, currentIndex) => {
      const complement = s - currentNumber;
      if (complement in seenNumbers) {
        return [complement, currentIndex];
      }

      seenNumbers[currentNumber] = currentIndex;

      return acc;
    },
    undefined
  );

  return result;
}

console.log("got ->", sumPairs([4, 3, 2, 3, 4], 5));
