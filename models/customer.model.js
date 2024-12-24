const { default: mongoose } = require("mongoose");
const randomToken = require('../helper/randomToken')
const customerSchema = new mongoose.Schema({
  fullName: String, //san pham 1
  password: String,
  token: {
    type: String,
    default: randomToken.generateRandomString(20)
  },
  phone: String, 
  status: {
    type:String,
    default: "active"
  },
  deleted: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  }
)

const Customer = mongoose.model("Customer", customerSchema, "customer"); //ten model, ten schema, ten db
module.exports = Customer;