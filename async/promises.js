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

  
/**
Exercise 1: Create a Simple Promise
Objective: Create and resolve a simple promise.

Write a function sayHello that returns a promise.
The promise should resolve with the message "Hello, World!" after 2 seconds.
Call the function and use .then() to log the message to the console.
 */