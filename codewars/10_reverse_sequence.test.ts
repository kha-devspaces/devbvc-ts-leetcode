import { expect, test } from "bun:test";
import { reverseSeq } from "./10_reverse_sequence";

test("[5,4,3,2,1] from 5", () => {
    expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
});

test("[3,2,1] from 3", () => {
    expect(reverseSeq(3)).toEqual([3,2,1]);
});