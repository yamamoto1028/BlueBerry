//オプショナルな引数…渡しても渡さなくてもいい引数

//デフォルト値を指定しない場合↓------------------------------------------------------------------------------
const toLowerOrUpper = (str: string, upper?: boolean): string => {
  //upper?はオプショナルな引数(呼び出し時にあってもなくてもいい)
  if (upper) {
    //upperがTRUEかFALSEかで分岐
    return str.toUpperCase(); //toUpperCase()は文字列型がもつメソッド(文字列を全て大文字にした文字列を返す)
  } else {
    return str.toLowerCase(); //toLowerCase()は文字列型がもつメソッド(文字列を全て小文字にした文字列を返す)
  }
};
console.log(toLowerOrUpper("Hello")); //呼び出し時に第２引数のupperがないけどOK。hello
console.log(toLowerOrUpper("Hello", false)); //hello
console.log(toLowerOrUpper("Hello", true)); //HELLO

//デフォルト値を指定する場合↓--------------------------------------------------------------------------------
const toLowerOrUpper1 = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper1("Hello")); //引数が渡されなかった場合に初期値が評価される。hello
console.log(toLowerOrUpper1("Hello", false)); //hello
console.log(toLowerOrUpper1("Hello", true)); //HELLO
