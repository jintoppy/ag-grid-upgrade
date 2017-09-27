import React, { Component } from 'react';
import {connect} from "react-redux";
import Checkbox from './Checkbox';
import Grid from './Grid';
import logo from './logo.svg';
import * as actions from './actions';
import './App.css';
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateRowData: () => {
      dispatch(actions.updateRowData());
    }
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.onselect = this.onselect.bind(this);
}

createColumnDefs() {
  return [
      {
          field: 'checked',
          cellRendererFramework: Checkbox,
          cellRendererParams: {
              onClick: this.onselect.bind(this)
          },
          pinned: 'left'
      },
      {
          headerName: "Make", 
          field: "make",
          suppressResize: true,
          suppressFilter: true,
          suppressSorting: true,
          suppressToolPanel: true,
          cellRenderer: function(params){
              return `data is ${params.data}`;
          },
          width: 100
      },
      {headerName: "Model", field: "model"},
      {headerName: "Price", field: "price"}
  ];
}

onselect(){
  this.props.updateRowData();
}

render() {
    const cols = this.createColumnDefs();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Grid 
          cols={cols}
          onselect={this.onselect}
          data={this.props.data} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
