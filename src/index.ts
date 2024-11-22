//可変長引数の宣言 rest引数構文
//...引数:型とすることで、呼び出し時の引数の数が何個でもよくなる。残りの全ての引数を使うという意味

const sum = (...args: number[]): number => {
  let result = 0;
  for (const sum of args) {
    result += sum;
  }
  return result;
};
const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums, 6, 7, 8, 9, ...nums));

const sum3 = (a: number, b: number, c: number) => a + b + c; //3つの引数の型を指定しているが、
const nums2: [number, number, number] = [1, 2, 3]; //ここで引数の型指定の数で配列内の個数を指定すればOK
console.log(sum3(...nums2));
