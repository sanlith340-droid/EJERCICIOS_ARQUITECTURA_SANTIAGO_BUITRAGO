const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const registro = require("./route/registro");




const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/",registro);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(" Ejecutando en puerto ", port));


mongoose

.connect("mongodb+srv://rbchus:Lady_1408@cluster0.p1ayocg.mongodb.net/bvc", {
    useNewUrlParser: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
    //useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion con mongo OK"))
  .catch((error) => console.log("Conexion con mongo OFF" + error));
