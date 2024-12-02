// implementsキーワードによるクラスの型チェック
// クラスを作成する際はimplementsキーワードによる追加の型チェックを利用可能
// class クラス名 implements 型 {…}
// そのクラスのインスタンスは与えられた型の部分型であるという宣言

type HasName = {
  name: string;
};
// User型はHasNameの部分型であるという宣言
class User implements HasName {
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

// nameプロパティを消すとコンパイルエラー 部分型じゃなくなるから
class User1 implements HasName {
  #age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
