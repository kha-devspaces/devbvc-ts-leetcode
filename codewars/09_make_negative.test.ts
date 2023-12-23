import { expect, test } from "bun:test";
import { makeNegative } from "./09_make_negative";

test("-1 from 1", () => {
    expect(makeNegative(1)).toEqual(-1);
});

test("-5 from -5", () => {
    expect(makeNegative(-5)).toEqual(-5);
});

test("0 from 0", () => {
    expect(makeNegative(0)).toEqual(0);
});