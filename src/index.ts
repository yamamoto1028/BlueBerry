// thisを操作するメソッド
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

const taro = new User("Taro", 25);
const john = new User("John Smith", 15);

console.log(taro.isAdult()); //true

// applyメソッドは func.apply(obj, args) の形で呼び出すことで「関数funcを、中でのthisをobjにして呼び出す」という意味になる
// taro.isAdultを、johnをthisとして呼び出す
console.log(taro.isAdult.apply(john, [])); //false
