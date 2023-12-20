function getSum(a: number, b: number): number {
	if (a === b) {
		return a;
	}

	let sum = 0;

	const start = Math.min(a, b);
	const end = Math.max(a, b);

	for (let i = start; i <= end; i++) {
		sum += i;
	}

	return sum;
}

console.log(getSum(1, 0)); // Output: 1
console.log(getSum(1, 2)); // Output: 3
console.log(getSum(0, 1)); // Output: 1
console.log(getSum(1, 1)); // Output: 1
console.log(getSum(-1, 0)); // Output: -1
console.log(getSum(-1, 2)); // Output: 2
