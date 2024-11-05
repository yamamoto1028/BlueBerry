import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`名前を入力してください:`, (name: string) => {
  //文字列が入力されるとここが実行される
  const displayName = name || "ゲスト";
  console.log(`こんにちは${displayName}さん`);

  rl.close();
});
