//メソッドを宣言する
//クラス宣言の中にメソッドの宣言も書ける
//thisはそれぞれ作成されたインスタンスのことを指す。それぞれを独立して操作できる
class User {
  name: string = "";
  age: number = 0;
  isAdult(): boolean {
    return this.age >= 20;
  }
  setAge(newAge: number) {
    this.age = newAge;
  }
}
const taro = new User();
const baby = new User();
console.log(taro.isAdult()); //false

taro.setAge(26);
console.log(taro.age); //26
console.log(taro.isAdult()); //true
console.log(baby.isAdult()); //false
