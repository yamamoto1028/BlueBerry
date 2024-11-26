//引数の数による部分型の関係
//ある関数型Fの引数リストの末尾に新たな引数を追加して関数型Gを作った場合、FはGの部分型となる

type UnaryFunc = (arg: number) => number; //F
type BinaryFunc = (left: number, right: number) => number; //G

const double: UnaryFunc = (arg) => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

const bin: BinaryFunc = double;
console.log(bin(10, 100)); //100は渡すことはできるが無視される
