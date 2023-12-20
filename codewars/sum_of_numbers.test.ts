import { expect, test } from "bun:test";
import { getSum } from "./sum_of_numbers";

test("Should return the int 1 ", () => {
	expect(getSum(1, 0)).toBe(1);
});
test("Should return the int 3 ", () => {
	expect(getSum(1, 2)).toBe(3);
});

test("Should return the int 1 ", () => {
	expect(getSum(0, 1)).toBe(1);
});

test("Should return the int 1 ", () => {
	expect(getSum(1, 1)).toBe(1);
});

test("Should return the int -1 ", () => {
	expect(getSum(-1, 0)).toBe(-1);
});
