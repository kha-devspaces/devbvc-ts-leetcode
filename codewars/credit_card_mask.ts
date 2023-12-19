
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/typescript

// return masked string




export function maskify(cc: string): string {
    const l4char = cc.substring(cc.length -4)
    const maskSt = [...cc.substring(0, cc.length -4)].map((i) => '#').join("");
    return maskSt + l4char ;
