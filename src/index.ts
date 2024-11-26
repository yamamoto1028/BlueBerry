type HasName = {
  name: string;
};
type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age,
});
const f: (age: number) => HasName = fromAge; //HasNameAndAge型のfromAgeをHasName型のfに代入できている（部分型：fromAgeはfの部分型）
const obj: HasName = f(100);
console.log(obj);

//void型はどんな値を返す関数でも部分型として使える。
const g = (name: string) => {
  name;
};
const h: (name: string) => void = g;
