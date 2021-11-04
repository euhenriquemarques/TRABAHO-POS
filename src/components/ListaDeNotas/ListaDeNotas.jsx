import React, { Component } from "react";
import CardiNota from "../CardiNotas";
import "./estilo.css"

export class ListaDeNotas extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <ul className="lista-notas">
                {this.props.notas
                .map((notas, index) => {
                    return (
                        <li key={index} className="lista-notas_item">
                            <CardiNota titulo={notas.titulo} texto={notas.texto} />
                        </li>
                    );
                })}

            </ul>
        )
    }
}

export default ListaDeNotas;