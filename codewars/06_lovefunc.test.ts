import { expect, test } from "bun:test";
import { lovefunc } from "./06_lovefunc";

test("true from 1,2", () => {
    expect(lovefunc(1,2)).toEqual(true);
});
