const mongoose = require("mongoose");

const Accounts = new mongoose.Schema({
  checking: {
    balance: Number,
    accountNumber: Number,
  },
  savings: {
    balance: Number,
    accountNumber: Number,
  },
});

export default mongoose.models?.Accounts ||
  mongoose.model("Accounts", Accounts);
