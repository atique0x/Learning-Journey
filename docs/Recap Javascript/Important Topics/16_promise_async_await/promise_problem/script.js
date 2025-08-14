function createNumber1() {
  return new Promise((resolve) => {
    const num1 = 5;
    setTimeout(() => {
      resolve(num1);
    }, 2000);
  });
}

function createNumber2() {
  return new Promise((resolve) => {
    const num2 = 6;
    setTimeout(() => {
      resolve(num2);
    }, 4000);
  });
}

function calculateSum(num1, num2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 1000);
  });
}

async function calculate() {
  const [num1, num2] = await Promise.all([createNumber1(), createNumber2()]);
  console.log(num1, num2);
  const sum = await calculateSum(num1, num2);
  console.log(sum);
}
calculate();
