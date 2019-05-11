import React,{Component} from 'react';
import './style.css';
class Container extends Component{

    render(){
        return(
      
                <div id="container">
                    {this.props.children}
                </div>
           
  

        )

    }
}

export default Container;