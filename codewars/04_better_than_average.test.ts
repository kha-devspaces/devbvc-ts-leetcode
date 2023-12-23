import { expect, test } from "bun:test";
import { betterThanAverage } from "./04_better_than_average";

test("should get true from [2, 3], 5", () => {
    expect(betterThanAverage([2, 3], 5)).toEqual(true);
});

test("should get true from [100, 40, 34, 57, 29, 72, 57, 88], 75", () => {
    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toEqual(true);
});

test("should get true from [12, 23, 34, 45, 56, 67, 78, 89, 90], 69", () => {
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toEqual(true);
});

test("should get false from [41, 75, 72, 56, 80, 82, 81, 33], 50", () => {
    expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toEqual(false);
});

test("should get false from [29, 55, 74, 60, 11, 90, 67, 28], 21", () => {
    expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toEqual(false);
});