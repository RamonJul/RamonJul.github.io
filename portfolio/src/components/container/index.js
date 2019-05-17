import React,{Component} from 'react';
import './style.css';

class Container extends Component{
    location=()=>{
            if(window.location.pathname==="/projects"){
                return(

                    <div id="container" className="card">
                    {this.props.children}
                </div>      

                )
            }
            else{
                return(
      
                    <div id="container">
                        {this.props.children}
                    </div>
               
      
    
            )
            }

    }
    render(){
      
            return(this.location())
    }
}

export default Container;