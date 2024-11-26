type HasName = {
  name: string;
};
type HasNameAndAge = {
  name: string;
  age: number;
};

const showName = (obj: HasName) => {
  console.log(obj.name);
};
const g: (obj: HasNameAndAge) => void = showName;
g({
  name: "Taro",
  age: 26,
});

//関数型の返り値の型は 共変 の位置にある、という
//関数型の引数の型は 反変 の位置にあるという
