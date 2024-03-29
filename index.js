const express = require("express");
const cors = require("cors");
const session = require("express-session");

const userRoutes = require("./routes/user.routes");
const cirurgiasRoutes = require("./routes/cirurgias.routes");
const conveniosRoutes = require("./routes/convenios.routes");
const fornecedoresRoutes = require("./routes/fornecedores.routes");
const medicosRoutes = require("./routes/medicos.routes");
const pacientesRoutes = require("./routes/pacientes.routes");
const hospitaisRoutes = require("./routes/hospitais.routes");
const consultasRoutes = require("./routes/consultas.routes");
const acompCirurgicosRoutes = require("./routes/acompCirurgicos.routes");
const reembolsosRoutes = require("./routes/reembolsos.routes");
const reembolsoStatusRoutes = require("./routes/reembolsoStatus.route");

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
app.use("/api/v1/cirurgias", cirurgiasRoutes);
app.use("/api/v1/convenios", conveniosRoutes);
app.use("/api/v1/fornecedores", fornecedoresRoutes);
app.use("/api/v1/medicos", medicosRoutes);
app.use("/api/v1/pacientes", pacientesRoutes);
app.use("/api/v1/hospitais", hospitaisRoutes);
app.use("/api/v1/consultas", consultasRoutes);
app.use("/api/v1/acom-cirurgicos", acompCirurgicosRoutes);
app.use("/api/v1/reembolsos", reembolsosRoutes);
app.use("/api/v1/reembolso-status", reembolsoStatusRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
