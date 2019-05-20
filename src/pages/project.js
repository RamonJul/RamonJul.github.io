import React ,{Component} from 'react';
import Main from './../components/mainBar/index';
import Projects from './../projects/proj.json';
import Card from './../components/proj/index';
import Container from './../components/container/index';

class Proj extends Component{

     render(){

        return(
            <Main>
                <Container>
                {Projects.map(element=>(
                        <Card
                         key={element.id} 
                         name={element.name}
                         image={element.image} 
                         description={element.description}
                         technologies={element.technologies} 
                         Site={element.Site}
                         GitHub={element.GitHub}
                         />
                    ))}
                </Container>
           
         
            </Main>
            
        )
     }   

};

export default Proj;