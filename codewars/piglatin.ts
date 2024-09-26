export const pigIt = (a: string): string => {
  const input: string = a;
  return input
    .split(" ")
    .map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        // กลับด้านคำและเพิ่ม "ay"
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
};

console.log("pig_latin ---> ", pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log("pig_latin ---> ", pigIt("Hello world !")); // elloHay orldway !
