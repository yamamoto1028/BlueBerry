// 力試し_クラスを関数に置き換えてみる
// function createUser(name: string, age: number) {
//   return (message: string) => {
//     return `${name}(${age})「${message}」`;
//   };
// }
// const getMessage = createUser("Taro", 26);
// console.log(getMessage("やっほー"));

// -----
// const lines = ["10 2"];
// const num = lines[0].split(" ").map(Number);
// let N = Number(num[0]);
// const M = Number(num[1]);
// let arr = [];
// let result = [];
// const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
// while (N > 0) {
//   let result = N % M;
//   arr.push(chars[result]);
//   N = Math.floor(N / M);
// }
// for (let i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// console.log(result.join(""));

// ////////////////////////////////////////////////////////////////// ----

// import * as readline from "readline";
// // 入力値を定義
// const testData = [
//   ["3", "ooo", "xxx", "xxx"], //0-1段目横ビンゴ
//   ["3", "xxx", "ooo", "xxx"], //1-2段目横ビンゴ
//   ["3", "xxx", "xxx", "ooo"], //2-3段目横ビンゴ
//   ["3", "oxx", "oxx", "oxx"], //3-1行目縦ビンゴ
//   ["3", "xox", "xox", "xox"], //4-2行目縦ビンゴ
//   ["3", "xxo", "xxo", "xxo"], //5-3行目縦ビンゴ
//   ["3", "oxx", "xox", "xxo"], //6-左上から右下ビンゴ
//   ["3", "xxo", "xox", "oxx"], //7-右上から左下ビンゴ
//   ["3", "oxx", "xox", "xox"], //8-Noビンゴ
//   ["3", "oxo", "xox", "xox"], //9-Noビンゴ
//   ["3", "oox", "oox", "oxx"], //10-Noビンゴ
//   ["3", "xxx", "xxx", "xxx"], //11-Noビンゴ
//   ["5", "ooxox", "xxxox", "oxxox", "xxxox", "ooxox"], //12-4行目縦ビンゴ
//   ["5", "ooooo", "xxxox", "xoxxo", "xoxoo", "xxxoo"], //13-1段目横ビンゴ
//   ["5", "oxoxo", "xoxox", "oxoxo", "xoxxx", "oxoxo"], //14-左上から右下ビンゴ
//   ["5", "oxoxo", "xoxox", "oxoxo", "xxxox", "oxoxo"], //15-右上から左下ビンゴ
//   ["5", "xxxxx", "xoxox", "oxoxo", "xxxox", "oxoxo"], //16-Noビンゴ
// ];

// // readlineインターフェース作成
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // 入力受付
// rl.question(
//   `使いたいテストデータの配列番号を入力してください（例: 0~${
//     testData.length - 1
//   }）: `,
//   (input) => {
//     const selectedIndex = parseInt(input, 10);

//     if (
//       isNaN(selectedIndex) ||
//       selectedIndex < 0 ||
//       selectedIndex >= testData.length
//     ) {
//       console.log(
//         "無効なインデックスです。0〜" +
//           (testData.length - 1) +
//           " の間で入力してください。"
//       );
//     } else {
//       const lines = testData[selectedIndex];
//       console.log("選択されたテストデータ:", lines);
//       // ここでlinesを使って処理を続けられる
//     }

//     // const selectedIndex = 16;
//     const lines = testData[selectedIndex];

//     // Nとビンゴ盤面を分離
//     const N: number = parseInt(lines[0], 10);
//     const board: string[] = lines.slice(1);

//     // 行チェック横
//     for (let i = 0; i < N; i++) {
//       const row = board[i].split("");
//       if (row.length === N && row.every((cell) => cell === "o")) {
//         console.log("Yes");
//         console.log("行チェック通過");
//         process.exit(0);
//       }
//     }

//     // 列チェック縦
//     for (let column = 0; column < N; column++) {
//       let allCircle = true;
//       for (let row = 0; row < N; row++) {
//         if (board[row][column] !== "o") {
//           allCircle = false;
//           break;
//         }
//       }
//       if (allCircle) {
//         console.log("Yes");
//         console.log("縦チェック通過");
//         process.exit(0);
//       }
//     }

//     // 左上 → 右下の対角線
//     let diago1 = true;
//     for (let i = 0; i < N; i++) {
//       if (board[i][i] !== "o") {
//         diago1 = false;
//         break;
//       }
//     }
//     if (diago1) {
//       console.log("Yes");
//       process.exit(0);
//     }

//     // 右上 → 左下の対角線
//     let diago2 = true;
//     for (let i = 0; i < N; i++) {
//       if (board[i][N - i - 1] !== "o") {
//         diago2 = false;
//         break;
//       }
//     }
//     if (diago2) {
//       console.log("Yes");
//       process.exit(0);
//     }

//     // ビンゴなし
//     console.log("No");

//     rl.close(); // 入力受付終了
//   }
// );
// //////////////////////////////////////////////////////////////////////

// const lines = [
//   "4",
//   "koko 23 04/22 Tokyo",
//   "shuhei 26 10/28 Fukuyama",
//   "Marin 25 07/01 Ora",
//   "Michel 32 02/28 NewYork",
// ];

// const N = Number(lines[0]);
// const users = lines.slice(1, N + 1);
// for (const user of users) {
//   const [name, age, birth, state] = user.split(" ");
//   console.log(`User{`);
//   console.log(`nickname : ${name}`);
//   console.log(`old : ${age}`);
//   console.log(`birth : ${birth}`);
//   console.log(`state : ${state}`);
//   console.log(`}`);
// }

// //////////////////////////////////////////////////////////////////////
// const lines = [
//   "4",
//   "koko 25 04/22 Tokyo",
//   "shuhei 22 10/28 Fukuyama",
//   "Marin 24 07/01 Ora",
//   "Michel 23 02/28 NewYork",
//   "23",
// ];

// const N = Number(lines[0]);
// const K = Number(lines[N + 1]);
// const users = lines.slice(1, N + 1);
// for (const user of users) {
//   const [name, age] = user.split(" ");
//   if (Number(age) === K) {
//     console.log(name);
//   } else {
//     null;
//   }
// }

// //////////////////////////////////////////////////////////////////////

// type User = {
//   name: string;
//   age: number;
//   birth: string;
//   state: string;
// };

// const lines = [
//   "4",
//   "koko 25 04/22 Tokyo",
//   "shuhei 22 10/28 Fukuyama",
//   "Marin 24 07/01 Ora",
//   "Michel 23 02/28 NewYork",
// ];

// // 人数
// const N = Number(lines[0]);

// //ユーザーデータをオブジェクトに変換
// const users = lines
//   .slice(1, N + 1)
//   .map((line) => {
//     const [name, age, birth, state] = line.split(" ");
//     return {
//       name,
//       age: parseInt(age, 10),
//       birth,
//       state,
//     };
//   })
//   .sort((a, b) => a.age - b.age);
// // 年齢の昇順で並び替え(ageをparseIntでNumber型にしておく必要あり)

// // 整形して出力
// users.forEach((users) => {
//   console.log(`${users.name} ${users.age} ${users.birth} ${users.state}`);
// });

//////////////////////////////////////////////////////////////
// const lines = [
//   "3 2",
//   "mako 13 08/08 nara",
//   "taisei 16 12/04 nagano",
//   "megumi 14 11/02 saitama",
//   "2 taihei",
//   "3 megu",
// ];

//////////////////////////////////////////////////////////////

// [経過年数の判定]
// 初度検査年
// TC車両.初度検査年月が4桁の場合
const shodoYear = (str: string) => {
  if (str.length === 4) {
    console.log(`初度検査年は${str}です`);
    return str;
  } else if (Number(str) < 200310) {
    let strResult = "";
    strResult = str.slice(0, 4);
    console.log(`初度検査年は${strResult}です`);
    return strResult;
  } else {
    let strResult = "";
    strResult = str.slice(0, 4);
    console.log(`初度検査年は${strResult}です`);
    return strResult;
  }
};
// TC車両.初度検査年月 < 200310の場合
// その他の場合

// 初度検査月の算出
const shodoMonth = (str: string) => {
  if (str.length === 4) {
    console.log(`初度検査月は12です`);
    return 12;
  } else if (Number(str) < 200310) {
    console.log(`初度検査月は12です`);
    return 12;
  } else {
    let strResult = "";
    strResult = str.slice(4, 6);
    console.log(`初度検査月は${strResult}です`);
    return strResult;
  }
};

const keikaNensu = (str: string, kazeiYear: number) => {
  let result = 0;
  const resultYear = shodoYear(str);
  const resultMonth = shodoMonth(str);

  if (Number(resultMonth) < 4) {
    result = kazeiYear - Number(resultYear);
    console.log(`経過年数は課税年度 - 初度検査月の ${result} です`);
  } else if (Number(resultMonth) >= 4) {
    result = kazeiYear - Number(resultYear) - 1;
    console.log(`経過年数は課税年度 - 初度検査月 - 1の ${result} です`);
  }
  if (result < 0) {
    result = 0;
    console.log(`経過年数が0未満なので${result}とします`);
    return result;
  }
  return result;
};

// shodoYear("223456");
// shodoMonth("223456");
keikaNensu("2012", 2026);
