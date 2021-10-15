
/* You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.   */


let num = 64;

function flippingBits(n) {
    // Write your code here
    let binaryNum = n.toString(2).padStart(32, '0');
    let finalNum = '';
    
    for(let char of binaryNum) {
        finalNum += char == '0' ? '1': '0';
    }
    return parseInt(finalNum, 2);
}

console.log(flippingBits(num));