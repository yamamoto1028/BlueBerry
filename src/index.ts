//返り値がない関数を宣言するためには、返り値の型としてvoid型という特殊な型を使用する。

//（例）引数nを受け取って"Hello world"とn回表示するだけの返り値のない関数
function helloWorldNTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello world");
  }
}

helloWorldNTimes(5);

function helloWorldNTimes2(n: number): void {
  //返り値のない関数の返り値の型はvoidにする
  if (n >= 100) {
    console.log(`${n}回なんて無理です！`);
    return; //返り値がある場合、returnと返り値の間に改行を入れてはいけない
  }
  for (let i = 1; i <= n; i++) {
    console.log(`Hello world(${i}回目)`);
  }
}
helloWorldNTimes2(5);
helloWorldNTimes2(150);
