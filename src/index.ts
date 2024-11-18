type obj = { foo?: number };
const obj1 = { foo: null };
const { foo = 123 } = obj1;
console.log(foo); //nullはそのままnullが代入される。

type objA = { foo1?: number };
const obj2: objA = {};
const { foo1 = 500 } = obj2; //デフォルト値の指定があることでfoo1はnumber型のみになる（undefined型が入る可能性が排除される）
