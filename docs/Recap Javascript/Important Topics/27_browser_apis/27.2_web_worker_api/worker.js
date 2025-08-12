self.onmessage = function (e) {
  console.log(e.data);
  const newData = "Data from worker";
  self.postMessage(newData);
};
