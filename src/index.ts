// 3種類のアクセシビリティ修飾子
// クラス宣言内のプロパティ宣言・メソッド宣言には アクセシビリティ修飾子 を付加できる
// public・protected・private

// publicは何も書かないのと同じ
// privateはそのクラスの中からだけアクセスできる
// protectedは private ＋ そのクラスを継承した子クラス からもアクセスできる
//  →実装例はクラスの継承で！

class User {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
}
const taro = new User("Taro", 26);
console.log(taro.name); //Taro
console.log(taro.isAdult()); //true
console.log(taro.age); //コンパイルエラー プライベートのプロパティのためクラスの外からはアクセスできない
