
/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.  */


let matrix = [[14, 6, 19], [10, 5, -2], [-1, 17, 12]]

function diagonalDifference(arr) {
  // Write your code here
  let diag1 = 0;
  let diag2 = 0;
  let j = arr.length - 1;
  
  for(let i = 0; i < arr.length; i++){
      diag1 += arr[i][i]
      diag2 += arr[i][j]
      j--
  }
  return Math.abs(diag1 - diag2);
}


console.log(diagonalDifference(matrix));