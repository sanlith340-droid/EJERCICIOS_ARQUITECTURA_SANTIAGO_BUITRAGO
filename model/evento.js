const mongoose = require("mongoose");

const esquemaEvento= new mongoose.Schema({
    evento: String,
	descripcion: String, 
    valor: Number
});

const Evento = mongoose.model("eventos", esquemaEvento);
module.exports.Evento= Evento;
module.exports.esquemaEvento = esquemaEvento;