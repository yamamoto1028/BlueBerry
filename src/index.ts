const r = /ab+c/; //正規表現オブジェクト

console.log(r.test("abbbbc")); //testメソッド→文字列型を受け取り、文字列のどこか一部分が正規表現にマッチしているか真偽値を返す
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

const s = /^abc/; //文字列の先頭にあるabcにのみマッチする
console.log(s.test("abcdefg"));
console.log(s.test("aabcdefg"));
