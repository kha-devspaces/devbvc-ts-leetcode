import { expect, test } from "bun:test";

import { arrayDiff } from "./arrayDiff";

test("should get ([1,2,3,4], [2,4]) from str patter = [1, 3]", () => {
  expect(arrayDiff([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
});
test("should get ([]) from str patter = []", () => {
  expect(arrayDiff([], [])).toEqual([]);
});

test("should get ([], [4,5) from str patter = []", () => {
  expect(arrayDiff([], [4, 5])).toEqual([]);
});

test("should get ([1,2,3,4], [2,3]) from str patter = [1,4]", () => {
  expect(arrayDiff([1, 2, 3, 4], [2, 3])).toEqual([1, 4]);
});
