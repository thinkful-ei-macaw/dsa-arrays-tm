const NewArray = require('./NewArray')

//let ray = new NewArray()

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new NewArray();

  arr.push(3);
  console.log('push(3)',arr)

  //1. Push
  arr.push(5)
  arr.push(15)
  arr.push(19)

  //empty array 
  for(let i = 0; i < arr.length; i++) {
    arr.remove(i);
  }
  
  console.log(arr)
}

main()