// const sum = (param1, param2, param3, param4, param5) =>{
//     return param1 + param2 + param3 + param4 + param5
// }

const sum = (param1, param2, ...parameters) => {
  let sum = 0;
  for (let index = 0; index < parameters.length; index++) {
    const element = parameters[index];
    sum += element;
  }

  return sum + param1 + param2;
};
const sumAnswer = sum(10, 20, 30, 40, 50);

console.log({ sumAnswer });
