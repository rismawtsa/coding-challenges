function fib1() {
  let n = 10;
  const arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
}

function fib2(n) {
  let a = 0,
    b = 1;
  temp = 1;
  for (let i = 0; i <= n; i++) {
    console.log(temp);
    temp = a + b;
    a = b;
    b = temp;
  }
}

function fib3(n) {
  let arr = [];
  let n0 = 0;
  let n1 = 1;
  let nextNumber = 0; // to contain the sum of n0 + n1

  for (let index = 0; index <= n; index++) {
    nextNumber = n0 + n1;
    arr.push(n1);
    n0 = n1;
    n1 = nextNumber;
  }

  return arr;
}

console.log(fib3(5));
