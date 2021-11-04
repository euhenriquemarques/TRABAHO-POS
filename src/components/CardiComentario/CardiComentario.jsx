import React, { Component } from 'react';
import "./estilo.css"

class CardiComentario extends Component {
    constructor(props) {
        super(props);
        this.numero = 0;

    }

    _curtir(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.numero = this.numero + 1;
        this.setState({ ...this.numero })
    }

    render() {
        return (
            <section className="cardi-comentario">
                <p  > {this.props.texto}</p>
                <form 
                    onSubmit={this._curtir.bind(this)}>

                    <p > {this.numero}</p>

                    <button >Curtir</button>
                </form>
            </section>
        )
    }
}

export default CardiComentario;