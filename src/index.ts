type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const Taro: Human = {
  height: 1.68,
  weight: 80,
};
console.log(calcBMI(Taro));
