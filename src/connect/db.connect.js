const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const connect = () => {
  return mongoose.connect(
    "mongodb+srv://alok:alok@cluster0.fmya8.mongodb.net/brikdb?retryWrites=true&w=majority"
  );
};
module.exports = connect;