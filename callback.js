const addSum = (a, b, callback) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") return callback;
    callback(undefined, a + b);
  });
};

let callback = (error, sum) => {
  if (error) return console.log({ error });
  console.log({ sum });
};

addSum(10, "Dddd", callback);
