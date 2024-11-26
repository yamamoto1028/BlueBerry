//引数の型注釈が省略可能な場合
//変数に型注釈がある場合
type F = (arg: number) => string;
const xRepeat: F = (num) => "x".repeat(num); //変数宣言時に型注釈がある場合
console.log(xRepeat(3));

//コールバック関数の場合、多くは引数の型を書かなくて良くなる
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = nums.filter((x) => x % 3 === 0); //(x)に型注釈が不要
console.log(arr2);

//文脈上の型がオブジェクト型を伝播してくる場合
type Greetable = {
  greet: (str: string) => string;
};
const obj: Greetable = {
  greet: (str) => `Hello,${str}`,
};
console.log(obj.greet("s"));

//引数の型省略ができるかどうかは省略してみればコンパイルエラーで教えてくれる
const f = (num) => num * 2;
console.log(f(2));

const arr3 = nums.filter((x) => x % 3 === 0); //(x)の()は省略できる(Prittierのせいで今はできないけど)
