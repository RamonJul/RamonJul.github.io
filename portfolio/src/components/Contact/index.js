import React,{Component} from 'react';
import Container from './../container/index';
import './style.css';
class Contact extends Component{

    render(){
        return(
            <Container>

                <div id="BasicInfo">
                <ul id="info">
                    <li>Email</li>
                    <li>Phone</li> 
                </ul>
                <ul id="OtherSites">
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>

            <div id="ContactForm">

            <form method="POST" action="https://formspree.io/ramoncarlosjulian@gmail.com">
                <input type="email" name="email" placeholder="Your email"></input>
                <textarea name="message" placeholder="Test Message"></textarea>
                <button type="submit">Send Test</button>
                </form>

            </div>
            </Container>
          
    
        )

    }
}
export default Contact;