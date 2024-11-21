//アロー関数式の省略形
//(引数リスト):返り値の型=>式

type Human = {
  height: number;
  weight: number;
};

//通常の書き方
// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };

//省略形
const calcBMI = ({ height, weight }: Human) => weight / height ** 2;

const Taro: Human = {
  height: 1.68,
  weight: 80,
};
console.log(calcBMI(Taro));
