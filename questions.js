// test module
const test = require('./test');

// 5. URLify a string
function urlify(str) {
  const filters = { ' ': '%20', '!': '%21' };

  let result = [];
  for (let char of str) {
    if (!Object.keys(filters).includes(char)) {
      result.push(char);
    } else {
      result.push(filters[char]);
    }
  }

  return result.join('');
}


// 6. Filtering an array
function filter(arr) {
  let result = [];
  for (let num of arr) {
    if (num >= 5) result.push(num);
  }

  return result;
}


// 7. Max sum in the array
function maxSum(arr) {
  let max = 0;
  let runningSum = 0;
  for (let num of arr) {
    runningSum += num;
    if (runningSum > max) max = runningSum;
  }

  return max;
}


// 8. Merge arrays
function mergeArrays(arr1, arr2) {
  let result = [];
  let longArray = arr1, shortArray = arr2;
  if (arr2.length > arr1.length) {
    longArray = arr2;
    shortArray = arr1;
  }

  for (let i = 0; i < longArray.length; i++) {
    if (i < shortArray.length) {
      if (longArray[i] > shortArray[i]) {
        result.push(shortArray[i]);
        result.push(longArray[i]);
      } else {
        result.push(longArray[i]);
        result.push(shortArray[i]);
      }
    } else {
      result.push(longArray[i]);
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    let a = result[i], b = result[i + 1];
    if (a > b){
      result[i + 1] = a;
      result[i] = b;
    }
  }

  return result;
}


// 9. Remove characters
function removeCharacters(arr, filterCharacters) {
  let filters = [];
  for (let char of filterCharacters) {
    char = char.toLowerCase();
    filters.push(char);
  }

  let result = '';
  for (let char of arr) {
    if (!filters.includes(char.toLowerCase())) result += char;
  }

  return result;
}

// 10. Products
function products(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) product *= arr[j];
    }
    result.push(product);
  }

  return result;
}

// 11. 2D array
function twoDimensionalArray(arr) {
  let columns = [];
  let rows = [];
  
  // search
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        // // index column and row so we can update them later
        columns.push(col);
        if (!rows.includes(row)) rows.push(row);

      }
    }
  }

  // put all the zeros in
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (rows.includes(row) || columns.includes(col)) arr[row][col] = 0;
    }
  }

  return arr;
}

// 12. String rotation
function stringRotation(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const rotation = str1.substring(i) + str1.substring(0, i);
    if (str2 === rotation) return true;
  }

  return false;
}


// test it or die
test(urlify, 'tauhida%20parveen', 'tauhida parveen');
test(filter, [5,6,7], [3,4,5,6,7]);
test(maxSum, 12, [4,6,-3,5,-2,1]);
test(mergeArrays, [1,2,3,3,5,6,8,8,9,10,11], [1,3,6,8,11], [2,3,5,8,9,10]);
test(removeCharacters, 'Bttl f th Vwls: Hw vs. Grzny', 'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
test(products, [108,36,12,27], [1,3,9,4]);
test(twoDimensionalArray, [[0,0], [1,0]], [[1,0], [1,1]]);
test(stringRotation, true, 'amazon', 'azonam');