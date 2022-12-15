const mongoose = require("mongoose");

const Role = new mongoose.Schema({
  name: String,
});

export default mongoose.models?.Role || mongoose.model("Role", Role);
