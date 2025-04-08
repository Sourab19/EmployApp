const express = require("express");
const app = new express();
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());

require("dotenv").config();
require("./db/connection");

// deployment
const path = require("path");
app.use(express.static(path.join(__dirname, "/build")));

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname ,'/build/index.html'));
})

const basicRoute1 = require("./routes/empRoutes");
app.use("/emp", basicRoute1);
const basicRoute2 = require("./routes/adminRoutes");
app.use("/admin", basicRoute2);
const basicRoute3 = require("./routes/userRoutes");
app.use("/user", basicRoute3);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
