import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as projectApi from '../../server/projectApi';
import './projectList.css';

class projectList extends Component {

    onDelete = (id) => {
        projectApi.deleteProgectDb(id);
    }

    onSetInfoLike=(id, e)=> {
      
        let infolike  = e.target.dataset.infolike;
        console.log(infolike);
        console.log("function like ID- ", id);
        
        projectApi.setInfoLike(id,infolike);

    }

    render() {
        return (
            <React.Fragment>
                {this.props.projects.map(project => {
                    return (
                        <tr key={project._id}>
                            <td>
                                {project.person_name}
                            </td>
                            <td>
                                {project.project_name}
                            </td>
                            <td>
                                {project.description}
                            </td>
                            <td>
                                {project.date}
                            </td>
                            <td>
                                <label data-infolike="like" onClick={(e)=>this.onSetInfoLike(project._id,e)}> {project.like}</label>
                            </td>
                            <td>
                                <label data-infolike="dizlike" onClick={(e)=>this.onSetInfoLike(project._id,e)}>{project.dizlike}</label>
                            </td>
                            <td>
                                <Link to={"/edit/" + project._id} className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => this.onDelete(project._id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })
                }
            </React.Fragment >
        );
    }
}

export default projectList; 