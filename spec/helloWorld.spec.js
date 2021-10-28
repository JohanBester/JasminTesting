const assert = require("assert");
const helloWorld = require("../helloWorld");

describe("helloWorld()", function() {
  // Arrange
  let greeting = "Hello world";
  //Act
  let result = helloWorld();
  //Assert
  it("it should return Hello world", function() {
    expect(result).toEqual(greeting);
  });
});
