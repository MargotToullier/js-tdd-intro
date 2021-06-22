const assert = require('assert');

function capitalizeFirstLetters(input){
  const word = []
  if (input = ''){
    return ''
  } else {
    for(let i=0 ; i < input.length ; i++){
    word = push.input[0].toUpperCase();
    }
  return word
  }
}

// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);

// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirstLetters("a"), "A");

// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetters(""), "");