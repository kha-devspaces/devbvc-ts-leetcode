export function persistence(num: number): number {
    let i = 0;
  
    for (; num.toString().length !== 1; i++) {
      num = num.toString().split("").reduce((a, b) => a * parseInt(b, 10), 1);
    }
  
    return i;
  }
  console.log('got ->', persistence(39)); // 3
  console.log('got ->', persistence(4)); // 0
  console.log('got ->', persistence(25)); // 2
  console.log('got ->', persistence(999)); // 4