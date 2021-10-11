
/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */


array=[5, 70, 2001, 13, 457]

function miniMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];

  
  for(let i =0; i < arr.length; i++){  
      if(max < arr[i]){
          max = arr[i]
      }
      if(min > arr[i]){
          min = arr[i]
      }
  }

  let sum = arr.reduce((a,b)=>a+b);
  let maxSum = sum - min;
  let minSum = sum - max;

  console.log(minSum, maxSum);
}

miniMaxSum(array);