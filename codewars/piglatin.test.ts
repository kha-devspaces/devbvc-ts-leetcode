import { expect, test } from "bun:test";
import { pigIt } from "./piglatin";

test("should get (Pig latin is cool) from str patter = giPay nitalay siay loocay", () => {
  expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
});
test("should get (Hello world !) from str patter = olleHay dlroway !", () => {
  expect(pigIt("Hello world !")).toEqual("elloHay orldway !");
});

// test("should get ([1,2,3,4], [2,4]) from str patter = [1, 3]", () => {
//     expect(arrayDiff([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
//   });
