const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo"));
console.log(map.get("bar")); //undefined

const set: Set<string> = new Set();
set.add("bar");
console.log(set);
