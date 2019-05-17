import React,{Component} from 'react';
import Container from './../container/index';
import './style.css';
class BrandStatement extends  Component{

    render(){

        return(

            <Container>
                
                <img id='headshot'alt="headshot" src="https://res.cloudinary.com/daawmv4sy/image/upload/v1557864065/IMG_0741.jpg">
                </img>
                
                
                <div id="statementHolder">
                    <p id="statement">
                    Full Stack Web Developer with a background in Mechanical Engineering and a recent graduate of the University of Toronto Web Development Intensive Boot Camp and and a love for expressing my creativity through designing, building and problem solving Skilled in various web technologies such as JavaScript, Node, MySQL and React and in delivering assigned tasks on schedule creativity and teamwork . Positioned well to provide unique collaboration opportunities and innovative ideas using my team working  and creativity skills                    </p>
                </div>
             
            </Container>

        )
    }
}

export default BrandStatement