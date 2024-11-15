const obj = {
  foo: 1,
  bar: "2",
};
const { foo, bar } = obj; //objのプロパティ名と同じ変数名で定義して代入
console.log(obj.foo);
console.log(obj.bar);

const obj1 = {
  foo1: 1,
  bar1: "2",
  foobar: "3",
};
const { foo1, bar1: barVar, foobar: foobbar } = obj1; //obj1のbar1を変数名barVarに代入し宣言。foobarを変数名foobbarに代入し宣言
console.log(obj1.foo1, barVar, foobbar);
