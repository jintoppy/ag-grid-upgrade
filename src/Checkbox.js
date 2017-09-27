import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from './actions';

const mapStateToProps = (state) => {
    return {
      selectedRows: state.selectedRows
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateRowData: () => {
        dispatch(actions.updateRowData());
      },
      selectRow: (row) => {
          dispatch(actions.selectRow(row))
      }
    };
  };

class Checkbox extends Component {    
    constructor(props){
        super(props);
        this.isSelectedRow = this.isSelectedRow.bind(this);
    }
    componentDidMount(){
        console.log('component did mount');
    }

    componentWillMount(){
        console.log('component will mount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    isSelectedRow() {
        return !!this.props.selectedRows[this.props.data.id]
    }
    render(){
       return (
           <div>
               <input type="checkbox" checked={this.isSelectedRow()} onChange={this.props.selectRow.bind(this, this.props.data)} />
           </div>
       ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);