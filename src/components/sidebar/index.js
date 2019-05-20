import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './style.css'
class SideBar extends Component{
    render(){

        return( 
            <div id="sideBar" className="col-2" > 
                <ul id="options">

                     <Link to="/" className={window.location.pathname==="/"?"nav-link active" : "nav-link" }>
                        <li id="About">
                        <p href="">Home</p>  
                        </li>
                    </Link>   
                    <Link to="/about" className={window.location.pathname==="/about"?"nav-link active" : "nav-link" }>
                        <li id="About">
                        <p href="">About</p>  
                        </li>
                    </Link> 
                    <Link to="/projects" className={window.location.pathname==="/projects"?"nav-link active" : "nav-link" }>
                    <li>
                        <p href="">Projects</p>

                    </li>
                    </Link> 
                    <Link to="/contact" className={window.location.pathname==="/contact"?"nav-link active" : "nav-link" }>
                    <li>
                        <p href="">Contact</p> 
                    </li>
                    </Link> 
              
                   

                </ul>

            </div>


        )
    }




}

export default SideBar