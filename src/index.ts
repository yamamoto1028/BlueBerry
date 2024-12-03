// 力試し_クラスを関数に置き換えてみる
function createUser(name: string, age: number) {
  return (message: string) => {
    return `${name}(${age})「${message}」`;
  };
}
const getMessage = createUser("Taro", 26);
console.log(getMessage("やっほー"));
