const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log(`Database connected to ${data.connection.host}`);
  });
