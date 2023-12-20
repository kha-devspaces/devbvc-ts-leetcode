import { expect, test } from "bun:test";
import { lovefunc } from "./opposites_attract";


test("should get (1,4) from str patter = ", () => {
  expect(lovefunc(1,4)).toEqual(true);
});
test("should get (4,2) from str patter = ", () => {
    expect(lovefunc(4,2)).toEqual(false);
  });
  test("should get (0,1) from str patter = ", () => {
    expect(lovefunc(0,1)).toEqual(true);
  });
  test("should get (0,0) from str patter = ", () => {
    expect(lovefunc(0,0)).toEqual(false);
  });