onmessage = function (event) {
  let sum = 0;
  for (let i = 0; i <= event.data; i++) {
    sum += i;
  }
  postMessage(sum);
};
