const arr = [1, 10, 100];
const num: number = arr[100]; //arr[100];→インデックスアクセス極力使用しない
console.log(num); //number型の変数numにundefinedが代入されているという矛盾が発生。
