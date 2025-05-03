// multiples of numbers in an array
function countMultiples(arr) {
    const result = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
     
      for (let j = 1; j <= 9; j++) {
        if (num % j === 0) {
          result[j]++;
        }
      }
    }
  
    return result;
  }
  

  const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  console.log(countMultiples(input));

//    Im not able to get into an optimum solution for this one, but in another approach :- 
    
//    > every element will be counted as a multiple of 1, so the count of 1 will be always arr.length
//    > storing the multiple of 2 and accessing only that elements next time for the checking the multiple of 4,6,8
//    > storing the multiple of 3 and accessing only that elements next time for the checking of 6,9

//    I think this way we can solve this problem with a lesser time complexity (time complexity for the current code is O(n) since 9 is a constant)