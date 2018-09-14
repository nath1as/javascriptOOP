function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    },
    visited: visited,
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(
  chile.getDescription(),       // "The Republic of Chile is located in South America."
  canada.getDescription(),      // "Canada is located in North America."
  southAfrica.getDescription(), // "The Republic of South Africa is located in Africa."
);
