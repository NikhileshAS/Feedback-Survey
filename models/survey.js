const mongoose = require("mongoose");

const RecipientSchema = require("./recipient");

process.setMaxListeners(Infinity); //Might throw error if, didn't added
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponse: Date
});
mongoose.model("surveys", surveySchema);
