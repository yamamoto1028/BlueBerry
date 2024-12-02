// クラスの継承_(1)子は親の機能を受け継ぐ
// 親クラスを継承して作られた子クラスは親クラスのインスタンスの代わりに使用できる
// 継承を使うとプログラムの設計が複雑になる傾向がある
// TypeScriptはクラスがなくてもなんとかなる言語だし、あえてクラスを、しかも継承という複雑なものまで使うかは慎重な判断が必要！

// class クラス名 extends 親クラス {…}
// class extends 親クラス

class User {
  name: string;
  #age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

class PremiumUser extends User {
  rank: number = 1;
}
const taro = new PremiumUser("Taro", 26);
console.log(taro.rank); //1
console.log(taro.name); //Taro
console.log(taro.isAdult()); //true
console.log(taro);

//PremiumUser型はUser型の部分型なのでUser型が必要なところにも使える
function getMassage(u: User) {
  return `こんにちは${u.name}さん`;
}
const john = new User("John Smith", 15);
console.log(getMassage(taro)); //PremiumUser型
console.log(getMassage(john)); //User型
