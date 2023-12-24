export function oddOrEven(array: number[]): string {
	const sum = array.reduce((acc, curr) => acc + curr, 0);

	return sum % 2 === 0 ? "คู่" : "คี่";
}
