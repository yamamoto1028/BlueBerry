// 例外をキャッチするtry-catch文
// 例外処理（ランタイムエラー）が発生してもプログラムが強制終了しないようにする機構
// try {
//   tryブロック（複数書ける）
// }catch(err){
//   catchブロック（複数書ける）
// }
// try文で例外が発生した場合にcatch文に移行する
const throwError = () => {
  const error = new Error("エラーが発生しました！");
  throw error;
};

try {
  console.log("エラーを発生させます");
  throwError(); //try文はここで終わり、catch文へ移行する
  console.log("エラーを発生させました"); //実行されない
} catch (err) {
  console.log("エラーをキャッチしました");
  console.log(err); //Errorオブジェクトの表示
}
console.log("おわり"); //例外が発生しても処理は止まらずここまで実行される
