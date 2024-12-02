// 例外処理と大域脱出
// try-catch文は強力な言語機能だが取り扱いには注意
function somefunc() {
  const error = new Error("エラーです！");
  throw error;
}

try {
  somefunc();
} catch (err) {
  //何も書かないなにもしない
}
// キャッチされたエラーの中身を見なかったり、それどころかエラーの処理を何もしないで次に進んだりするのは悪い例外処理の典型。

// 失敗を表すthrow以外の選択肢としては失敗を表す値を返すというものがある
// 例)エラーを投げる代わりにundefinedを返すようにできる

function getAverage(nums: number[]) {
  if (nums.length === 0) {
    return undefined;
  }
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(sum);
  }
  return sum / nums.length;
}

const result = getAverage([]);
console.log(result);

try {
  throwError();
  //tryブロックから脱出するのでここは表示されない
  console.log("ここは表示されない");
} catch (err) {
  console.log(err);
}
function throwError() {
  const error = new Error("エラーが発生");
  throw error;
  // 関数から脱出するのでここは表示されない
  console.log("ここも表示されない");
}

// ランタイムエラーは明示的に書いたthrow文だけでなく、それ以外の原因でも発生する可能性がある。
try {
  const bigInt = BigInt("foobar"); //ここでエラー発生
  console.log(bigInt); //ここは実行されない
} catch (err1) {
  console.log(err1);
}
