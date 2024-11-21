//アロー関数式の構文
//(引数リスト):返り値の型=>{中身}

type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};

const Taro: Human = {
  height: 1.68,
  weight: 80,
};
console.log(calcBMI(Taro));
