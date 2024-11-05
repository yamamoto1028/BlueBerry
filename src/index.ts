import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`数値を入力してください:`, (line) => {
  //文字列が入力されるとここが実行される
  const num = Number(line);
  if (!Number.isNaN(num)) {
    if (num >= 0 && num < 100) {
      console.log(`${num}は0以上100以下です`);
    } else {
      console.log(`${num}は対象範囲外の値です`);
    }
  } else {
    console.log(`半角数字で入力してください`);
  }

  rl.close();
});
