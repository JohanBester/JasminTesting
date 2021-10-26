const assert = require("assert");
const palindrome = require("./palindrome");

describe("Palindrome test", function() {
  it("recognizes a non-palindrome", function() {
    expect(palindrome("Hello")).toBe(false);
  });

  it("should be case-sensitive", function() {
    assert.strictEqual(palindrome("Hello"), false);
  });

  it("knows that an empty string is a palindrome", function() {
    expect(palindrome("")).toBe(true);
  });

  it("should return true for a same letter repeated", function() {
    assert.strictEqual(palindrome("aaa"), true);
  });

  it("should consider whitespace", function() {
    assert.strictEqual(palindrome("Top spot"), false);
  });
});