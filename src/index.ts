const obj1 = {
  bar: 456,
  baz: 789,
};
const obj2 = {
  foo: 123,
  ...obj1, //スプレッド構文_obj1のプロパティをコピーできる
};
console.log(obj2);
