const express = require("express");

const port = 3000;

const app = express();

app.get("/", (request, response) => {
  response.send("It works!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
