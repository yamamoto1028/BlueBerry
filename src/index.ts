//型引数を持つ関数型
const repeat = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type Func = <T>(arg: T, num: number) => T[];

const repeat1: Func = function (element, length) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat1("3", 5));
console.log(repeat1(3, 5));
console.log(repeat("3", 5));
