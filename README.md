CHALLENGE DESARROLLO BVC
---------------------------
Solución 
---------------------------

1.	Para almacenar la información se creó un base de datos Mongo Atlas (nube) Se plantearon 3 colecciones o tablas para almacenar la información:

-	Plataformas: con los campos;
<plataforma>  el identificado, la sigla 
<descripción> detalle de la plataforma 

-	Eventos: con los campos; 
<evento>  id del evento  
<descripción>  descripción del evento
<valor>  valor del  evento

-	Registros:  con los campos; 
<plataforma>  el id de  la plataforma 
<evento>  id del evento 
<cantidad>  cantidad de eventos
<costos>  costo de los eventos según la cantidad y valor
<fecha>  fecha de registro del evento

2.	BackEnd:
El back se desarrollo en node js, consiste un servicio con 4 endPoint´s .

-	El primer endPoint  url/api/plataformas : GET  nos lista las 5 plataformas y podemos usarla para alimentar en forma dinámica el selector para escoger la plataforma.

-	El segundo endPonit url/api/eventos :  GET nos lista los diferentes eventos, con ella podemos, a la hora de insertar el registro calcular el total o mostrar la descripción a la hora de listar.

-	El tercer endPonit url/api/registros GET nos lista todos los registro de los eventos digitales, con un “JOIN” a eventos nos muestra también la descripción  y valor  por evento a mostrar.
 
-	El cuarto  endPonit url/api/registros POST con el podemos agregar o registrar un evento usando una firma del endPonit con el json:
-	 {
-	        "plataforma": "PLATGI",
-	        "evento": "F005",
-	        "cantidad": "10"
-	 }

Los campos <fecha> lo agrega desde el back a la hora del registro y el campo <costos> lo calcula con base a un “JOIN” entre las colecciones <registros> y <eventos> por medio del campo <evento> 
	

3.	FrontEnd :
El front se desarrolló  en react js, lista los registros filtrando por plataforma y usando un selector, Se consumen los diferentes endPoint’s, con el servicio de plataformas se “alimenta” el arreglo < plataformas: []> que usa el componente  <selector>  para listar las plataformas. Y el servicio de registros alimenta el arreglo <registros: []> con todos los registros; 
 
Una vez el usuario escoge una plataforma con el “idPlataforma” lo asignamos a estado “itemFiltro”, y al hacer click sobre   el botón <consultar> se hace un filtro al arreglo registros basado en  “itemFiltro”,  y crea un arreglo <filtradas: []> este último arreglo se le asigna a componente <Elemento> que pinta los datos según el requerimiento.    


NOTA: los servicios están funciones en Heroku

url:   https://pruebabvcback.herokuapp.com
GET
https://pruebabvcback.herokuapp.com/api/registros
https://pruebabvcback.herokuapp.com/api/eventos
https://pruebabvcback.herokuapp.com/api/plataformas

POST
https://pruebabvcback.herokuapp.com/api/registros
 {
        "plataforma": "PLATGI",
        "evento": "F005",
        "cantidad": "10"
        }


//------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.