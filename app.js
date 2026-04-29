const express = require("express");
const app = express();

app.use(express.json());

app.use("/payment", require("./routes/payment"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});