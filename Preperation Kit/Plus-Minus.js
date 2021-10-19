
/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal. */


let array = [1, 2, -10, 0, -4, 15, 100, -2, -0.17];

function plusMinus(arr) {
  // Write your code here
  let pos = 0
  let neg = 0
  let zero = 0
   
arr.forEach((i)=>{
    if(i > 0){
        pos += 1;
    } else if (i < 0) {
        neg += 1;
    } else {
        zero += 1;
    }
})

  console.log((pos/arr.length).toFixed(6));
  console.log((neg/arr.length).toFixed(6));
  console.log((zero/arr.length).toFixed(6));
}

plusMinus(array);