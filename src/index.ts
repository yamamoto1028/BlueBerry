//力試し_コールバック関数の練習------------------------------------------------------------------------------------------
// function map(array: number[], callback: (value: number) => number): number[] {
//   const result: number[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//   }
//   return result;
// }
// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
// console.log(result); //[10, 10, 20, 30, 50, 80, 130]

//map関数の引数や返り値をどの要素型でも受け取れるようにする------------------------------------------------------------------
//ジェネリクスを使用→呼び出し時に与えた引数の型推論で型が決まる
function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}
const data = [1, -3, -2, 8, 0, -1];
const result = map(data, (x) => x >= 0);
console.log(result);
