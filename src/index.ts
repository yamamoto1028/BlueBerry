/*タプル型・・・要素数が固定された配列。異なる型定義を配列に入れることができる */

let tuple: [string, number] = ["foo", 0];
console.log(tuple);

tuple = ["aiueo", -555];
console.log(tuple);

const str = tuple[0];
const num = tuple[1];
const num2 = tuple[2]; //コンパイルエラー

console.log(str);
console.log(num);

type User = [name: string, age: number]; //ラベル付きタプル型
const uhyo: User = ["uhyo", 26];
console.log(uhyo[1]);

const arrayTuple: readonly [string, number] = ["配列", 21]; //読み取り専用

const obj: [string, number, string?] = ["foo", 29, "bar"]; //「string?」の構文はそれがあってもなくてもいいという意味
const obj1: [string, number, string?] = ["foo", 29];
console.log(obj, obj1);
