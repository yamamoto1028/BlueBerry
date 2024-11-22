//メソッド記法による関数宣言

const obj = {
  //プロパティ名(引数リスト):返り値の型{中身}
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};
console.log(obj.double(100));
console.log(obj.double2(-50));
