const arr = [1, 2, 4, 8, 16, 32];

const [first, second, third] = arr;

console.log(first, second, third); //1,2,4が表示される

const obj = {
  arr: [2, 4, 6, 8],
  arr1: [1, 3, 5, 7, 9],
  obj1: {
    arr2: [1, 2, 3, 4],
    obj2: {
      name: "Taro",
      age: 26,
      from: "Hiroshima",
      live: true,
    },
  },
};
const {
  arr: [foo1, , foo3], //配列arrの0番目と2番目の要素を代入する。

  arr1: [foo, bar, baz],
  obj1: {
    arr2: [one, , three, four, five], //空白を用いて要素をスキップできる
    obj2: { name: taroName, age: taroAge, live: taroLives }, //いろいろネストできる
  },
} = obj;
console.log(foo, bar, baz); //1,3,5が表示
console.log("foo1は" + foo1, "foo3は" + foo3);

console.log(taroName, taroAge, taroLives);
console.log(one, three);

//タプル型もいける
const tuple: [string, number] = ["Taro", 30];
const [myName, age] = tuple;
console.log(myName, age);
