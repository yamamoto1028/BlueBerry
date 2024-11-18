type obj = { foo?: number };
const obj1: obj = {};
const obj2: obj = { foo: -1234 };

const { foo = 500 } = obj1; //obj1のfooを変数fooに代入。undefinedの場合は500を代入。
console.log(foo); //500が出力
console.log(obj1.foo); //undefined

const { foo: bar = 500 } = obj2;
console.log(bar); //-1234が出力
