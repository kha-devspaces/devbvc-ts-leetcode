import { expect, test } from "bun:test";
import { highAndLow } from "./11_highest_lowest";

test("'3 1' from '1,2,3'", () => {
    expect(highAndLow("1 2 3")).toEqual('3 1');
});

test("'42 -9 from '8 3 -5 42 -1 0 0 -9 4 7 4 -4'", () => {
    expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toEqual('42 -9');
});