type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj: MyObj = { foo: true, bar: true };
const obj2: MyObj = { foo: false, bar: true, baz: 1234 };

console.log(obj2.baz * 1000); //これはコンパイルエラーundefinedの可能性がある値は計算できない
if (obj2.baz !== undefined) {
  //if文にてundefinedの可能性を除外すれば計算可能になる
  console.log(obj2.baz * 1000);
}
