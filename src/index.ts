// 型引数を持つクラス

class User<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

// new クラス名 <型引数リスト>(引数リスト)
const taro = new User<string>("Taro", 26, "追加データ"); //taroはUser<string>型
const data = taro.data; //dataはstring型

const john = new User("John", 15, { num: 123 }); //johnはUser<{num:number}>型
const data2 = john.data; //data2は{ num: 123 }型
