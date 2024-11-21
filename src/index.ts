type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
Taro,26,1
John Smith, 17, 0
Mary Sue,14,1
`;

const users: User[] = []; //user情報を入れる空の配列
const lines = data.split("\n"); //文字列を改行位置で分割

for (const line of lines) {
  //lines配列の要素が変数lineに順番に入り、その個数だけ繰り返し処理
  if (line === "") {
    continue;
  }
  const [name, ageString, premiumUserString] = line.split(","); //各要素を,で分割し順番に左辺の変数へ分割代入する。
  const age = Number(ageString); //変数ageはNumber型なので変換して代入。
  const premiumUser = premiumUserString === "1"; //「1」ならTRUEに代入するようにした

  users.push({ name, age, premiumUser });
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです`);
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`);
  }
}
console.log(users);
