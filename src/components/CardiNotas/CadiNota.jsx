import React, { Component } from 'react';
import ListaComentarios from '../ListaComentarios';
import "./estilo.css"

class CardiNota extends Component {

    constructor(props) {
        super(props);
        this.texto = "";
        this.comentario = "";
        this.state = {
            comentarios: []
        };
    }

    _handleMudancaTextoComentario(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarComentario(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this._gerarComentario(this.texto);
    }

    _gerarComentario(texto){
        const novoComentario = { texto};
      const novoArrayComentario = [...this.state.comentarios,novoComentario]
      const novoEstado={
        comentarios:novoArrayComentario
      }
      this.setState(novoEstado)
    }


    render() {
        return (
            <section className="cardi-nota">
                <header className="cardi-nota_cabecalho">
                    <h3 className="cardi-nota_titulo">
                        {this.props.titulo}
                    </h3>
                </header>
                <p className="cardi-nota_texto"> {this.props.texto}</p>
                <ListaComentarios comentarios={this.state.comentarios} />

                <form
                    onSubmit={this._criarComentario.bind(this)}>
                    <textarea
                        rows={1}
                        placeholder="Comentario"
                        className="cardi-nota_input"
                        onChange={this._handleMudancaTextoComentario.bind(this)} />

                    <button className="cardi-nota_submit" >Adicionar</button>
                </form>



            </section>
        )
    }
}

export default CardiNota;