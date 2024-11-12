const arr = [1, 10, 100];
arr.push(1000); //配列の末尾に要素を追加する
console.log(arr);
arr.unshift(0); //配列の先頭に要素を追加する
console.log(arr);

const readArr: readonly number[] = [1, 10, 100, 200];
readArr.push(2222); //読み取り専用配列だとコンパイルエラーになる
console.log("includes", readArr.includes(100)); //引数の値が配列に含まれているか判定し真偽値で返す
console.log("includes", readArr.includes(50));
console.log("includes", readArr.includes("100")); //number型の配列にstring型の引数を与えるとコンパイルエラーになる
console.log("indexOf", readArr.indexOf(100)); //引数の値が何番目にあるか返す（無ければ-1を返す）
console.log("indexOf", readArr.indexOf(2)); //引数の値が何番目にあるか返す（無ければ-1を返す）
console.log("length", readArr.length); //配列の要素数が入っているプロパティ
