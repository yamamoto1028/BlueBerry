// クラスの静的初期化ブロック(staticブロック)
// クラス宣言の中に static{…}
// staticブロックは文を"クラスの宣言の一部"として書くことができるので、
// プライベートプロパティへのアクセスを通じた特権的な処理が可能になる。

console.log("Hello");
class C {
  static {
    console.log("Taro");
  }
}
console.log("world");
// Hello
// Taro
// world

// インスタンスの#ageはsetAge()を通してしか変更できない。
// 0~150の範囲外の値を設定することはできない
class User {
  #age: number;
  constructor() {
    this.#age = 0;
  }
  getAge() {
    return this.#age;
  }
  setAge(age: number) {
    if (age < 0 || age > 150) {
      return;
    }
    this.#age = age;
  }
}

// 上記の制限を、staticブロックを使うことで強引に突破するユーザを作ることができる
class User1 {
  // ------------------------------------
  static adminUser: User1;
  static {
    this.adminUser = new User1();
    this.adminUser.#age = 9999;
  }
  // ------------------------------------
  #age: number;
  constructor() {
    this.#age = 0;
  }
  getAge() {
    return this.#age;
  }
  setAge(age: number) {
    if (age < 0 || age > 150) {
      return;
    }
    this.#age = age;
  }
}
console.log(User1.adminUser.getAge()); //9999
