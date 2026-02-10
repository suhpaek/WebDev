function checkAge(age, parentsAllow) {
  return age>18 ? true : confirm(parentsAllow);
}

function confirm(parentsAllow) {
  return parentsAllow = 'Yes';
}

let age = +prompt('How old are you?', '');
let parentsAllow = prompt('Did parents allow you?', '');

checkAge(age, parentsAllow);