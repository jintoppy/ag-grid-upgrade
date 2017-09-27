import React, { Component } from 'react';
import Grid from './Grid';
import logo from './logo.svg';
import './App.css';
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        rowData: this.createRowData()
    }
    this.onselect = this.onselect.bind(this);
}

onselect(){
  let data = [];
  this.state.rowData.forEach(item => {
    data.push(item);
  });
  data.push({make: "Toyota", checked: true, model: "Celica", price: 35000+Math.random()});
  this.setState({
    rowData: data
  })
}

createRowData() {
    return [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Grid 
          onselect={this.onselect}
          data={this.state.rowData} />
      </div>
    );
  }
}

export default App;
