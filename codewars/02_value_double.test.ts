import { expect, test } from "bun:test";
import { maps } from "./02_value_double";

test("should get 16 from given number 2", () =>{
    expect(maps([1,2,3])).toEqual([2,4,6])
})

test("should get 27 from given number 3", () =>{
    expect(maps([2,3,4])).toEqual([4,6,8])
})