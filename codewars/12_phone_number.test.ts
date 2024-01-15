import { expect, test } from "bun:test";
import { createPhoneNumber } from "./12_phone_number";

test("'(123) 456-7890' from [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
});

test("'(111) 111-1111' from [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");
});


//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) -> "(123) 456-7890"
//createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) -> "(111) 111-1111"
