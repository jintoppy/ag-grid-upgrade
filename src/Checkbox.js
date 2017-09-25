import React, {Component} from "react";

class Checkbox extends Component {    
    componentDidMount(){
        console.log('component did mount');
    }

    componentWillMount(){
        console.log('component will mount');
    }

    render(){
       return (
           <div>
               <input type="checkbox" onChange={this.props.onClick} />
           </div>
       ) 
    }
}

export default Checkbox;