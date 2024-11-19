console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/, "foobar"));
console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/g, "foobar"));

const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/); //match関数は配列を返す。キャプチャリンググループ「()内」
if (result !== null) {
  console.log(result[0]); //一致する文字列全体
  console.log(result[1]); //()内のキャプチャリンググループしたものが順に入っていく。
}

const result1 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/); //名前付きキャプチャリンググループ
if (result1 !== null) {
  console.log(result1.groups);
}

const result2 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/g); //名前付きキャプチャリンググループは無視される代わりに正規表現にマッチする部分文字列がすべて列挙された配列を返す
if (result2 !== null) {
  console.log(result2);
}
