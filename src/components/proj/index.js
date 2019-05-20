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
        this.setState({show:false})
    }
    render(){
        return(
          
                <button className="btn project"  onClick={this.handleShow}>
                <div className="card " >
                   
                    <div className="card-body">
                    <img src={this.props.image} className="card-img-top" alt="..."/>
                    <h5 className="card-title">{this.props.name}</h5>
                    </div>
                </div>
                <div onClick={e => e.stopPropagation()}>
                <Modal show={this.state.show} onHide={this.handleClose} className="modal">
                <Modal.Header  className="header">
                         <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>   
                <Modal.Body className="modalBody">
                <img src={this.props.image} className="card-img-top" alt="..."/>
                <ul className="linkList">
                    <li className="links"><a  href={this.props.GitHub} className="btn">GitHub</a></li>
                    <li className="links"><a href={this.props.Site} className="btn">Site</a></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer className='footer'>
                    <p className="description">{this.props.description}</p>
                    <p>Technologies:</p>
                
                    <ul className="technologies">
                    {this.props.technologies.map(element=>(
                            <li className="technology">{element}</li>
                    ))}
                    </ul>
                    
                </Modal.Footer>
               
                </Modal>
                </div>
              
                </button>
        
         

        )

    }

}

export default ProjectCard;