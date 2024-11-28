//クラスの宣言と使用
//同じプロパティやメソッドを持ったオブジェクトをいくつも作成したい場合に使う。
//クラスによって作成されたオブジェクトのことをインスタンスという。

//クラス宣言とnew構文
//クラス宣言の構文
class User {
  name: string = "";
  age: number = 0;
}

//new構文→インスタンス化
const taro = new User();
console.log(taro.name);
console.log(taro.age);

taro.age = 26;
console.log(taro.age);

//クラス宣言よりも前にnew構文は使えない
