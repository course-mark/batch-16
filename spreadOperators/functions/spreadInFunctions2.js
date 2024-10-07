const sum = (...parameters) => {
  let sum = 0;
  for (let index = 0; index < parameters.length; index++) {
    const element = parameters[index];
    sum += element;
  }

  return sum;
};
const sumAnswer = sum(10, 20, 30, 40, 50);

console.log({ sumAnswer });
