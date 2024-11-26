//返り値の型注釈は省略すべきか

const range = (min: number, max: number) => {
  //型推論によって返り値はnumber[]型となる
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result; //return文を書かなかった場合、返り値はないものとして判断されvoidとして扱われる
};

const arr = range(5, 10);
for (const value of arr) {
  console.log(value);
}
