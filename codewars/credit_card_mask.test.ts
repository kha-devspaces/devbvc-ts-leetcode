
import { test , expect } from 'bun:test'
import { maskify } from './credit_card_mask'
// expect().toEqual()

test ('shound get ###########5616', function () {
    
    expect(maskify("4556364607935616")).toEqual("############5616");});


    test ('should get #1111', function () {
        expect(maskify("11111")).toEqual("#1111");});

