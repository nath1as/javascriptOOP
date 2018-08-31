var char = {
  firsName: 'Jon',
  lastName: 'Snow',
};


var char2 = {};
char2.firstName = 'Jon';
char2.lastName = 'Snow';


function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}


fullName(char2);
