const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { config } = require("./config");
const Routes = require("./src/routes/search.route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", Routes)

mongoose
  .connect(config.db_url)
  .then(() => {
    console.log("Conexion con db exitosa");
  })
  .catch((e) => console.log("Error con la db: ", e));

app.listen(config.port, () =>
  console.log("Servidor escuchando el puerto ", config.port)
);
