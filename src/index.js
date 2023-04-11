const express = require("express");
const Connect = require("./connect/db.connect");
const app = express();
const PostController = require("./controller/post.controller");

app.use(express.json());
app.use("/post", PostController); 


app.listen(8080, async () => {
  try {
    await Connect();
    console.log("listening on port 8080");
  } catch (error) {
    console.log(error.message);
  }
});
