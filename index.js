const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("./config/db");
require("dotenv").config();
const app = express();
const userrouter = require("./routes/user.route");
const productrouter = require("./routes/product.route");
const auth = require("./Middleware/auth.middleware");

app.use(cors({ origin: "*" }));

app.use(express.json());

// user Autherization
app.use("/user", userrouter);

// Authentication
app.use(auth);
// protected route Just for Example
app.use("/product", productrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
