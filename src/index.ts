//可変長引数の宣言 rest引数構文
//...引数:型とすることで、呼び出し時の引数の数が何個でもよくなる。残りの全ての引数を使うという意味

const sum = (...args: number[]): number => {
  let result = 0;
  for (const sum of args) {
    result += sum;
  }
  return result;
};
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3));

const sum2 = (base: number, ...args: number[]): number => {
  //rest引数（...引数）にも型注釈が必要で、配列型でないといけない。
  let result = base * 1000;
  for (const sum of args) {
    result += sum;
  }
  console.log(`baseの中身は${base}、argsの中身は${args}`);

  return result;
};
console.log(sum2()); //コンパイルエラー
console.log(sum2(1, 2, 3, 4));
