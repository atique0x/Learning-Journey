const numbers: number[] = [10, 20, 30];

const [first, second, third] = numbers;
const [a, , d] = numbers;
const [, , c] = numbers;
const [m, , n, o, p = 10] = numbers;

interface Params {
  a?: string;
  b?: number;
  c?: boolean;
  d?: string;
  e?: number;
  f?: boolean;
}

function myFun({ a, b, c, d, e, f }: Params) {
  console.log(a, b, c, d, e, f);
}

myFun({ a: "Atique", c: true, e: 99 });
