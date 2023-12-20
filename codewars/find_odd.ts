export const findOdd = (xs: number[]): number => {
   
    let result = 0;
   
    for (var i = 0; i<xs.length; i++){
       
        for(var j = 0; j<xs.length; j++){
          if(xs[i] == xs[j]){
            result++;
          }
        
        }
        
        if (result % 2 !== 0) {
            return xs[i];
        }

    }
  
    return 0;
  };
  // result = result ^ num;
        // result ^= num;
  

  console.log('got ->', findOdd([1,1,17,1,1,1,1]))
  console.log('got ->', findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
  console.log('got ->', findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
  console.log('got ->', findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
  console.log('got ->', findOdd([1,1,1,1,1,1,1,1,1,1]))