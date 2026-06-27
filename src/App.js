
import React from 'react';
import Select from 'react-select'
import './App.css';

function formatoFecha(fecha) {
let date = new Date(fecha);
let day = `0${date.getDate()}`.slice(-2); //("0"+date.getDate()).slice(-2);
let month = `0${date.getMonth() + 1}`.slice(-2);
let year = date.getFullYear();  
return(`${day}-${month}-${year}`);
}

function Elemento(props) {
  const items = (
    <div >
       <div className='registro'>
         <div className='campoEvento resaltado'>Evento</div>
         <div className='campo resaltado'>Fecha</div>
         <div className='campo resaltado'>Cantidad</div>
         <div className='campo resaltado'>Costo</div>
        </div>
      {props.registros.map((registro) =>
        <div key={registro._id} className='registro'>
         <div className='campoEvento'>{registro.descripcion}</div>
         <div className='campo'>{formatoFecha(registro.fecha)}</div>
         <div className='campo'>{registro.cantidad}</div>
         <div className='campo'>{registro.costo}</div>
        </div>
      )}
    </div>
  );
 
  return (
    <div>
      {items}
    </div>
  );
}


class App extends React.Component {

    // Constructor 
    constructor(props) {
      super(props);
 
      this.state = {
        plataformas: [],
        eventos: [],
        registros: [],
        filtradas: [],
        itemFiltro: "",
   
      };
  }

componentDidMount() {
  let arreglo = []
 // let url = "http://localhost:3001/"
 let url = "https://pruebabvcback.herokuapp.com/"
  fetch(url + "api/plataformas")
      .then((res) => res.json())
      .then((json) => {
          json.map((item) => {
          let objeto =  { value: item.plataforma, label: item.descripcion }
          arreglo.push(objeto)
    
        })
           this.setState({
          plataformas: arreglo,
         
      });

      
         })

         fetch(url + "api/eventos")
         .then((res) => res.json())
         .then((json) => {
          this.setState({
            eventos: json,
           
        });
            })

            fetch(url + "api/registros")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                registros: json,
                
            });
           
               })
}


handleChange = value => {
    this.setState({
    itemFiltro: value.value,
  });
};

handleClick(valor, datos) {

let arreglo = datos.filter((item)=> {
  if (item.plataforma === valor) {
    return item
  }
})
 
this.setState({
  filtradas:arreglo,
 });

}



render() {
  const { plataformas, itemFiltro , registros, filtradas} = this.state;
  return (
  <div className = "App contenedorTodo">
      <h1>  Registro de Eventos Digitales </h1>  
    
      <div className="contenedor">   
         <p>Plataforma Digital</p>
         <div className="selector">  
            <Select options={plataformas}
            onChange={this.handleChange}
            />
          </div>   
          <button  className='boton'  onClick={() => { this.handleClick(itemFiltro, registros) }}>         
          Consultar
          </button>
     </div>
     
        <div className="datos">
            <Elemento registros={filtradas} />
        </div>

  </div>
  )
}
}

export default App;
