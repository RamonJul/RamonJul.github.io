import React,{Component} from 'react';

class ProjectCard extends Component{
   
    render(){
        return(
          
                <button className="btn">
                <div className="card " >
                    <img src={this.props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    </div>
                </div>
                </button>
        
   

        )

    }

}

export default ProjectCard;