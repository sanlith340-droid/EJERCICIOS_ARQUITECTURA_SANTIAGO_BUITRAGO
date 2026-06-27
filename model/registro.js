const mongoose = require("mongoose");

const esquemaRegistro= new mongoose.Schema({
    plataforma: String,
	evento: String,
	cantidad:Number,
	costo:Number,
    fecha: {
        type: Date,
        default: Date.now,
      },
 
});


const Registro = mongoose.model("registros", esquemaRegistro);
module.exports.Registro= Registro;
module.exports.esquemaRegistro = esquemaRegistro;