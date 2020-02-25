let itemCounts = require('./lib/itemCounts');
let itemFrequency = require('./lib/frequencyChar');
let openAndRead = require('./lib/openAndRead');
let sanitize = require('./lib/sanitize');
let stringToCharacters = require('./lib/stringToCharacters');
// var sampleData = require('../sample_data/great-gatsby.txt');

let sampleInput = ['a', 'a', 'a', 'b', 'b', 'c'];
let counts = itemCounts(sampleInput);

// Object.keys returns an array of keys for the given object.
// See https://javascript.info/keys-values-entries
for (let item of Object.keys(counts)) {
  let count = counts[item];

  console.log(`${item}\t${count}`);
}
