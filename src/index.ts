import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  good: "0以上の数値が入力されました",
  bad: "負の数値を入力しないでください！",
};

rl.question("数値を入力してください", (line) => {
  const num = Number(line);
  if (typeof num === "number" && !isNaN(num)) {
    console.log(messages[num >= 0 ? "good" : "bad"]);
  } else {
    console.log("半角数字で入力してください");
  }
  rl.close();
});
