import { expect, test } from "bun:test";
import { abbrevName } from "./07_abbreviate_name";

test("'S.H' from 'Sam Harris'", () => {
    expect(abbrevName('Sam Harris')).toEqual("S.H");
});

test("'P.F' from 'patrick feeney'", () => {
    expect(abbrevName('patrick feeney')).toEqual("P.F");
});

test("'T.I' from 'trin is'", () => {
    expect(abbrevName('trin is')).toEqual("T.I");
});
