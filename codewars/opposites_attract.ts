export function lovefunc(flower1: number, flower2: number): boolean{

    const Flower1 = flower1 % 2 === 0;
    const Flower2 = flower2 % 2 === 0;

    return (Flower1 && !Flower2) || (!Flower1 && Flower2);
}


console.log('got ->',(lovefunc(1, 4) )) // true
 console.log('got ->',(lovefunc(4, 2 ))) //false
console.log('got ->',(lovefunc(0, 1) )) // true
console.log('got ->',(lovefunc(0, 0) )) //false