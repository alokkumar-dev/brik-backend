const express = require("express");
const Connect = require("./connect/db.connect");
const app = express();
const PostController = require("./controller/post.controller");
const cors = require('cors')
const port = process.env.PORT || 8080;
const {login,  register} = require('./controller/auth.controller');


app.use(cors());
app.use(express.json());
app.use("/post", PostController); 
app.post("/login", login); 
app.post("/register", register); 


app.listen(port, async () => {
  try {
    await Connect();
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
