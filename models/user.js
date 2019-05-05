const mongoose = require("mongoose");
process.setMaxListeners(Infinity); //Might throw error if, didn't added
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});
mongoose.model("users", userSchema);
