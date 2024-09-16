export function arrayDiff(a: number[], b: number[]): number[] {
    // a = [] return []
    // a = [], b = [4,5] return []
    // a = [1,2,3,4], b = [2,3] return [1,4]
    if(a.length === 0) return []

    const diff = []
    for(const ai of a) {
        if(b.includes(ai)) continue 
        else {
            diff.push(ai)
        }
    }

    return diff
  }
//   let foo = arrayDiff([],[])
//   console.log(foo)

console.log('got ->', arrayDiff([1,2,3,4], [2,4]) )