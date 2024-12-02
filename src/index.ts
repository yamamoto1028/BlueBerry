// this_関数の中のthisは呼び出し方によって決まる
// thisは基本的には自分自身を表すオブジェクトであり、おもにメソッドの中で使われる
// thisが具体的に何を指すのかは関数の呼び出し方によって決まる
// taro.isAdult()のように 「オブジェクト.メソッド名」 の形で参照する
// 「オブジェクト」が「this」に相当する。

class User {
  name: string;
  #age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  isAdult(): boolean {
    return this.#age >= 20;
  }
}
const taro = new User("Taro", 26);
const john = new User("John Smith", 15);
console.log(taro.isAdult === john.isAdult); //true

// thisを使う関数をメソッド呼び出しの記法を用いずに呼び出した場合が問題
const isAdult = taro.isAdult;
console.log(isAdult()); //ランタイムエラー

// クラスだけじゃなくて普通のオブジェクトでもthis は使えるよ-------------------------------------------
const user = {
  name: "Taro",
  age: 26,
  isAdult() {
    return this.age >= 20;
  },
};
console.log(user.isAdult()); //true
user.age = 15;
console.log(user.isAdult()); //false
