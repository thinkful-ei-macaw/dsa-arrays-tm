const Array = require('./array');

// create a new instance
let arr = new Array();

// add an item
arr.push(3);   // cap 0, len 1, resize to 3 (len+1 * SIZE_RATIO)
console.log(arr);


// 2. Explore the push method
// Length is 1, capacity is 3, ptr is 0
arr.push(5);   // cap 3, len 2, no resize
arr.push(15);  // cap 3. len 3, resize to 12
arr.push(19);  // cap 12, len 4, no resize
arr.push(45);  // 12
arr.push(10);  // 12
console.log(arr);

// length is 6, capacity is 12, ptr is at 3
// capactiy is 12 because it resized by factor of 3 (length + 1 * 3) when length hit capacity
// ptr is at 3 because array was copied to next available contiguous block


// 3. Exploring the pop() method
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// length is 3
// capacity is still 12 (we don't resize downwards),
// ptr is still 3 because the array did not change in size


// 4. Understanding more about how arrays work
console.log(arr.get(0));

// empty the array
for (let i = arr.length - 1; i >= 0; i--){
  arr.remove(i);
}

// insert one item
arr.push('tauhida');
console.log(arr.get(0));

// result is NaN because array can only hold numbers (this is due to the memory being set up as a float array)


