//ブロックスコープと関数スコープ
//ブロックスコープとは ブロック{…}の範囲に対して発生する

//年齢20歳以上なら5歳サバを読んで返す関数
function sabayomi(age: number) {
  if (age >= 18 && age < 20) {
    //ブロックスコープ
    const lie = age + 2;
    return lie;
  } else if (age >= 20) {
    const lie = age - 5; //ブロックスコープことなるスコープなら同じ変数名を使える
    return lie;
  }
  console.log(lie); //lieが存在しないコンパイルエラー
  return age;
}
// console.log(sabayomi(19));

//for文の()内の変数はそのfor文の中でのみ使える
function sum(arr: number[]): number {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    console.log(i); //iは参照可能
  }
  console.log(result);
  // console.log(i); //iは見つからない

  return result;
}
const sumArr: number[] = [1, 2, 3, 4, 5, 6];
sum(sumArr);
