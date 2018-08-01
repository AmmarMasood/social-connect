const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true } //this is here to remove the warning error
  )
  .then(() => console.log("Connected to Mongodb"))
  .catch(err => console.log(err));

require("./routes/api/auth")(app);
require("./routes/api/posts")(app);
require("./routes/api/profile")(app);

app.get("/", (req, res) => {
  res.send("hellooo!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port is running on ${port}`));
