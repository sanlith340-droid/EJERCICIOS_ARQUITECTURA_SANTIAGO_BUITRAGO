const express = require("express");
const router = express.Router();

const { Registro } = require("../model/registro");
const { Plataforma } = require("../model/plataforma");
const { Evento } = require("../model/evento");

router.post("/registros", async (req, res) => {

  const valor = await Evento.aggregate(
    [
      {
        $match: { evento: req.body.evento
      }
      },
      {
        $project:{  
          valor:'$valor', 
        }
      }
    ]
  )
 let costo = req.body.cantidad * valor[0].valor


  registro = new Registro({
    plataforma: req.body.plataforma,
    evento: req.body.evento,
    cantidad: req.body.cantidad,
    costo: costo,
 });

  const result = await registro.save();
  res.status(200).send(result);
});

//listar
router.get("/registros", async (req, res) => {
      // const registro = await Registro.find();
      const registro = await Registro.aggregate(
        [
          {
            $lookup: { 
              from:'eventos',
              localField:'evento',
              foreignField:'evento',
              as:'consulta'
            }
          },
          {
            $unwind:'$consulta' 
          },
      
          {
            $project:{  
              plataforma:'$plataforma', 
              evento:'$evento', 
              cantidad:'$cantidad', 
              costo:'$costo', 
              fecha:'$fecha', 
              descripcion:'$consulta.descripcion' , 
              valor:'$consulta.valor'
            }
          }
      
        ]
      )
  res.send(registro);
});

router.get("/plataformas", async (req, res) => {
  const plataforma = await Plataforma.find();
res.send(plataforma);
});

router.get("/eventos", async (req, res) => {
  const evento = await Evento.find();
res.send(evento);
});


module.exports = router;