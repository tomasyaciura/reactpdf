import React, { Component, useState } from 'react';
import PDF from './PDF';
import './app.css'


class Post extends Component {
    state = {
        fecha: '',
        cliente: '',
        re: '',
        email: '',
        direccion: '',
        da: '',
        content: '',
        image: [],
        postSubmitted: false,
        counter: 0,
        images: [],
        evaluation: [],
        observation: [],
        ob1: '', ob2: '', ob3: '', ob4: '',
        eb1: '', eb2: '', eb3: '', eb4: '',

    }

    handleInputChange = e => {
        this.setState({
            evaluation: this.state.evaluation.concat(e.target.value)
        })
        const last = this.state.evaluation.length - 1
        console.log(this.state.evaluation[last])
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            this.state.images.push(event.target.files)
            this.state.counter += 1
            let img = event.target.files[0];
            for (var i = 0; i < this.state.images.length; i++) {
                this.setState({
                    image: this.state.image.concat(URL.createObjectURL(this.state.images[i][0]))
                })

            }
        }
    };

    sunmitPost = (e) => {
        if (!this.state.fecha || !this.state.cliente || !this.state.re || !this.state.email || !this.state.direccion || !this.state.da || !this.state.content) {
            alert('All fields are required!');
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
        }
    }


    deleteHandler(image) {
        var index = this.state.image.indexOf(image)
        console.log(this.state.image)
        if (index === 0) {
            this.setState({ image: this.state.image.splice(1) })
        }
        else {
            this.setState(this.state.image.splice(index, index));
        }
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        const last = this.state.evaluation.length
        return (
            <div >
                {!this.state.postSubmitted ?
                    (
                        <div class="form-row">
                            <div class="col-sm-10" >
                                <div >
                                    <div>
                                        <div>
                                            <form method="submit">
                                                <div style={{ marginBottom: '1rem' }}></div>
                                                <fieldset className="form-group" class="shadow sm-3 bg-white rounded">
                                                    <h2 style={{ marginBottom: '2rem', marginTop: '1rem' }}>RECORRIDO DE SEGURIDAD E HIGIENE</h2>

                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-sm-6 ">
                                                                <div class="col-md-auto">
                                                                    <h5 style={{ padding: '2px' }}>Fecha</h5>
                                                                    <input style={{ padding: '2px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('fecha')} name="title" type="date" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6">
                                                                <div class="col-md-auto">
                                                                    <h5 style={{ padding: '2px' }}>E-mail</h5>
                                                                    <input style={{ padding: '2px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('email')} name="title" type="text" placeholder="E-mail" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="col-md-auto">
                                                                    <h5 style={{ padding: '2px' }}>Cliente</h5>
                                                                    <input style={{ padding: '2px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('cliente')} name="title" type="text" placeholder="Cliente" />
                                                                </div>
                                                            </div>


                                                            <div class="col-sm-6">
                                                                <div class="col-md-auto">
                                                                    <h5 style={{ padding: '2px' }}>Direccion</h5>
                                                                    <input style={{ padding: '2px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" placeholder="Direccion" onChange={this.onChange('direccion')} name="title" type="email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="container">

                                                        <div class="col">
                                                            <h5 style={{ marginTop: '20px' }}>Representante</h5>
                                                            <input style={{ padding: '6px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('re')} name="title" type="text" placeholder="Representante" />
                                                        </div>
                                                        <div class="col">
                                                            <h5 style={{ marginTop: '20px' }}>Datos Adicionales</h5>
                                                            <input style={{ padding: '6px' }} class="form-control shadow-sm sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('da')} name="title" type="text" placeholder="Datos Adicionales" />
                                                        </div>




                                                    </div>

                                                    <div >
                                                        <h5 style={{ marginTop: '20px' }} class="row justify-content-center"> LUGAR DE TRABAJO </h5>

                                                        <div class="row" >

                                                            <div style={{ padding: '20px', paddingLeft: '4rem' }} class="col-sm-5">

                                                                <h6 style={{ marginBottom: '15px' }} >Preguntas</h6>
                                                                <div style={{ marginTop: '5px' }}>
                                                                    <div class="col-md-auto  border border-light rounded shadow p-3 bg-white rounded"> Existe orden y limpieza?</div>
                                                                </div>

                                                                <div style={{ marginTop: '15px' }}>
                                                                    <div class="col-md-auto  border border-light rounded shadow p-3 bg-white rounded"> El personal se encuentra debidamente capacitado para la función que ejerce?</div>
                                                                </div>

                                                                <div style={{ marginTop: '15px' }}>
                                                                    <div class="col-md-auto  border border-light rounded shadow p-3 bg-white rounded"> Los residuos son desechados segun la disposición adecuada?</div>
                                                                </div>

                                                                <div style={{ marginTop: '15px' }}>
                                                                    <div class="col-md-auto  border border-light rounded shadow p-3 bg-white rounded"> Existen botiquines de primeros auxilios acorde a los riesgos existentes?</div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-2.8">
                                                                <h6 class="" style={{ marginTop: '20px' }}>Evaluación</h6>

                                                                <div>

                                                                    <div className='dropdown' class="col-md-auto" style={{ marginTop: '1rem' }}>
                                                                        <select class=" border rounded shadow p-3 bg-white rounded" onChange={this.onChange('eb1')}>
                                                                            <option disabled selected value=''>Seleccione</option>
                                                                            <option>En proceso</option>
                                                                            <option>Cumple</option>
                                                                            <option>No aplica</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className='dropdown' class="col-md-auto" style={{ marginTop: '2.5rem' }} >
                                                                        <select class=" border rounded shadow p-3 bg-white rounded" onChange={this.onChange('eb2')}>
                                                                            <option disabled selected value=''>Seleccione</option>
                                                                            <option>En proceso</option>
                                                                            <option>Cumple</option>
                                                                            <option>No aplica</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className='dropdown' class="col-md-auto" style={{ marginTop: '4.5rem' }}>
                                                                        <select class=" border rounded shadow p-3 bg-white rounded" onChange={this.onChange('eb3')}>
                                                                            <option disabled selected value=''>Seleccione</option>
                                                                            <option>En proceso</option>
                                                                            <option>Cumple</option>
                                                                            <option>No aplica</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className='dropdown' class="col-md-auto" style={{ marginTop: '3.7rem' }}>
                                                                        <select class=" border rounded shadow p-3 bg-white rounded" onChange={this.onChange('eb4')}>
                                                                            <option disabled selected value=''>Seleccione</option>
                                                                            <option>En proceso</option>
                                                                            <option>Cumple</option>
                                                                            <option>No aplica</option>
                                                                        </select>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                            <div class="col-sm-4 ">

                                                                <h6 style={{ marginTop: '20px' }}>Observación</h6>

                                                                <div class="col" style={{ marginTop: '1rem' }}>

                                                                    <textarea class="form-control border boerder-dark shadow sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('ob1')} name="title" type="text" placeholder="Observación" />
                                                                </div>

                                                                <div class="col" style={{ marginTop: '2.1rem' }}>

                                                                    <textarea class="form-control border boerder-dark shadow sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('ob2')} name="title" type="text" placeholder="Observación" />
                                                                </div>

                                                                <div class="col" style={{ marginTop: '4rem' }}>

                                                                    <textarea class="form-control border boerder-dark shadow sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('ob3')} name="title" type="text" placeholder="Observación" />
                                                                </div>

                                                                <div class="col" style={{ marginTop: '3.3rem' }}>

                                                                    <textarea class="form-control border boerder-dark shadow sm-3 bg-white rounded" id="inputEmail4" onChange={this.onChange('ob4')} name="title" type="text" placeholder="Observación" />
                                                                </div>
                                                            </div>





                                                        </div>
                                                    </div>

                                                    <div class="row justify-content-center">

                                                        <div class='col-sm' style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                                                            <h5 style={{ marginTop: '20px' }}>Conclusiones y Recomendaciones</h5>
                                                            <textarea style={{ marginBottom: '1rem', }} class="form-control shadow-sm  bg-white rounded" id="exampleFormControlTextarea1" rows="3" onChange={this.onChange('content')} placeholder="Conclusiones y Recomendaciones"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className='row justify-content-center'>
                                                        <div class="form-group justify-content-center">
                                                            <label style={{ width: '13rem', height: '3rem' }} for='files' class="border boerder-dark shadow sm-3 bg-white rounded" >Seleccionar imagen</label>

                                                        </div>

                                                        <div class="row justify-content-center">

                                                            <input id='files' class="form-control-file col-sm-9" style={{ visibility: 'hidden' }} type="file" accept=".png, .jpg, .jpeg .webp" name="myImage" onChange={this.onImageChange} />



                                                            {this.state.images.length > 0 && this.state.image.map(foto => {
                                                                return <div style={{ textAlign: 'center' }}>
                                                                    <img style={{ marginTop: '5px', marginBottom: '5px' }} class="col-md-auto" height="100" margin="50px auto 0 auto" alt="upload" src={foto} />
                                                                    <button style={{ marginTop: '1px', marginBottom: '5px' }} type='button' onClick={() => this.deleteHandler(foto)} className=" border boerder-dark shadow sm-3 bg-danger rounded" >X </button>
                                                                </div>

                                                            })
                                                            }


                                                        </div>


                                                    </div>
                                                    <button style={{ marginTop: '10px', marginBottom: '10px' }} class="col-md-10 sm 30" className="btn btn-dark" type="button" onClick={this.sunmitPost}>Preview</button>

                                                </fieldset>
                                                <div style={{ marginBottom: '1rem' }}></div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    ) : (
                        <PDF
                            fecha={this.state.fecha} cliente={this.state.cliente} re={this.state.re}
                            email={this.state.email} direccion={this.state.direccion}
                            da={this.state.da} content={this.state.content} image={[this.state.image]}
                            ob1={this.state.ob1} ob2={this.state.ob2} ob3={this.state.ob3} ob4={this.state.ob4}
                            eb1={this.state.eb1} eb2={this.state.eb2} eb3={this.state.eb3} eb4={this.state.eb4} />
                    )
                }
            </div>
        );
    }
}

export default Post;