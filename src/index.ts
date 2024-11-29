// クラス式でクラスを作成する
//関数宣言と関数式の関係みたいなもん
//const 変数名 = class {
//   内容の記載方法は同じ
// };
const User = class {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
};

//クラス式ではprivateとprotectedが使えないため、基本的にはクラス宣言を用いた方が良い→使えそうだけど？？

const taro = new User("Taro", 26);
console.log(taro.name); //Taro
console.log(taro.age); //26
console.log(taro.isAdult()); //true
