import { expect, test } from "bun:test";
import { countSheeps } from "./08_count_sheep";

test("2 from [true, true, false]", () => {
    expect(countSheeps([true, true, false])).toEqual(2);
});

test("17 from [true,  true,  true,  false, true,  true,  true,  true, true,  false, true,  false, true,  false, false, true, true,  true,  true, true, false, false, true,  true]", () => {
    expect(countSheeps([true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true])).toEqual(17);
});