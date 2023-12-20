import { expect, test } from "bun:test";
import { digitize } from "./03_reverse_array";

test("should get [3,2,1] from 123", () => {
    expect(digitize(123)).toEqual([3, 2, 1]);
});
