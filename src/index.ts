// 例外処理（ランタイムエラー）_throw文とErrorオブジェクト
// エラーを表すオブジェクトを用意。(Errorのインスタンス)new Error
//throw文を使ってエラーを発生させることを「エラーを投げる」という

const throwError = () => {
  const error = new Error("エラーが発生しました！");
  throw error;
};

console.log("エラーを発生させます");
throwError(); //ランタイムエラー
console.log("エラーを発生させました");

function getAverages(nums: number[]) {
  let sum: number = 0;
  if (nums.length === 0) {
    throw new Error("配列が空です");
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}
console.log(getAverages([2, 4, 6, 8, 10])); //6
console.log(getAverages([])); //渡す配列が空だったらランタイムエラー
