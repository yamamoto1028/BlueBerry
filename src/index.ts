type FooBar = {
  foo: string;
  bar: number;
};
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};
const obj = {
  foo: "hi",
  bar: 1,
  baz: true,
};
const obj2: FooBar = obj; //2つの同じプロパティ(かつ同じ型)を持っているオブジェクト型は使いまわせる
console.log(obj2);
