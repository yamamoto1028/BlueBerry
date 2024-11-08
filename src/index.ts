type MsgType = {
  [key: string]: string; //インデックスシグネチャ「どんな名前のプロパティも受け入れる」
};
const messages: MsgType = {
  msg1: "2の倍数です",
  msg2: "5の倍数です",
  msg3: "10の倍数です",
};
messages.msg4 = "3の倍数です";

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(messages.msg3);
  } else if (i % 2 === 0) {
    console.log(messages.msg1);
  } else if (i % 5 === 0) {
    console.log(messages.msg2);
  } else {
    console.log(i);
  }
}
