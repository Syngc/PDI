import React, { Component } from 'react';
import Camera from './components/camera'
import Nav from './components/contador'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App" style={style.container}>
      <Camera></Camera>
      <Nav></Nav>
      </div>
    );
  }
}
const style = {
  container:{
   
    backgroundColor: 'black'
  }
  
}
export default App;
