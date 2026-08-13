const sum = require("./src/main.js");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("http request", () => {
  expect();
});
