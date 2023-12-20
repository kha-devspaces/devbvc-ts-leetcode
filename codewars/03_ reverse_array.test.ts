import { expect, test } from "bun:test";
import { digitize } from "./03_reverse_array";

test("should get [3,2,1] from 123", () => {
    expect(digitize(123)).toEqual([3, 2, 1]);
});

test("should get [1,2,3,4,5] from 54321", () => {
    expect(digitize(54321)).toEqual([1,2,3,4,5]);
});

test("should get [1,3,5,7,9] from 97531", () => {
    expect(digitize(97531)).toEqual([1,3,5,7,9]);
});

test("should get [0] from 0", () => {
    expect(digitize(0)).toEqual([0]);
});
