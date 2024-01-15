import { expect, test } from "bun:test";
import { spinWords } from "./13_spin_words";

test("Hey wollef sroirraw from Hey fellow warriors", () => {
    expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
});

test("'This is a test' from 'This is a test'", () => {
  expect(spinWords("This is a test")).toEqual("This is a test");
});

test("'This is rehtona test' from 'This is another test'", () => {
  expect(spinWords("This is another test")).toEqual("This is rehtona test");
});

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
