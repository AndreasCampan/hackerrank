
/* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.  */


let strings = ['ab', 'abc', 'cc', 'ab'];
let queries = ['ab', 'ac', 'cc', 'rr'];

function matchingStrings(str, que) {
  let tempAr = [];
  let vals = [];
  for(let i=0; i < que.length; i++){
      tempAr = str.filter(item => item === que[i]);
      vals.push(tempAr.length);
      tempAr = [];
  }
  return vals
}


console.log(matchingStrings(strings, queries));