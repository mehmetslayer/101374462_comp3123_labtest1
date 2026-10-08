// Question 2: Promises
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Promise made, you'd better keep your word"
      });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({
        error: "Promise rejected, you didn't keep your word"
      });
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

rejectedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });