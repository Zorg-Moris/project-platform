import React, { Component } from 'react';
import ProjectList from '../views/projectList';
import './projectList.css';
import * as projectApi from '../../server/projectApi';
import { connect } from 'react-redux';

class ProjectListContainer extends Component {

    componentDidMount() {
        projectApi.getAllProjects();
    }


    showProjectList() {
        console.log("showTableRow");
        return this.props.projects.map(function (project, i) {
            return <ProjectList project={project} key={i} />
        });
    }

    render() {

        if (this.props.projects.length) {


            return (
                <div>
                    <h3 align="center">Projects List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Person</th>
                                <th>Project</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th colSpan="2">Likes</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProjectList projects={this.props.projects}></ProjectList>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <div> NO project </div>
        }
    }
}


const mapStateToProps = function (store) {
    console.log("projectListCont store - ", store);
    return {
        projects: store.projectState.projects
    };
};

export default connect(mapStateToProps)(ProjectListContainer);