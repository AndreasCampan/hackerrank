array = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let highNum = scores[0];
  let lowNum = scores[0];
  let highCount = 0;
  let lowCount = 0;
  
  scores.forEach((score)=>{
      if(highNum < score){
          highCount++
          highNum = score;
      }
      if (lowNum > score){
          lowCount++
          lowNum = score
      } 
  })
  return [highCount, lowCount]
}

console.log(breakingRecords(array));