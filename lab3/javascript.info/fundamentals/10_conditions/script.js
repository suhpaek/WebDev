/*if ("0") {//true
  alert( 'Hello' );
}*/

let question = prompt('What is the "official" name of JavaScript?', '');

if(question && question.toLowerCase() === 'ecmascript') {
    alert('Right!');
} else {
    alert('You do not know? "ECMAScript!"!');
}