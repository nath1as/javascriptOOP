var char = {
  firstName: 'Jon',
  lastName: 'Snow',
};


var char2 = {};
char2.firstName = 'Jon';
char2.lastName = 'Snow';

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}


fullName(char);
fullName(char2);
fullName(friend);
fullName(mother);
fullName(father);
