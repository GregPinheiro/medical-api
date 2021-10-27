const express = require("express");
const cors = require("cors");
const session = require("express-session");

const userRoutes = require("./routes/user.routes");

const app = express();

require("dotenv").config();

app.use(
  session({
    secret: process.env.SECRET_WORD,
    resave: true,
    saveUninitialized: true,
  })
);

const connect = async () => {
  const models = require("./models");
  try {
    await models.sequelize.authenticate();
    console.log("Connetion has been established sucessfully");
  } catch (error) {
    console.log("Unable to connect to the database. Error: ", error);
  }
};
connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
