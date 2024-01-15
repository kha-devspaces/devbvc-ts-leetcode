import { expect, test } from "bun:test";
import { alphanumeric } from "./15_alphanumeric";

test("true from Mazinkaiser", () => {
    expect(alphanumeric("Mazinkaiser")).toEqual(true);
});

test("false from hello world_", () => {
    expect(alphanumeric("hello world_")).toEqual(false);
});

test("true from PassW0rd", () => {
    expect(alphanumeric("PassW0rd")).toEqual(true);
});

test("false from '     '", () => {
    expect(alphanumeric("     ")).toEqual(false);
});

// "Mazinkaiser" -> true
// "hello world_" -> false
// "PassW0rd" -> true
// "     " -> false