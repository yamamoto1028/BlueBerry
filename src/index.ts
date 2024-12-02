// instanceof演算子と型の絞り込み
// 与えられたオブジェクトがあるクラスのインスタンスかどうかを判断する演算子
class User {
  name: string = "";
  age: number = 0;
}
const taro = new User();
console.log(taro instanceof User); //taroはUserのインスタンスなのでtrue
console.log({} instanceof User); //{}はUserのインスタンスではないのでfalse

const john: User = {
  name: "John Smith",
  age: 15,
};
console.log(john instanceof User); //johnはUserのインスタンスではないのでfalse
// ------------------------------------------------------------------------------------------------------------
// この演算子の特徴は型の絞り込みをサポートしている点------------------------------------------------------------------
type HasAge = {
  age: number;
};
class User1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof User1) {
    if (customer.name === "Jiro") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
}
const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };
const jiro = new User1("Jiro", 26);

console.log(getPrice(customer1)); //1000
console.log(getPrice(customer2)); //1800
console.log(getPrice(jiro)); //0

// この書き方も可
// if(customer instanceof User1 && customer.name === "Jiro"){
//  return 0
// }

// TypeScriptではクラスを使わずにデータを表現することが多くあるので、instanceofのようなクラスに依存したロジックはあまり好ましくない
