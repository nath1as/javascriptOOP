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

// var people = [];

// people.push(char);
// people.push(char2);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

var people = {
  collection: [char, char2, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(people.fullName);
  },
  add: function(person) {
    this.collection.push(person);
  }
}

people.rollCall();

// fullName(char);
// fullName(char2);
// fullName(friend);
// fullName(mother);
// fullName(father);
