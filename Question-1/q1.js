//Question 1: ES6 Features
const mixedArray = [
  'PIZZA',
  10,
  true,
  25,
  false,
  'Wings'
];


//lowercase police, returns a promise with only the lowercase strings
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject('Oh no invalid input, please provide an array.');
      return;
    }

    //filter the non-strings
    const result = mixedArray
      .filter((item) => {
        return typeof item === 'string';
      })
      //lowercase the remaining words
      .map((word) => {
        return word.toLowerCase();
      });

    resolve(result);
  });
};

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });