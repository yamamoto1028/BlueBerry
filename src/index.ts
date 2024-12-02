// アロー関数における this
// アロー関数はthisを外側の関数から受け継ぐ
// アロー関数は自分自身のthisを持たない

class User {
  name: string;
  #age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  public isAdult() {
    return this.#age >= 20;
  }

  //User型の配列を受け取り、その中から自身より年上のUserインスタンスのみを抽出したUser型の配列を返すメソッド
  public filterOlder(users: readonly User[]): User[] {
    return users.filter((u) => u.#age > this.#age);
  }
}

const taro = new User("Taro", 26);
const john = new User("John Smith", 15);
const bob = new User("Bob Marly", 40);

const older = taro.filterOlder([john, bob]);
console.log(older); //[ User { name: 'Bob Marly' } ]
