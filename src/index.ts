// finallyで脱出に割り込む
// エラーが発生してもしなくても実行される

try {
  console.log("tryブロック");
} catch {
  console.log("catchブロック");
} finally {
  console.log("finallyブロック");
}
// try-finallyの例
try {
  console.log("tryブロック");
} finally {
  console.log("finallyブロック");
}

try {
  console.log("tryブロック1");
  throwError();
  console.log("tryブロック2");
} catch (err) {
  console.log("catchブロック");
} finally {
  console.log("finallyブロック");
}

try {
  console.log("エラーを発生させます");
  throwError();
  console.log("エラーを発生させました");
} finally {
  console.log("finallyブロック");
}
console.log("try文の後ろ");

function throwError() {
  throw new Error("エラー発生");
}

// finallyはエラー以外の脱出にも対応している。（例）return文
console.log(sum(100));
function sum(max: number): number {
  try {
    let result = 0;
    for (let i = 1; i <= max; i++) {
      result += i;
    }
    return result;
  } finally {
    console.log("sumから脱出しました!");
  }
}
