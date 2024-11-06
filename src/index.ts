let i = 0;
while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    //iが奇数の場合、次のwhileループに移動する(logに出さない)
    continue;
  }
  console.log(i);
}
