const obj = {
  foo: 123,
  bar: true,
  bazz: "string",
};
const { foo, ...restObj } = obj; //残りのプロパティを全て持つ新たなオブジェクトを代入。
console.log(foo);
console.log(restObj);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...restArray] = arr; //その位置以降のすべての要素を新たな配列にコピーする。
console.log(a, b, c);
console.log(restArray);
