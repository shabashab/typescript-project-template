import index from "../src/index";

test("Index module returns 'Hello, World!'", () => {
  expect(index).toBe("Hello, World!");
});