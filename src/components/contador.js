import React, { Component } from 'react';

class Nav extends Component {

constructor(){
    super();
    this.state = {
        puntajeMaximo : 0,
        puntaje : 0,
        time : 0
    }
    this.addPuntaje = this.addPuntaje.bind(this)
    this.addTime = this.addTime.bind(this)
    this.reiniciar = this.reiniciar.bind(this)
    setInterval(() =>{ this.addTime()},1000)
}

reiniciar(){
    this.setState({
        puntaje : 0,
        time : 0
    })
    
}

addPuntaje(){
    this.setState({
        puntaje: this.state.puntaje + 1,
        time: 0
    }) 
    this.setPuntajeMaximo()
}

setPuntajeMaximo(){
    if(this.state.puntaje >= this.state.puntajeMaximo){
        this.setState({
            puntajeMaximo: this.state.puntaje + 1
        })
    }
}

addTime(){  
    if(this.state.time < 30){
        this.setState({time: this.state.time + 1})
    }else {
        this.reiniciar()
        alert('You lose')
     }    
} 

render() {
    return (
        <div style={style.container}>
            <p> Puntaje Maximo : {this.state.puntajeMaximo}</p>
            <h1>{this.state.time}</h1>
            <h3>Puntaje: {this.state.puntaje}</h3>
            <input className="btn btn-primary" type="button" value="Jugar" onClick={this.addPuntaje}></input>
            <input className="btn btn-primary" type="button" value="Reiniciar" onClick={this.reiniciar}></input>

        </div>
    );
}
}

const style = {
    container: {
        position: 'absolute',
        right: 0,
        width: '15%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white'
    },

};

export default Nav;