// (2)親の機能を上書き(オーバーライド)する

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
  //ここでisAdultを再宣言
  public isAdult(): boolean {
    return true;
  }
}
const john = new User("John Smith", 17);
const jiro = new PremiumUser("Jiro", 15);
console.log(john.isAdult()); //false
console.log(jiro.isAdult()); //true

class PremiumUserNG extends User {
  rank: number = 1;
  //ここでisAdultの返り値をstringにしちゃだめ。Userの部分型ということは守らなければいけない
  public isAdult(): string {
    return "おとなです";
  }
}

// コンストラクタもオーバーライドできる
class PremiumUser1 extends User {
  rank: number;
  constructor(name: string, age: number, rank: number) {
    super(name, age); //super呼び出しを含める必要がある（親クラスのコンストラクタを呼び出す）
    this.rank = rank;
  }
}
const taro = new PremiumUser1("Taro", 26, 3);
console.log(taro.name); //Taro
console.log(taro.rank); //3
