import { expect, test } from "bun:test";
import { findSmallestInt } from "./find_smallest_int";

test("Should return the smallest int 2", () => {
	expect(findSmallestInt([34, 15, 88, 2])).toEqual(2);
});

test("Should return the smallest int -345 ", () => {
	expect(findSmallestInt([34, -345, -1, 100])).toEqual(-345);
});
