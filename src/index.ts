type Family<Parent, child> = {
  father: Parent;
  mother: Parent;
  child: child;
};
const obj: Family<number, string> = {
  father: 40,
  mother: 38,
  child: "2",
};
const mono: Family<string, boolean> = {
  father: "12",
  mother: "34",
  child: true,
};
const error: Family = {
  //型引数をつけなければコンパイルエラーになる
  father: "12",
  mother: "34",
  child: true,
};
console.log(obj, mono, error);
