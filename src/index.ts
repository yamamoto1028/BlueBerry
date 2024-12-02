// override修飾子とその威力
// override修飾子はあくまでもオーバーライドを明示・宣言するためのものであり、間違っていたらコンパイルエラーを出してもらうためのもの
// noImplicitOverrideコンパイラオプションを有効化するとオーバーライドするものにはoverride修飾子が必須になる(tsconfig.jsonで設定)
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
  override rank: number = 1; //オーバーライドじゃないものにつけるとコンパイルエラー
  //オーバーライド↓
  public override isAdult(): boolean {
    return true;
  }
}
