import React ,{Component} from 'react';
import Main from '../components/mainBar/index';
import ContactPage from '../components/Contact/index'
class Contact extends Component{

     render(){

        return(
            <Main>
                <ContactPage/>

            </Main>

        )
     }   

};

export default Contact;