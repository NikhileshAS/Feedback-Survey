const mongoose = require("mongoose");
process.setMaxListeners(Infinity); //Might throw error if, didn't added
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});
mongoose.model("users", userSchema);
