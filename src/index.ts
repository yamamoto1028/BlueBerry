//力試し_簡単な関数を書いてみよう
//FizzBazz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//for文の中の処理を関数に抜き出す--------------------------------------------------------
function getFizzBuzzString(i: number): string {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return String(i);
  }
}

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i); //iの値がなんの倍数かによって返す文字列を変える
  console.log(message);
}

//for-of文で繰り返し処理を書く----------------------------------------------------------
function sequence(start: number, end: number): number[] {
  let arr: number[] = []; //numberの配列型の空配列を用意。
  for (let i = start; i <= end; i++) {
    arr.push(i); //i~jまでの数値を配列に繰り返し追加。
  }
  return arr; //出来上がったarrを呼び出し元に返す
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
