// 力試し_クラスに書き換えてみる
// ただのオブジェクトと関数で書かれたコードをクラスを使って書き直してみる
type User = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User {
  if (name === "") {
    throw new Error("名前は空にできません!");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: User, message: string): string {
  return `${user.name}(${user.age})「${message}」`;
}

const taro = createUser("Taro", 26);
console.log(getMessage(taro, "こんにちは"));

// ここから書いてみる---------------------------------------------------------------------------------------
class User1 {
  readonly #name: string;
  readonly #age: number;
  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません!");
    }
    this.#name = name;
    this.#age = age;
  }
  getMessage1(message: string): string {
    return `${this.#name}(${this.#age})「${message}」`;
  }
}
const jiro = new User1("Jiro", 26);
console.log(jiro.getMessage1("おはようございます"));
