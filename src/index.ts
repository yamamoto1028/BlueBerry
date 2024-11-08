type MyObj = {
  readonly foo: number;
};
const obj: MyObj = {
  foo: 123,
};

obj.foo = 333;
console.log(obj.foo);
