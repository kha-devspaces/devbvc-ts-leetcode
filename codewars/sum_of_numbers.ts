export function getSum(a: number, b: number): number {
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
