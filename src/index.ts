const nested = {
  num: 123,
  obj: {
    foo: "hello",
    bar: "world",
    mono: {
      empitsu: "Good",
      keshigomiu: "night", //いくつでもネストできる
    },
  },
};
const {
  num,
  obj: { bar: aa },
  obj: { foo },
  obj: {
    mono: { empitsu: monosashi },
  },
  obj: {
    mono: { keshigomiu: hasami },
  },
} = nested;
console.log(num);
console.log(foo);
console.log(aa);

console.log(monosashi);
console.log(hasami);
