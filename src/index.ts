type Animal = {
  name: string;
};

type Family<Parent = Animal, Child = Animal> = {
  father: Parent;
  mother: Parent;
  child: Child;
};

type S = Family<string, string>; //通常の使い方
type T = Family; //TはFamily<Animal, Animal>と同じ
type U = Family<string>; //Uはfamily<string, Animal>と同じ
