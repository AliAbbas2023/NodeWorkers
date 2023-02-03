const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = 3000;

let counter = 0;

app.get("/", (req, res) => {
  counter++;
  res.send("Counter" + counter);
});

app.get("/heavy", (req, res) => {
  // setTimeout(() => {
  //     counter++;
  //     console.log('worker'+counter)
  //     res.send('Counter'+counter);
  // }, 5000);
  let worker = new Worker("./worker.js");
  worker.on("message", (data) => {
    console.log("data" + data);
    res.send("counter" + data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
