//コールバック関数について…引数として渡される関数のこと
type User = {
  name: string;
  age: number;
};

//コールバック関数-------------------------------------------------------------------------------
const getName = (u: User): string => {
  //(u)に配列の各要素が順番に入る
  console.log("u is", u);
  return u.name; //各要素のnameプロパティの値を返す
};
const getAge = (u: User): number => {
  return u.age;
};

//Userの配列オブジェクト-------------------------------------------------------------------------
const users: User[] = [
  { name: "Taro", age: 26 },
  { name: "John Smith", age: 15 },
];

//usersの各要素ひとつずつにgetName関数を実行-------------------------------------------------------
const names = users.map(getName); //コールバック関数
console.log(names);
//変数getNameを経由しない書き方↓
const names1 = users.map((u: User): string => u.name);
console.log(names1);

const ages = users.map(getAge); //コールバック関数
console.log(ages);
//変数getAgeを経由しない書き方↓
const ages1 = users.map((u: User): number => u.age);
console.log(ages1);

//そのほかの配列が持つコールバックを生かしたメソッド---------------------------------------------------
//20歳以上のユーザーだけの配列
const adultUsers = users.filter((u: User) => u.age >= 20);
//全てのユーザーが20以上ならTRUE
const allAdult = users.every((u: User) => u.age >= 20);
//60歳以上のユーザーが1人でもいればTRUE
const seniorExists = users.some((u: User) => u.age >= 60);
//名前がJohnで始まるユーザーを探して返す
const john = users.find((u: User) => u.name.startsWith("John"));

console.log(adultUsers);
console.log(allAdult);
console.log(seniorExists);
console.log(john);
