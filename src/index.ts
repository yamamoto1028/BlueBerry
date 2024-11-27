//関数の型引数は省略できる
//type文の型引数はできない
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}
const result = repeat("a", 5); //関数呼び出し時に渡した引数の型によって型推論が行われる。
const result2 = repeat(2, 5);
