export function findSmallestInt(arr: number[]): number {
	let small = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < small) {
			small = arr[i];
		}
	}

	return small;
}

const exp1 = [34, 15, 88, 2, 6, -5];
const exp2 = [34, -345, -1, 100];
