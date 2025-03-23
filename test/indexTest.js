// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.
// Importing the Chai assertion library
const { expect } = require('chai');

// Define the test suite
describe('Test Suite', () => {
  // Define a test group (you can have nested test groups)
  describe('Test Group', () => {
    // Define the test case
    it('should pass the test', () => {
      // A simple assertion that will pass
      expect(true).to.be.true; // This test will pass because true is indeed true
    });
  });
});

