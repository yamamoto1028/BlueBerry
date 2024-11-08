type User = {
  name: string;
  age: number;
};
const obj = {
  name: "John",
  age: 20,
  telNumber: 1234567890,
};

const u: User = obj; //別にオブジェクト用意し型付きの変数に代入するとエラーなし
console.log(u);

// --------------------------------------------------------------------------------------------------------------------
// const u: User = {
//   name: "John",
//   age: 20,
//   telNumber: 1234567890,
// };//User型を指定したuにUser型にはないプロパティを指定するとコンパイルエラーとなる
