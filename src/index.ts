//変数スコープと関数
//変数のスコープとは 変数の有効範囲 のこと
const repeat = function <T>(element: T, length: number): T[] {
  //引数も関数のスコープに属する
  const result: T[] = []; //変数resultはrepeatのスコープに属する
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  const result = []; //スコープ内で複数回同じ変数を宣言することはできない

  return result;
};
console.log(result); //repeat関数の外にはresultは存在しない

//内側のスコープから外側のスコープにはアクセスできる--------------------------------------------------
const repeatLength = 5;
const repeat1 = function <T>(element: T): T[] {
  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    //関数の外のrepeatLengthを参照している
    result.push(element);
  }
  return result;
};
console.log(repeat1("3"));
//-------------------------------------------------------------------------------------------
const repeatLength1 = 5; //モジュールスコープ
const repeat2 = function <T>(element: T): T[] {
  const repeatLength1 = 3; //関数スコープ…内側が優先して参照される
  const result: T[] = [];
  for (let i = 0; i < repeatLength1; i++) {
    result.push(element);
  }
  return result;
};
console.log(repeat2("3"));
console.log(repeatLength1); //関数の外側ならモジュールスコープが参照される
