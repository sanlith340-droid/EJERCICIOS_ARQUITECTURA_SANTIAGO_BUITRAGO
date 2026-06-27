# EJERCICIOS_ARQUITECTURA_SANTIAGO_BUITRAGO

CHALLENGE DESARROLLO BVC
Solución
Para almacenar la información se creó un base de datos Mongo Atlas (nube) Se plantearon 3 colecciones o tablas para almacenar la información:
Plataformas: con los campos; el identificado, la sigla <descripción> detalle de la plataforma

Eventos: con los campos; id del evento
<descripción> descripción del evento valor del evento

Registros: con los campos; el id de la plataforma id del evento cantidad de eventos costo de los eventos según la cantidad y valor fecha de registro del evento

BackEnd: El back se desarrollo en node js, consiste un servicio con 4 endPoint´s .
El primer endPoint url/api/plataformas : GET nos lista las 5 plataformas y podemos usarla para alimentar en forma dinámica el selector para escoger la plataforma.

El segundo endPonit url/api/eventos : GET nos lista los diferentes eventos, con ella podemos, a la hora de insertar el registro calcular el total o mostrar la descripción a la hora de listar.

El tercer endPonit url/api/registros GET nos lista todos los registro de los eventos digitales, con un “JOIN” a eventos nos muestra también la descripción y valor por evento a mostrar.

El cuarto endPonit url/api/registros POST con el podemos agregar o registrar un evento usando una firma del endPonit con el json:

{

      "plataforma": "PLATGI",
      "evento": "F005",
      "cantidad": "10"
}

Los campos lo agrega desde el back a la hora del registro y el campo lo calcula con base a un “JOIN” entre las colecciones y por medio del campo

FrontEnd : El front se desarrolló en react js, lista los registros filtrando por plataforma y usando un selector, Se consumen los diferentes endPoint’s, con el servicio de plataformas se “alimenta” el arreglo < plataformas: []> que usa el componente para listar las plataformas. Y el servicio de registros alimenta el arreglo <registros: []> con todos los registros;
Una vez el usuario escoge una plataforma con el “idPlataforma” lo asignamos a estado “itemFiltro”, y al hacer click sobre el botón se hace un filtro al arreglo registros basado en “itemFiltro”, y crea un arreglo <filtradas: []> este último arreglo se le asigna a componente que pinta los datos según el requerimiento.

NOTA: los servicios están funciones en Heroku

url: https://pruebabvcback.herokuapp.com GET https://pruebabvcback.herokuapp.com/api/registros https://pruebabvcback.herokuapp.com/api/eventos https://pruebabvcback.herokuapp.com/api/plataformas

POST https://pruebabvcback.herokuapp.com/api/registros { "plataforma": "PLATGI", "evento": "F005", "cantidad": "10" } //------------------------------------------------------------------------------

Available Scripts
In the project directory, you can run:

npm start