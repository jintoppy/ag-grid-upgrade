import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import Checkbox from './Checkbox';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(props)            
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs(props) {
        return [
            {
                field: 'checked',
                cellRendererFramework: Checkbox,
                cellRendererParams: {
                    onClick: props.onselect.bind(this)
                }
            },
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];
    }

    render() {
        let containerStyle = {
            height: 115,
            width: 500
        };
        let data = this.props.data;

        console.log(this.props.data);

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                {JSON.stringify(this.props.data[0])}
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={data}
                    deltaRowDataMode
                    getRowNodeId={(data) => data.price}
                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};