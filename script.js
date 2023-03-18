window.promises = [];


for (let i = 0; i < 5; i++) {
  promises.push(new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} seconds.`);
    }, randomTime * 1000);
  }));
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;

    // Check the result of the resolved promise
    const promiseIndex = promises.findIndex((promise) => promise[Symbol.for('PromiseState')] === 'fulfilled');
    console.log(`Promise ${promiseIndex + 1} was the first to resolve with the result: ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });

// Do not change the code above this
// add your promises to the array `promises`
