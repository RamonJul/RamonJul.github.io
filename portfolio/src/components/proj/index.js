import React,{Component} from 'react';
import {Modal} from 'react-bootstrap'
import './style.css';

class ProjectCard extends Component{
    
    state={
        show:false
    }

    handleShow=()=>{
        this.setState({show:true})
    }   

   handleClose=()=>{
       console.log(this)
        this.setState({show:false},()=>{console.log(this.state)})
    }
    render(){
        return(
          
                <button className="btn project"  onClick={this.handleShow}>
                <div className="card " >
                    <img src={this.props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                         <Modal.Title>Title</Modal.Title>
                </Modal.Header>   
                <Modal.Body>
                <img src={this.props.image} className="card-img-top" alt="..."/>
              
                </Modal.Body>
                <Modal.Footer className='footer'>
                    <p>Description:</p>
                    <p>Technologies:</p>
                    <ul className="technologies">
                    <li className="technology">1</li>
                    <li className="technology">2</li>
                    </ul>
                    <ul>
                    <li className="links"><a href="" className="btn">GitHub</a></li>
                    <li className="links"><a href="" className="btn">Site</a></li>
                    </ul>
                </Modal.Footer>
               
                </Modal>
                </button>
        
         

        )

    }

}

export default ProjectCard;