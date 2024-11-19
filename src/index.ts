type NestedObj = {
  obj?: {
    foo: number;
  };
};

const nested1: NestedObj = {
  obj: { foo: 123 },
};

const nested2: NestedObj = {};

const { obj: { foo: foo1 } = { foo: 500 } } = nested1; //デフォルト値を指定しないと「undefined」が入る余地がある為エラーとなる。
console.log(foo1);

const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
console.log(foo2);
