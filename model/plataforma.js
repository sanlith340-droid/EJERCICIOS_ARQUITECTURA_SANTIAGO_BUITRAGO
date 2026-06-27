const mongoose = require("mongoose");

const esquemaPlataforma= new mongoose.Schema({
    plataforma: String,
	descripcion: String
});


const Plataforma = mongoose.model("plataformas", esquemaPlataforma);
module.exports.Plataforma= Plataforma;
module.exports.esquemaPlataforma = esquemaPlataforma;