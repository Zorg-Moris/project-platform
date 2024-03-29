import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as projectApi from '../../../Api/projectApi';
import './userProjectList.css';


class userProjectList extends Component {

    onDelete = (id) => {
        projectApi.deleteProgectDb(id);
    }

    render() {

        return (
            <React.Fragment>
                { this.props.projects.map(project => {
                    return (
                        <tr key={ project._id }>
                            <td>
                                { project.user_name }
                            </td>
                            <td>
                                { project.project_name }
                            </td>
                            <td>
                                { project.description }
                            </td>
                            <td>
                                { project.date }
                            </td>
                            <td>
                                { project.like }
                            </td>
                            <td>
                                { project.dizlike }
                            </td>
                            <td>
                                <Link to={ "/edit/" + project._id } className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={ () => this.onDelete(project._id) }>Delete</button>
                            </td>
                        </tr>
                    );
                })
                }

            </React.Fragment >
        );
    }
}

export default userProjectList; 