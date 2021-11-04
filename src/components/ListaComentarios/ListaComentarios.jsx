import React, { Component } from "react";
import CardiComentario from "../CardiComentario";
import "./estilo.css"

export class ListaComentarios extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <ul>
                {this.props.comentarios
                    .map((comentarios, index) => {
                        { console.log(this.props.comentarios) }
                        return (
                            <li key={index} >
                                <CardiComentario texto={comentarios.texto} />

                            </li>
                        );
                    })}

            </ul>
        )
    }
}

export default ListaComentarios;