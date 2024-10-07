const sum = (param1, param2) => {
  return new Promise((resolve, reject) => {
    const answer = param1 + param2;
    resolve(answer);
  });
};

sum(2, 3).then((resolvedValue) => {
  // console.log(resolvedValue);
});

// isEvenNumber(8)

function isEvenNumber(param1) {
  return new Promise((resolve, reject) => {
    let answer;
    if (param1 % 2 === 0) {
      answer = "even";
      resolve(answer);
    } else {
      answer = "odd";
      reject(answer);
    }
  });
}

isEvenNumber(31)
  .then((result) => {
    console.log(result);
  })
  .catch((rejectedAnswer) => {
    console.error(rejectedAnswer);
  });
