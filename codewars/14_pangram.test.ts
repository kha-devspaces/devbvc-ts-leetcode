import { expect, test } from "bun:test";
import { isPangram } from "./14_pangram";

test("true from The quick brown fox jumps over the lazy dog.", () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toEqual(true);
});

test("false from This is not a pangram.", () => {
    expect(isPangram("This is not a pangram.")).toEqual(false);
});

//isPangram("The quick brown fox jumps over the lazy dog.") -> true
//isPangram("This is not a pangram.") -> false