import { foo } from "../src/";

test("Foobar", () => {
  console.log = jest.fn();
  expect(foo(false)).toBe("bar");
  expect(foo(true)).toBeUndefined();
  expect(console.log).toHaveBeenCalledWith("bar");
  expect(console.log).toHaveBeenCalledTimes(1);
});
