let input = 8;

for (let i = 0; i < input; i++) {
  let b = "";
  for (let j = 0; j < input; j++) {
    if (j <= i) {
      b += "*";
    } else {
      b += "#";
    }
  }
  console.log(b);
}
