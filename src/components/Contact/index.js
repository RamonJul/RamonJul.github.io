import React,{Component} from 'react';
import Container from './../container/index';
import './style.css';
class Contact extends Component{

    render(){
        return(
            <Container>

                <div id="BasicInfo">
                <ul id="info">
                    <li>Email: ramoncarlojulian@gmail.com</li>
                    <ul></ul>
                    <li>Phone: (289)-981-1380</li> 
                    <li className="links"><a href="linkedin.com/in/ramon-julian-95613a134">LinkedIn</a></li>
                    <li className="links"><a href="https://github.com/RamonJul">GitHub</a></li>
                </ul>
             </div>

          

            <form id="ContactForm" method="POST" action="https://formspree.io/ramoncarlosjulian@gmail.com">
                
                <input id="name" className="form form-control" type="email" name="email" placeholder="Your email"></input>
                <textarea  id="message" className="form form-control" name="message" placeholder="Message"></textarea>
                <button id="form" className="btn" type="submit">Send</button>
                </form>

        
            </Container>
          
    
        )

    }
}
export default Contact;