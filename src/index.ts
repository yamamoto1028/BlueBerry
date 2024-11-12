type Human = {
  name: string;
  age: number;
  flg: boolean;
};
type Animal = {
  name: string;
  age: number;
  flg: boolean;
  kind: string;
};

type Family<Parent = Human, Child = Human> = {
  father: Parent;
  mother: Parent;
  child: Child;
};

type S = Family<Human, Animal>; //通常の使い方
type T = Family; //TはFamily<Human, Human>と同じ
type U = Family<string>; //Uはfamily<string, Human>と同じ

const familyS: S = {
  father: { name: "ちち", age: 40, flg: true },
  mother: { name: "はは", age: 38, flg: true },
  child: { name: "いぬ", age: 5, flg: false, kind: "Dog" },
};

const familyT: T = {
  father: { name: "ちち", age: 40, flg: true },
  mother: { name: "はは", age: 38, flg: true },
  child: { name: "いぬ", age: 5, flg: false },
};

const familyU: U = {
  father: "ちち",
  mother: "はは",
  child: { name: "いぬ", age: 5, flg: false },
};

console.log(familyS, familyT, familyU);
