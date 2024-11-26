//コールシグネチャによる関数型の表現
//(引数リスト):返り値の型;
type myFunc = {
  isUsed?: boolean; //プロパティの定義
  (arg: number): void; //コールシグネチャの定義
};
const double: myFunc = (arg: number) => {
  console.log(arg + 2);
};
double.isUsed = true; //doubleはisUsedプロパティを持つ
console.log(double.isUsed);
double(2); //関数としても呼び出せる

//普通の関数型もコールシグネチャを使って書ける
type F = (arg: string) => number; //普通の関数型
type G = { (arg: string): number }; //コールシグネチャ(普通の関数型でかけるならあんまりやらないけど)

//string型を引数で渡すとnumber型を返し、number型を引数で渡すとboolean型で返す→コールシグネチャの出番
type SwapFunc = {
  (arg: string): number;
  (arg: number): boolean;
};
const H: SwapFunc = (arg: string | number): number | boolean => {
  //function H(arg: string): number;
  // function H(arg: number): boolean;
  // function H(arg: string | number): number | boolean{ ←オーバーロードをシグネチャを明示的に記述するとHのエラーは解消できる。
  if (typeof arg === "string") {
    return 1;
  } else {
    return false;
  }
};
console.log(H("5"));
console.log(H(5));
