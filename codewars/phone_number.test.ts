import { expect, test } from "bun:test";
import { createPhoneNumber } from "./phone_number";

test(" should get [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] from str patter = (012) 345-6789", () => {
  expect(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(
    "(012) 345-6789"
  );
});
test(" should get  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] from str patter = (123) 456-7890", () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
    "(123) 456-7890"
  );
});
test(" should get [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] from str patter = (111) 111-1111 ", () => {
  expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
    "(111) 111-1111"
  );
});
test("should get [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2]] from str patter = E R R O R", () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2])).toEqual(
    "E R R O R"
  );
});
