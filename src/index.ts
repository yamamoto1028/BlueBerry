//コンストラクタ
//newによりインスタンスが作成される際に呼び出される
//おもな用途はインスタンスのプロパティを初期化すること。ほかの応用も可能。
//クラス宣言の中にconstructorというメソッド宣言で書く
class User {
  name: string; //constructorを書く場合はここでの初期値は不要
  age: number; //new構文によるインスタンス生成時に引数で値を指定しなければならなくなる

  constructor(name1: string, age1: number) {
    this.name = name1;
    this.age = age1;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}
const taro = new User("Taro", 26);
console.log(taro.name); //Taro
console.log(taro.age); //26

//プロパティ名：のところに初期値を与えないなら、constructorで確実に初期値を与えなければいけない
//if文等で特定の場合しか初期値が代入されないロジックや複雑すぎるものをTypeScriptが理解できない
//（例）----------------------------------------------------------------------------------------
class User1 {
  name: string;
  age: number; //constructor内で初期値を代入していないためコンパイルエラー

  constructor(name1: string) {
    this.name = name1;
  }
}

//初期化よりも前にthisを使用するとコンパイルエラー
//(例)-----------------------------------------------------------------------------------------
class User2 {
  name: string;
  age: number;

  constructor(name1: string, age1: number) {
    console.log(this.age); //コンパイルエラー
    this.name = name1; //初期化
    this.age = age1; //初期化
    console.log(this.age); //OK
  }
}

//コンストラクタ内であれば読み取り専用プロパティにも代入できる
//読み取り専用プロパティは一回オブジェクト作ったらもう変更はできないよっていうもの
//コンストラクタはオブジェクトを作っている最中の操作なので代入できる。あくまでも初期値を代入している認識。
//(例)-----------------------------------------------------------------------------------------
class User3 {
  name: string;
  readonly age: number;

  constructor(name1: string, age1: number) {
    this.name = name1;
    this.age = age1; //これはOK
  }
  setAge(newAge: number) {
    this.age = newAge; //これはできない
  }
}
