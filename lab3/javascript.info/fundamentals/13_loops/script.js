/*do {
  // loop body
} while (condition);
 
let i = 3;
while (i) alert(i--);

for (; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
  

we can force the exit at any time using the special break directive.

(i > 5) ? alert(i) : continue;

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');*/

for(let i = 2; i<=10; i+=2) {
    alert(i);
}