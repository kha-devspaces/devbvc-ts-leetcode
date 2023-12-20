import { expect, test } from "bun:test";
import { simpleMultiplication } from "./simple_multiplication";

test("should get 16 from given number 2", () =>{
    expect(simpleMultiplication(2)).toEqual(16)
})

test("should get 27 from given number 3", () =>{
    expect(simpleMultiplication(3)).toEqual(27)
})

// test("should get ####1234 from str patter = abcd1234", () => {
// 	expect(maskify("abcd1234")).toEqual("####1234");
// });

// test("should get ################asdf from str patter = asdfiasdjfia1234asdf", () => {
// 	expect(maskify("asdfiasdjfia1234asdf")).toEqual("################asdf");
// });

// test("should get 1 from str patter = 1", () => {
// 	expect(maskify("1")).toEqual("1");
// });

// test("should get 1a1b from str patter = 1a1b", () => {
// 	expect(maskify("1a1b")).toEqual("1a1b");
// });
