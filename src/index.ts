//プロパティを宣言する
//プロパティ名:型=式(初期値);
//

class User {
  //プロパティ名:型=式(初期値);
  name: string = "";
  age: number = 0;
}

const taro = new User();
console.log(taro.name); //""が表示
console.log(taro.age); //0が表示

//オプショナルなプロパティの例--------------------------------------------------------
class User1 {
  name?: string; //初期値を省略できる
  age: number = 0;
}
const jiro = new User1();
console.log(jiro.name); //undefinedが出力
jiro.name = "Jiro";
console.log(jiro.name);
//--------------------------------------------------------------------------------

//読み取り専用プロパティの例----------------------------------------------------------
class User2 {
  readonly name: string = "Saburo";
  age: number = 0;
}
const saburo = new User2();
console.log(saburo.name);
saburo.name = "Hanako"; //読み取り専用には代入できないためコンパイルエラー

//--------------------------------------------------------------------------------
