import { expect, test } from "bun:test";
import { findSmallestInt } from "./find_smallest_int";

test("Should return the smallest int 8 ", () => {
	expect(findSmallestInt([78, 56, 232, 12, 8])).toEqual(12);
});

test("Should return the smallest int 8 ", () => {
	expect(findSmallestInt([77, 56, 232, 12, 8, 5])).toEqual(5);
});
