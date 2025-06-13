const task = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

task
  .then((result) => {
    console.log("Promise resolved with:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with:", error);
  });
