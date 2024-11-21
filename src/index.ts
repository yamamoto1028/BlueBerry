//function 関数名 (引数リスト):返り値の型{中身}

console.log(range(3, 20)); //関数の巻き上げ(hosting)…関数宣言よりも先に呼び出してもOK
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
console.log(range(3, 10));
