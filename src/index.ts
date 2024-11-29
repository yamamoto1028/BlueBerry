// クラスの宣言はインスタンスの型を作る
// クラス宣言の重要な特徴の一つは、 クラスオブジェクトという値をつくるものであると同時に、インスタンスの型を宣言するものであるということ

class User {
  name: string = "";
  age: number = 0;
  isAdult(): boolean {
    return this.age >= 20;
  }
}
const taro: User = new User(); //OK
const john: User = {
  name: "John",
  age: 15,
  isAdult: () => {
    return john.age >= 20;
  },
}; //OK
console.log(john.isAdult());

// クラス宣言は型宣言と変数宣言の両方を同時に兼ねられるもの。
// これはクラス宣言特有の挙動であり、クラス式には上記の効果はない。
// 特に事情がなければ基本的にはクラス宣言を使用するのが好ましい。
