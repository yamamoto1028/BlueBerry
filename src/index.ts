// コンストラクタ引数でのプロパティ宣言

// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// 上記はアクセシビリティ修飾子を使うことで簡単に書ける
class User {
  constructor(public name: string, private age: number) {
    // this.name = name; こいつらは引数の中で自動的にやっているから不要
    // this.age = age;
  }
  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const u = new User("Taro", 2);
console.log(u.name, u.isAdult());
