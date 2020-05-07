/* eslint-disable no-console */
require('colors');

// formatting
function formatString(value) {
  let formatted = value;
  if (typeof value === 'string') {
    formatted = `'${value}'`;
  } else if (Array.isArray(value)) {
    formatted = `[${value.toString()}]`;
  }

  return formatted.toString();
}

// tests
/**
 * tests that output from a function is as expected given a specific input
 * @param {function} fn function to be tested
 * @param {*} expectedOutput output expected from the function
 * @param {*} testInput input to pass to the function
 */
function test(fn, expectedOutput, ...testInput) {

  const functionName = fn.name;

  const multiInput = arguments.length > 3; // more than 1 input argument

  const input = multiInput
    ? testInput.map(formatString).join(', ')
    : formatString(testInput[0]);
    
  const output = formatString(expectedOutput);
  const actualOutput = formatString(multiInput ? fn(...testInput) : fn(testInput[0]));
  
  const testStatus = actualOutput === output
    ? 'Passed'.green
    : `${'Failed'.red}, got ${actualOutput.yellow}`;

  console.log(
    '->', `${functionName.blue}(${input}) === ${output.yellow}`, '--'.grey, testStatus
  );
}


module.exports = test;