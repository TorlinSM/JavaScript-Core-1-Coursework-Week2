/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  if (numbers.length <= 3) {
    return arr [3] || arr [2];
  }
  
   // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));


/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
