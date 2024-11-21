type Human = {
  height: number;
  weight: number;
};

console.log(calcBMI(Taro)); //変数宣言よりも前に関数の呼び出しはできない…巻き上げ機能は使えない

const calcBMI = function ({ height, weight }: Human): number {
  //humanのところを分割代入でプロパティを直接書ける
  return weight / height ** 2;
};

const Taro: Human = {
  height: 1.68,
  weight: 80,
};
console.log(calcBMI(Taro));
