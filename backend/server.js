const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const db = require("./models")
const carRoutes = require("./routes/carRoutes");
const AccidentHistoryRoutes = require("./routes/accidentHistoryRoutes")
const modelRoutes = require("./routes/modelRoutes")
const featureRoutes = require("./routes/featureRoutes")
dotenv.config({ path: "../.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use('/api/cars', carRoutes);
app.use('/api/accidents', AccidentHistoryRoutes)
app.use('/api/models', modelRoutes)
app.use('/api/features', featureRoutes)

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
