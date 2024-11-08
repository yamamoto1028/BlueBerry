type Animal = {
  age: number;
};
type Human = {
  age: number;
  name: string;
};

type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
  age: number;
};
type HumanFamily = {
  middleName: string;
  mother: Human;
  father: Human;
  child: Human;
  age: number;
  firstName: string;
};

const foo: HumanFamily = {
  middleName: "foo",
  mother: { age: 27, name: "Hanako" },
  father: { age: 30, name: "Taro" },
  child: { age: 4, name: "Kodomo" },
  age: 27,
  firstName: "Yamada",
};
console.log(
  `この家の父は${foo.firstName}・${foo.middleName}・${foo.father.name}です。\n${foo.father.age}歳です。`
);
