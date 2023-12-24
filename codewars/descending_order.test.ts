import { expect, test } from "bun:test";
import { descendingOrder } from "./descending_order";

test("Returns numbers in descending order 987654321", () => {
	expect(descendingOrder(123456789)).toEqual(987654321);
});

test("Returns numbers in descending order 8655421 ", () => {
	expect(descendingOrder(2581456)).toEqual(8655421);
});

test("Returns numbers in descending order 8655421 ", () => {
	expect(descendingOrder(777799998888111)).toEqual(999988887777111);
});

test("Returns numbers in descending order 9983411 ", () => {
	expect(descendingOrder(3499811)).toEqual(9984311);
});

test("Returns numbers in descending order 54421 ", () => {
	expect(descendingOrder(42145)).toEqual(54421);
});

test("Returns numbers in descending order  6543211 ", () => {
	expect(descendingOrder(145263)).toEqual(654321);
});
