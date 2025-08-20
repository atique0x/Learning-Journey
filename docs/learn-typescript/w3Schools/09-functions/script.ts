function getTime(): string {
  return `${new Date().getTime()}`;
}
console.log(getTime());

const getDate = (): number => {
  return new Date().getDate();
};
console.log(getDate());

const getDay = (): void => {
  console.log(`Today is ${new Date().getDay()}`);
};
getDay();

const sum = (a: number, b: number, c: number): number => {
  return a + b + c;
};
console.log(sum(1, 3, 4));

const add = (a: number, b: number, c?: number) => {
  if (c !== undefined) {
    return a + b + c;
  } else {
    return a + b;
  }
};
console.log(add(5, 2, 1));
console.log(add(3, 2, 1));

const mul = (a: number = 1, b: number = 1, c?: number) => {
  return a * b * (c || 1);
};
console.log(mul(1, 2, 3));
console.log(mul(2, 5));

type Negate = (val: number) => number;

const negationFun: Negate = (num) => {
  return num * -1;
};
console.log(negationFun(5));

const sumAll = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((acc, cur) => acc + cur);
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));

function fetchData(): Promise<string> {
  const isActive = true;
  const promise: Promise<string> = new Promise((resolve, reject) => {
    if (isActive) {
      resolve("Data fetched");
    } else {
      reject("Error in fetching");
    }
  });
  return promise;
}

async function dataFetch(): Promise<void> {
  try {
    const res: string = await fetchData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
dataFetch();
