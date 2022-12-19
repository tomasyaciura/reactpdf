import React from "react";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

import Pdf from "react-to-pdf";
import './app.css'

const ref = React.createRef();

function App() {
    const printPDF = () => {
        const domElement = document.getElementById("root");
        html2canvas(domElement, {
            onclone: document => {
                document.getElementById("print").style.visibility = "hidden";
            }
        }).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPdf();
            pdf.addImage(imgData, "JPEG", 10, 10);
            pdf.save(`${new Date().toISOString()}.pdf`);
        });
    };


    const PDF = (props) => {
        return (
            <fieldset class="form-group" className='App'>
                <div class="justify-content-center" style={{ padding: '10px', marginLeft: '39rem', marginRight: '39rem' }} >

                    <div class="container" style={{ textAlign: 'justify' }} >

                        <div class="row " >
                            <div>
                                <div class=" row border border-dark rounded">
                                    <div class="col-sm-6 ">
                                        <div class="col-md" style={{ marginTop: '3px' }}>
                                            <h7 class="text-break">Fecha: {props.fecha}</h7>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <div class="col-md" style={{ marginTop: '3px' }}>
                                            <h7 class="text-break ">E-mail: {props.email}</h7>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <div class="col-md" style={{ marginTop: '3px' }}>
                                            <h7 class="text-break ">Cliente: {props.cliente}</h7>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="col-md" style={{ marginTop: '3px' }}>
                                            <h7 class="text-break">Direccion: {props.direccion}</h7>
                                        </div>
                                    </div>
                                    <div class="col-sm-7 ">
                                        <div class="col-md-auto" style={{ marginTop: '3px', marginBottom: '5px' }}>

                                            <h7 class="text-break ">Representante: {props.re}</h7>
                                        </div>
                                    </div>
                                </div>
                                <div class=" row border border-dark rounded" style={{ marginTop: '1rem' }} >
                                    <div class="col-sm-auto">

                                        <div class="col-md-auto" style={{ marginTop: '5px', marginBottom: '5px' }}>
                                            <h7 class="text-break text-align-start ">Datos Adicionales: {props.da}</h7>
                                        </div>
                                    </div>
                                </div>
                                <h6 style={{ marginTop: '20px' }}>Conclusiones y Recomendaciones</h6>
                                <div class=" row border border-dark rounded" style={{ marginTop: '25px' }} >
                                    <h7 className='text-break text-aling-start' style={{ marginLeft: '1rem', marginRight: '1rem' }}>{props.content}</h7>
                                </div>
                            </div>
                        </div>
                    </div>



                    {
                        props.image[0].map((foto) => {
                            console.log(ref)
                            return <img className='image' height="200" src={foto} alt={foto.title} />;
                        })
                    }


                    <button class="btn btn-primary mt-3" id="print">Print</button>
                </div>
            </fieldset>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
