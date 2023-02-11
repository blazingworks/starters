function foo(log: false): string;
function foo(log: true): void;
function foo(log = false): string | void {
  return log ? console.log("bar") : "bar";
}

export { foo };
