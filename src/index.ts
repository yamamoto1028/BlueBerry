//静的プロパティ・静的メソッド→クラスそのものに属するプロパティ・メソッド
//クラス宣言には静的プロパティ・静的メソッドのせんげんを含むことができる
//宣言の前にstaticと付けることで宣言できる

class User {
  static adminName: string = "Taro"; //Userクラス(オブジェクト)だけのプロパティ
  static getAdminUser() {
    return new User(User.adminName, 26);
  } //Userクラス(オブジェクト)だけのメソッド
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isAdult(): boolean {
    return this.age >= 20;
  }
}
console.log(User.adminName); //"Taro" →→→→→ Userオブジェクト（クラス）へのプロパティアクセスはできる
const admin = User.getAdminUser();
console.log(admin.age); //26
console.log(admin.isAdult()); //true

const taro = new User("Taro", 26);
console.log(taro.adminName); //コンパイルエラー →→→→→ adminNameはUserクラスのプロパティで、インスタンス(taro)のプロパティではないためアクセスできない
