//関数の型 関数型の記法
//(引数: 引数の型): 返り値の型 => 中身
//xRepeatにカーソル乗せると型の定義→(引数リスト) => 返り値の型
const xRepeat = (num: number): string => "x".repeat(num); //repeatメソッドは文字列が持つメソッド
console.log(xRepeat(2));

//type文で型注釈をつけられる
type F = (repeatNum: number) => string; //→(引数リスト) => 返り値の型
const xRepeat2: F = (num: number) => "x".repeat(num);

//下記、型に合わない関数を変数に代入するのはコンパイルエラー
type F2 = (arg: string, arg2: string) => boolean;
const fun: F2 = (num1: string): boolean => console.log(num1);
