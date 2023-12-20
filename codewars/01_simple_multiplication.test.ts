import { expect, test } from "bun:test";
import { simpleMultiplication } from "./01_simple_multiplication";

test("should get 16 from given number 2", () =>{
    expect(simpleMultiplication(2)).toEqual(16)
})

test("should get 27 from given number 3", () =>{
    expect(simpleMultiplication(3)).toEqual(27)
})