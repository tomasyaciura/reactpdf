import React from 'react';
import Pdf from "react-to-pdf";
import './app.css'


const options = {
  orientation: 'portrait',
  format: 'a4'
}
const ref = React.createRef();

const PDF = (props) => {

  console.log(ref)

  return (

    <>
      <div className="Post" ref={ref}>

        <div class="justify-content-center"  >
          <h3>RECORRIDO DE SEGURIDAD E HIGIENE</h3>
          <h9 style={{ visibility: 'hidden' }}>a</h9>
          <div class="container"  >

            <div class="row " >
              <div>
                <div class=" ml-5 mr-5 row border border-dark rounded">
                  <div class="col-sm-6 ">
                    <div class="col-md text-align-start" >
                      <h7 class="text-break text-align-start">Fecha: {props.fecha}</h7>
                    </div>
                  </div>

                  <div class="col-sm-6 ">
                    <div class="col-md text-align-start">
                      <h7 class="text-break text-align-start">E-mail: {props.email}</h7>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="col-md text-align-start">
                      <h7 class="text-break text-align-start">Cliente: {props.cliente}</h7>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="col-md text-align-start">
                      <h7 class="text-break text-align-start">Direccion: {props.direccion}</h7>
                    </div>
                  </div>

                  <div class="col-sm-7">
                    <div class="col-md-auto text-align-start">
                      <h7 class="text-break  text-align-start">Representante: {props.re}</h7>
                    </div>
                  </div>
                </div>

                <h9 style={{ visibility: 'hidden' }}>a</h9>

                <div class=" ml-5 mr-5 row border border-dark rounded">
                  <div class="col-sm-auto">
                    <div class="col-md-auto" >
                      <h7 class="text-break text-align-start">Datos Adicionales: {props.da}</h7>
                    </div>
                  </div>
                </div>



                <h5 class="mt-2">Preguntas</h5>



                <div class="container mt-1">
                  <div class="ml-5 mr-5 ">

                    <div class="row ">
                      <div class="col-sm-4 " >
                        <div lass="text-break text-align-start">

                        </div>
                      </div >
                      <div class="col-sm-4 text-align-center " >
                        <h6>Evaluación</h6>
                      </div>


                      <div class=" col-sm-4 " >
                        <p class="text-break text-align-start">
                          <h6 >Preguntas</h6>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="ml-5 mr-5">

                    <div class="row border border-dark rounded text-break">
                      <div class="col-sm-5 " >
                        <div lass="text-break text-align-start">
                          Existe orden y limpieza?
                        </div>

                      </div >
                      <div class="col-sm-2 text-align-center border-right  border-left border-dark" >
                        {props.eb1}
                      </div>


                      <div class=" col-sm-5 " >
                        <p class="text-break text-align-start">
                          {props.ob1}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="ml-5 mr-5">

                    <div class="row border border-dark rounded text-break mt-1">
                      <div class="col-sm-5 m" >
                        <div lass="text-break text-align-start">
                          El personal se encuentra debidamente capacitado para la función que ejerce?
                        </div>

                      </div >
                      <div class="col-sm-2 text-align-center  border-right  border-left border-dark" >
                        {props.eb2}
                      </div>


                      <div class=" col-sm-5 " >
                        <p class="text-break text-align-start">
                          {props.ob2}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="ml-5 mr-5 mt-1">

                    <div class="row border border-dark rounded text-break">
                      <div class="col-sm-5 " >
                        <div lass="text-break text-align-start">
                          Los residuos son desechados segun la disposición adecuada?
                        </div>

                      </div >
                      <div class="col-sm-2 text-align-center border-right  border-left border-dark" >
                        {props.eb3}
                      </div>


                      <div class=" col-sm-5 " >
                        <p class="text-break text-align-start">
                          {props.ob3}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="ml-5 mr-5 mt-1">

                    <div class="row border border-dark rounded text-break">
                      <div class="col-sm-5 " >
                        <div lass="text-break text-align-start">
                          Existen botiquines de primeros auxilios acorde a los riesgos existentes?
                        </div>

                      </div >
                      <div class="col-sm-2 text-align-center border-right  border-left border-dark" >
                        {props.eb4}
                      </div>


                      <div class=" col-sm-5 " >
                        <p class="text-break text-align-start">
                          {props.ob4}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>



                <h9 style={{ visibility: 'hidden' }}>a</h9>

                <h5 >Conclusiones y Recomendaciones</h5>
                <div class="ml-5  mr-5 row border border-dark rounded">
                  <h7 className='text-break text-aling-start ml-4 mr-4' >{props.content}</h7>
                </div>
              </div>

            </div>
          </div>
        </div >

        <div class="row justify-content-center mt-3">
          <div class="justify-content-center">

            {
              props.image[0].map((foto) => {
                console.log(ref)
                return <img scale='0.5' class="col-md-auto" height="100" src={foto} alt={foto.title} />;
              })
            }
          </div>
        </div>






      </div >

      <Pdf scale='1' targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Descargar</button>}
      </Pdf>
    </>
  );
}

export default PDF;