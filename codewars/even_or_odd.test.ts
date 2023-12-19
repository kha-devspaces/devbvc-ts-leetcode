import { test , expect } from 'bun:test'
import { evenOrOdd } from './even_or_odd'
// expect().toEqual()

test ('should get Odd',  () => {
    expect(evenOrOdd(1)).toEqual("Odd");});

test ('should get Even',  () => {
    expect(evenOrOdd(2)).toEqual("Even");});
test ('should get Odd',  () => {
    expect(evenOrOdd(3)).toEqual("Odd");});
test ('should get Even',  () => {
    expect(evenOrOdd(4)).toEqual("Even");});
                        