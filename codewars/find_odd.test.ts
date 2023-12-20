import { expect, test } from "bun:test";
import { findOdd } from "./find_odd";

test("should get [1,1,17,1,1,1,1] from str patter = 17", () => {
	expect(findOdd([1,1,17,1,1,1,1])).toEqual(17);
});
test("should get [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] from str patter = 5", () => {
	expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5);
});test("should get [1,1,2,-2,5,2,4,4,-1,-2,5] from str patter = -1", () => {
	expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toEqual(-1);
});test("should get [20,1,1,2,2,3,3,5,5,4,20,4,5] from str patter = 5", () => {
	expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toEqual(5);
});
test("should get [1,1,1,1,1,1,1,1,1,1] from str patter = 0", () => {
	expect(findOdd([1,1,1,1,1,1,1,1,1,1])).toEqual(0);
});