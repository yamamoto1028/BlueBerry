import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`名前を入力してください:`, (name) => {
  //文字列が入力されるとここが実行される
  switch (name) {
    case "greet":
      console.log("こんにちは");
      break;
    case "cat":
      console.log("あなたは猫派？");
      console.log("私は犬派です");
      break;
    default:
      console.log(`${name}を認識できませんでした`);
  }

  rl.close();
});
