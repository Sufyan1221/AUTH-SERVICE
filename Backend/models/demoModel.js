const { mongoose } = require("../../config/dbConnection");

let demoSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

let demo = mongoose.model("UserAuth", demoSchema);

export default demo
