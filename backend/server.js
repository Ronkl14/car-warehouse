const express = require("express");
const dotenv = require("dotenv");
const db = require("./models")
const carRoutes = require("./routes/carRoutes");
const AccidentHistoryRoutes = require("./routes/accidentHistoryRoutes")
dotenv.config({ path: "../.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/cars', carRoutes);
app.use('/api/accidents', AccidentHistoryRoutes)

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database successful!");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
