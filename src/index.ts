import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`数値を入力してください:`, (name) => {
  //文字列が入力されるとここが実行される
  let sum = 0;
  let i = 1;
  while (i <= 100) {
    sum += i;
    i++;
  }
  console.log(sum);

  rl.close();
});
