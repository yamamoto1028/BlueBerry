//ジェネリクス とは型引数受け取る関数を作る機能
//ジェネリック関数 型引数を持つ関数
//関数名<型引数リスト>

function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}
console.log(repeat<string>("a", 5));
console.log(repeat<number>(1234, 3));
console.log(repeat<string>(0, 5)); //コンパイルエラー
