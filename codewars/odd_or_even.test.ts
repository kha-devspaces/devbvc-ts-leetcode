import { expect, test } from "bun:test";
import { oddOrEven } from "./odd_or_even";

test("Should return the คู่", () => {
	expect(oddOrEven([0])).toEqual("คู่");
});

test("Should return the คี่", () => {
	expect(oddOrEven([0, 1, 4])).toEqual("คี่");
});

test("Should return the คู่", () => {
	expect(oddOrEven([0, -1, -5])).toEqual("คู่");
});
