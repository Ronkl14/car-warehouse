// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database")
const db = require("./models")
const carRoutes = require("./routes/carRoutes")

dotenv.config({ path: "../.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/cars', carRoutes);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database successful!");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });


app.get("/", (req, res) => {
  res.send("Hello, your server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
