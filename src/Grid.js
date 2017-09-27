import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

export default class extends Component {
    constructor(props) {
        super(props);

    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    // headerName: 'Workflow Transition Timestamp',
    // field: 'WorkflowLastModifiedTime',
    // colId: 'Workflow.LastModifiedTime',
    
    // width: scorecardConstants.SELECT_COLUMN_DEFAULT_WIDTH,
    // minWidth: scorecardConstants.SELECT_COLUMN_DEFAULT_WIDTH,
    // headerComponentFramework: GridHeaderContainer,
    // headerComponentParams: {
    // columnData: [],
    // facetedColumnValuesUrl,
    // persistSort,
    // persistFilters
    // }    

    render() {
        let containerStyle = {
            height: 500,
            width: 500
        };
        let data = this.props.data;

        console.log(this.props.data);

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    // properties
                    enableColResize
                    suppressMovableColumns={false}
                    columnDefs={this.props.cols}
                    rowData={data.asMutable({deep: true})}
                    paginationPageSize={100}
                    deltaRowDataMode
                    getRowNodeId={(data) => data.id}
                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};