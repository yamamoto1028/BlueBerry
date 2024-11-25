//返り値の型推論は省略可能
//省略した場合は型推論によって決められる
const xRepeat = (num: number) => "x".repeat(num); //返り値が型推論によってstringと判断された

//返り値を返さない関数も型注釈をつけられる→返り値はvoid型になる
const g = (num: number) => {
  for (let i = 0; i < num; i++) {
    console.log("Hello, World!");
  }
};
g(3);
