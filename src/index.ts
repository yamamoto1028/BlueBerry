const d = new Date();
d.setFullYear(2030);
console.log(d);

const d1 = new Date("2020-02-03T15:00:00+09:00"); //ISO8601形式の場合、文字列として渡せばDateオブジェクトに変換できる。
console.log(d1);

const d2 = new Date("2020-02-03T15:00:00+09:00");
const timeNum = d2.getTime(); //数値のよる表現（UNIX時間）1970/1/1 0:00:00からの経過時間（ミリ秒単位）を表したもの。
console.log(timeNum);
const d3 = new Date(timeNum); //数値からDateオブジェクトを得る
console.log(d3);

console.log(Date.now()); //現在時刻を数値で得るメソッド
const d4 = new Date();
console.log(d4);
