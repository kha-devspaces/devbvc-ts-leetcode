import { expect, test } from "bun:test";
import { squareSum } from "./squareSum";

test("should get [1, 2] from str patter = 5", () => {
	expect(squareSum([1, 2])).toEqual(5);
});test("should get [0, 3, 4, 5] from str patter = 50", () => {
	expect(squareSum([0, 3, 4, 5])).toEqual(50);
});test("should get [] from str patter = 0", () => {
	expect(squareSum([])).toEqual(0);
});