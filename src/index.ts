// privateとprotectedの動作と使いどころ
// protected → 子クラスからはアクセスできる
// private(#) → 子クラスからもアクセスできない
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
  public isAdult(): boolean {
    return this.#age >= 10; //「#age」はUserに属するプライベートプロパティのため、PremiumUserからはアクセスできない。
  }
}

// こう書き換える-------------------------------------------------------------------------
class User1 {
  name: string;
  protected age: number; //「#」をprotectedにすることで子クラスからはアクセスできるようになる
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
}
class PremiumUser1 extends User1 {
  public isAdult(): boolean {
    return this.age >= 10;
  }
}
// ---------------------------------------------------------------------------------------
const taro = new PremiumUser1("Taro", 15);
const john = new User1("John", 15);
console.log(taro.isAdult()); //true
console.log(john.isAdult()); //false

console.log(taro.age); //コンパイルエラー

// 安易なprotectedの使用はプログラムの複雑化・メンテナンス性の低下につながる。
class User2 {
  name: string;
  protected age: number;
  private _isAdult: boolean;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._isAdult = age >= 20;
  }
  public isAdult(): boolean {
    return this._isAdult;
  }
}
class PremiumUser2 extends User2 {
  public setAge(newAge: number) {
    this.age = newAge;
  }
}
const taro1 = new PremiumUser2("Taro", 26);
console.log(taro1.isAdult()); //true

taro1.setAge(10);
console.log(taro1.isAdult()); //true ageが書き換えられても_isAdultを計算し直さないから結果は変わらない。
