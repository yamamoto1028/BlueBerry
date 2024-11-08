interface FooBarObj {
  foo: number;
  bar: string;
}

const obj: FooBarObj = {
  foo: 0,
  bar: "string",
};
console.log(obj); //今はあまり使われない。type文でOK。
