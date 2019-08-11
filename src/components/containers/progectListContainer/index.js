import React, { Component } from 'react';
import ProjectList from '../../views/progectList/projectList';
import './projectList.css';
import * as projectApi from '../../../Api/projectApi';
import { connect } from 'react-redux';

class ProjectListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeTogle: true,
            dateToggle: true
        }
    }

    componentDidMount() {
        projectApi.getAllProjects();
    }


    sortLikes = () => {
        if (this.state.likeTogle) {
            this.setState({ likeTogle: false })
        } else {
            this.setState({ likeTogle: true })
        }
        projectApi.sortLikesApi(this.state.likeTogle);
    }

    sortDate = () => {
        if (this.state.dateToggle) {
            this.setState({ dateToggle: false })
        } else {
            this.setState({ dateToggle: true })
        }
        projectApi.sortDateApi(this.state.dateToggle);
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
                                <th><label onClick={ this.sortDate }>Date</label></th>
                                <th colSpan="2">
                                    <label onClick={ this.sortLikes }>Likes</label>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProjectList projects={ this.props.projects } user={ this.props.user }></ProjectList>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <div> NO project </div>
        }
    }
}


const mapStateToProps = (store)=> {
    console.log("ProjectListContainer store - ", store);
    return {
        projects: store.projectState.projects,
        user: store.authenticationState.user
    };
};

export default connect(mapStateToProps)(ProjectListContainer);