// newシグネチャによるインスタンス化可能性の表現
// クラスオブジェクトをnewで呼び出してインスタンスを作る型の記法
// new(引数リスト)=>インスタンスの型
class User {
  name: string = "";
  age: number = 0;
}
type MyUserConstructor = new () => User;

const MyUser: MyUserConstructor = User; //UserはMyUserConstructor型を持つ
const u = new MyUser(); //MyUserはnewで使用可能
console.log(u.name, u.age); //uはUser型をもつ

//newシグネチャというコールシグネチャの亜種
type MyUserConstructor1 = {
  new (): User;
  // newで呼び出せると同時に、それ自身もプロパティやメソッドを持つ
};
