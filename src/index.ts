// もう１つのプライベートプロパティ
// #プロパティ名 という記載でprivateプロパティと同じ振る舞いをする

const User = class {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  public isAdult(): boolean {
    return this.#age >= 20;
  }
};

const taro = new User("Taro", 26);
console.log(taro.name); //Taro
console.log(taro.isAdult()); //true
console.log(taro.#age); //プライベート識別子のため、コンパイルエラー

//プライベート識別子はとりあえず # 使っとけばまちがいねえ！不都合あったらprivateを検討
