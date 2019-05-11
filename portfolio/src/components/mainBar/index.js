import React,{Component} from 'react';
import './style.css';
class Main extends Component{

    render(){
        return(
            <div id="mainBar"className="col-9">

            {this.props.children}
                </div>
           
            
        )

    }
}

export default Main;