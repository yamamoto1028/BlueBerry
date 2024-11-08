const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789,
};
const obj2 = {
  ...obj1,
  foo: -999999, //スプレッド構文でコピーしたプロパティを書き換えることができる
};
console.log(obj2);
