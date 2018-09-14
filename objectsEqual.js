function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }
  
  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var bKeys = Object.getOwnPropertyNames(b).sort(); 
  
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function(key, index) {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var key;
  var i;
  
  return aKeys.every(function(key) {
    return a[key] === b[key];
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})); // false

