type Family<Parent, child> = {
  father: Parent;
  mother: Parent;
  child: child;
};
const obj: Family<number, string> = {
  father: 40,
  mother: 38,
  child: "2",
};
console.log(obj);
