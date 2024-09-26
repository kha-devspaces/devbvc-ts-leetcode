import { expect, test } from "bun:test";
import { persistence } from "./Persistent";

test("should get (39) from str patter = 3", () => {
  expect(persistence(39)).toEqual(3);
});
test("should get (4) from str patter = 0", () => {
  expect(persistence(4)).toEqual(0);
});
test("should get (25) from str patter = 2", () => {
  expect(persistence(25)).toEqual(2);
});
test("should get (999) from str patter = 4", () => {
  expect(persistence(999)).toEqual(4);
});

// import { expect, test } from "bun:test";
// import { findOdd } from "./find_odd";

// test("should get [1,1,17,1,1,1,1] from str patter = 17", () => {
// 	expect(findOdd([1,1,17,1,1,1,1])).toEqual(17);
// });
