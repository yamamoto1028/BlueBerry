type Hasname = {
  name: string;
};

type Family<Parent extends Hasname, Child extends Parent> = {
  //ParentはHasnameの型定義を全て持ってないといけない、ChildはParentの型定義を全て持ってないといけない
  father: Parent;
  mother: Parent;
  child: Child;
};
type Animal = {
  name: string;
};
type Human = {
  name: string;
  age: number;
};

type S = Family<Animal, Human>; //HumanはAnimalの型定義を全て持ってないといけない
type T = Family<Human, Animal>; //AnimalはHumanの型定義を全て持ってないといけない→持ってないのでコンパイルエラー
