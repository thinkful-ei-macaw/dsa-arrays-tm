function urlify(str) {
  return str.split(' ').join('%20')
}

console.log(urlify('tauhida parveen'))
//-------------------------------------------------

function filter(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      result.push(arr[i])
    }
  }
  return result;
}

//const input = [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
//console.log(filter(input))
//---------------------------------------------------

function max(ray) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i=0; i<ray.length; i++) {
    currentSum += ray[i]  
    if (currentSum > maxSum) {
    maxSum = currentSum
    }
  }

  return maxSum
}

const input = [4, 6, -3, 5, -2, 1]
console.log(max(input))
//--------------------------------------------------

function merge(ray1, ray2) {
  let result = [];
  let longerRay = ray1
  let shorterRay = ray2
  if (ray2.length > ray1.length) {
    longerRay = ray2
    shorterRay = ray1
  }
  for (let i=0; i<longerRay.length; i++){
    if (i < shorterRay.length) {
      if(longerRay[i] > shorterRay[i]) {
        result.push(shorterRay[i]);
        result.push(longerRay[i]);
      } else {
        result.push(longerRay[i]);
        result.push(shorterRay[i]);
      }
    } else {
      result.push(longerRay[i])
    }
  }
    for (let i=0; i<result.length -1; i++) {
      let a = result[i];
      let b = result[i + 1] 
      if( a > b ) {
        result[i + 1] = a;
        result[i] = b;
      }
    }
  return result
}
const rayOne = [1, 3, 6, 8, 11]
const rayTwo = [2, 3, 5, 8, 9, 10]
console.log(merge(rayOne,rayTwo))

//---------------------------------------------------

function rmChars(str, charToDelete) {
  
}
