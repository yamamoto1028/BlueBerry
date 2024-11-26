//関数の型引数を宣言する方法
//function関数式の場合
const repeatA = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  console.log(result);
  return result;
};
repeatA<number>(1, 10);

//アロー関数式の場合
const repeat1 = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  console.log(result);
  return result;
};
repeat1<string>("3", 10);

//メソッド記法の場合
const utils = {
  repeat2<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    console.log(result);
    return result;
  },
};
utils.repeat2<number>(5, 10);

//型引数が複数の場合
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];
const p = pair<string, number>("Taro", 26);
console.log(p);

//
//extendsやオプショナルな型引数は関数の型引数でも使用可能
//repeatの型引数をstring型のnameプロパティを持つオブジェクトに限る↓
const repeat4 = <
  T extends {
    name: string;
  }
>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

console.log(
  repeat4<HasNameAndAge>(
    {
      name: "Taro",
      age: 26,
    },
    3
  )
);
console.log(repeat4<string>("a", 5)); //コンパイルエラー 与えられたstringという型は{name:string}の部分型であるという条件を満たしていない。
