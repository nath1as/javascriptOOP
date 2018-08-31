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

var people = [];

people.push(char);
people.push(char2);
people.push(friend);
people.push(mother);
people.push(father);

function rollCall(collection) {
  collection.forEach(fullName);
}


rollCall(people);

// fullName(char);
// fullName(char2);
// fullName(friend);
// fullName(mother);
// fullName(father);
